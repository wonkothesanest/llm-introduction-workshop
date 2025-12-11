import { useState } from 'react';
import { taskService } from '../services/taskService';
import type { Priority } from '../types/Task';

interface CreateTaskFormProps {
  onTaskCreated: () => void;
}

export function CreateTaskForm({ onTaskCreated }: CreateTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Step title is required');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      await taskService.createTask({ title, description, priority });
      setTitle('');
      setDescription('');
      setPriority('medium');
      onTaskCreated();
    } catch (err) {
      setError('Failed to create troubleshooting step');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="create-task-form" onSubmit={handleSubmit}>
      <h2>Add Custom Troubleshooting Step</h2>
      {error && <div className="error">{error}</div>}
      <div className="form-group">
        <input
          type="text"
          placeholder="Step title (e.g., 'Reset inverter')"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Detailed instructions for homeowner"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isSubmitting}
          rows={3}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          disabled={isSubmitting}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding Step...' : 'Add Troubleshooting Step'}
      </button>
    </form>
  );
}
