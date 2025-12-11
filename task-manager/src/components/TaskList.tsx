import { useState, useEffect } from 'react';
import type { Task, TaskStatus, Priority } from '../types/Task';
import { taskService } from '../services/taskService';
import { TaskItem } from './TaskItem';
import { CreateTaskForm } from './CreateTaskForm';

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');

  useEffect(() => {
    loadTasks();
  }, [statusFilter, priorityFilter]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const statusValue = statusFilter === 'all' ? undefined : statusFilter;
      const priorityValue = priorityFilter === 'all' ? undefined : priorityFilter;
      const data = await taskService.getAllTasks(statusValue, priorityValue);
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to load troubleshooting tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (taskId: string, newStatus: TaskStatus) => {
    try {
      await taskService.updateTask(taskId, { status: newStatus });
      await loadTasks();
    } catch (err) {
      setError('Failed to update task status');
      console.error(err);
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      await taskService.deleteTask(taskId);
      await loadTasks();
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  const handleTaskCreated = () => {
    loadTasks();
  };

  if (loading) {
    return <div className="loading">Loading troubleshooting steps...</div>;
  }

  return (
    <div className="task-list-container">
      <div className="header">
        <div>
          <h1>Solar System Troubleshooting</h1>
          <p className="subtitle">Follow these steps to diagnose your system</p>
        </div>
        <div className="filter-controls">
          <label>Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as TaskStatus | 'all')}
          >
            <option value="all">All</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <label>Priority:</label>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value as Priority | 'all')}
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {error && <div className="error">{error}</div>}

      <CreateTaskForm onTaskCreated={handleTaskCreated} />

      <div className="tasks">
        {tasks.length === 0 ? (
          <p className="no-tasks">No troubleshooting steps found. Add a custom step if needed!</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
