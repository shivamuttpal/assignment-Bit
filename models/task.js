const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
