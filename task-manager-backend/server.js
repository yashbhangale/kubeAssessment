const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',        // Your PostgreSQL username
  host: 'localhost',       // PostgreSQL host
  database: 'taskdb',      // Database name
  password: 'password', // Your PostgreSQL password
  port: 5432,              // Default PostgreSQL port
});

// API Endpoints
app.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');
  res.json(result.rows);
});

app.post('/tasks', async (req, res) => {
  const { task } = req.body;
  await pool.query('INSERT INTO tasks (task) VALUES ($1)', [task]);
  res.status(201).send('Task added');
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  res.send('Task deleted');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
