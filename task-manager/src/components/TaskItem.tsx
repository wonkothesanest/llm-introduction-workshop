import type { Task, TaskStatus } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const statusOptions: TaskStatus[] = ['todo', 'in-progress', 'done'];

  const getStatusLabel = (status: TaskStatus): string => {
    const labels: Record<TaskStatus, string> = {
      'todo': 'To Do',
      'in-progress': 'In Progress',
      'done': 'Done'
    };
    return labels[status];
  };

  return (
    <div className={`task-item status-${task.status}`}>
      <div className="task-content">
        <div className="task-header">
          <h3>{task.title}</h3>
        </div>
        {task.description && <p>{task.description}</p>}
        <div className="task-meta">
          <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="task-actions">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
          className="status-select"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {getStatusLabel(status)}
            </option>
          ))}
        </select>
        <button
          onClick={() => onDelete(task.id)}
          className="delete-btn"
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
