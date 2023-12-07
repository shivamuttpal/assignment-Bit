const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Task = require('./models/task');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


const User = require('./models/user');

// User registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.status(201).send('User registered successfully');
});

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid username or password');
  }

  const token = jwt.sign({ _id: user._id, username: user.username }, 'your-secret-key');
  res.json({ token });
});



// MongoDB connection
mongoose.connect('mongodb://localhost/task_management', { useNewUrlParser: true, useUnifiedTopology: true });

// Token authentication middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Unauthorized');

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.status(403).send('Forbidden');
    req.user = user;
    next();
  });
};

// API Endpoints

// List all tasks
app.get('/tasks', authenticateToken, async (req, res) => {
  const tasks = await Task.find({ owner: req.user._id });
  res.json(tasks);
});

// Retrieve a single task by ID
app.get('/tasks/:id', authenticateToken, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
  res.json(task);
});

// Create a new task
app.post('/tasks', authenticateToken, async (req, res) => {
  const taskData = { ...req.body, owner: req.user._id };
  const task = new Task(taskData);
  await task.save();
  res.status(201).json(task);
});

// Update an existing task
app.put('/tasks/:id', authenticateToken, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, owner: req.user._id },
    { $set: req.body },
    { new: true }
  );
  res.json(task);
});

// Delete a task
app.delete('/tasks/:id', authenticateToken, async (req, res) => {
  await Task.deleteOne({ _id: req.params.id, owner: req.user._id });
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
