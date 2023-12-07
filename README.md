# Task Management API

This is a simple RESTful API for task management using Node.js, Express.js, and MongoDB. The API supports CRUD operations for tasks, token-based authentication, and user permissions.

## Getting Started

Follow the instructions below to set up and run the project.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shivamuttpal/assignment-Bit.git
   cd task-management-api

### Install Dependencies

   npm install

### Configuration

1. Create a `.env` file in the root directory with the following content:

   ```env
   MONGODB_URI=mongodb://localhost/task_management
   JWT_SECRET=your-secret-key

Replace your-secret-key with a strong, unique secret key for JWT token signing



## Running the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

- **List all tasks:**
  - Endpoint: `GET /tasks`
  - Requires authentication token in the `Authorization` header.

- **Retrieve a single task by ID:**
  - Endpoint: `GET /tasks/:id`
  - Requires authentication token in the `Authorization` header.

- **Create a new task:**
  - Endpoint: `POST /tasks`
  - Requires authentication token in the `Authorization` header.

- **Update an existing task:**
  - Endpoint: `PUT /tasks/:id`
  - Requires authentication token in the `Authorization` header.

- **Delete a task:**
  - Endpoint: `DELETE /tasks/:id`
  - Requires authentication token in the `Authorization` header.

- **User Registration:**
  - Endpoint: `POST /register`
  - Register a new user.

- **User Login:**
  - Endpoint: `POST /login`
  - Obtain an authentication token.

## Running Tests

Make sure the server is not running when you run tests. Use the following command:

```bash
npm test
```

## Additional Notes

- Ensure that MongoDB is running and accessible.
- Handle errors appropriately in a production environment.
- This is a basic example; consider enhancing security and features based on your requirements.

