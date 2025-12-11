import express from 'express';
import cors from 'cors';
import type { Task, CreateTaskInput, UpdateTaskInput, Priority } from '../src/types/Task';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// In-memory storage - Sample solar troubleshooting tasks
let tasks: Task[] = [
  {
    id: '1',
    title: 'Check main solar breaker',
    description: 'Verify the solar breaker in your main electrical panel is in the ON position. It should be labeled "Solar" or "PV".',
    status: 'done',
    priority: 'high',
    createdAt: new Date('2024-01-01').toISOString(),
    updatedAt: new Date('2024-01-01').toISOString()
  },
  {
    id: '2',
    title: 'Verify inverter display is on',
    description: 'Check if your inverter display screen is lit up and showing information. Look for any error codes or warning lights.',
    status: 'in-progress',
    priority: 'high',
    createdAt: new Date('2024-01-02').toISOString(),
    updatedAt: new Date('2024-01-03').toISOString()
  },
  {
    id: '3',
    title: 'Confirm internet connectivity',
    description: 'Ensure your home internet is working. The monitoring system needs internet to report production data.',
    status: 'todo',
    priority: 'medium',
    createdAt: new Date('2024-01-03').toISOString(),
    updatedAt: new Date('2024-01-03').toISOString()
  },
  {
    id: '4',
    title: 'Check for physical damage or debris',
    description: 'Visually inspect your solar panels from the ground for any obvious damage, heavy debris, or shading from new tree growth.',
    status: 'todo',
    priority: 'low',
    createdAt: new Date('2024-01-03').toISOString(),
    updatedAt: new Date('2024-01-03').toISOString()
  }
];

let nextId = 5;

// GET /api/tasks - Get all tasks
app.get('/api/tasks', (req, res) => {
  const { status, priority } = req.query;

  let filteredTasks = tasks;

  if (status && typeof status === 'string') {
    filteredTasks = filteredTasks.filter(task => task.status === status);
  }

  if (priority && typeof priority === 'string') {
    filteredTasks = filteredTasks.filter(task => task.priority === priority);
  }

  res.json(filteredTasks);
});

// GET /api/tasks/:id - Get task by ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

// POST /api/tasks - Create new task
app.post('/api/tasks', (req, res) => {
  const input: CreateTaskInput = req.body;

  if (!input.title || input.title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask: Task = {
    id: String(nextId++),
    title: input.title,
    description: input.description || '',
    status: 'todo',
    priority: input.priority || 'medium',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Update task
app.put('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const update: UpdateTaskInput = req.body;
  const task = tasks[taskIndex];

  tasks[taskIndex] = {
    ...task,
    title: update.title ?? task.title,
    description: update.description ?? task.description,
    status: update.status ?? task.status,
    priority: update.priority ?? task.priority,
    updatedAt: new Date().toISOString()
  };

  res.json(tasks[taskIndex]);
});

// DELETE /api/tasks/:id - Delete task
app.delete('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
