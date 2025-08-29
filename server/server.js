import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;

const PORT = process.env.PORT || 3001;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'demo_user',
  password: process.env.DB_PASSWORD || 'demo_password',
  database: process.env.DB_DATABASE || 'demo_db'
});

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok' });
});

// Return all items
app.get('/api/items', async (_, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM items ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'database_error' });
  }
});
//adsfasfsaf
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
