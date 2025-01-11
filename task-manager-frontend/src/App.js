import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  // Add a new task
  const addTask = async () => {
    if (newTask.trim() === '') return; // Prevent empty tasks
    await axios.post('http://localhost:5000/tasks', { task: newTask });
    setNewTask('');
    fetchTasks();
  };

  // Delete a task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>

      <main className="app-content">
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-text">{task.task}</span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>

      <footer className="app-footer">
        <p>My superduper prooo project, Deployed on k8s</p>
      </footer>
    </div>
  );
};

export default App;
