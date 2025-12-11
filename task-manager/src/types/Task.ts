export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface CreateTaskInput {
  title: string;
  description: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: TaskStatus;
}

// Solar troubleshooting task categories
export type TaskCategory =
  | 'system-check'
  | 'inverter'
  | 'connectivity'
  | 'electrical'
  | 'monitoring'
  | 'physical-inspection';
