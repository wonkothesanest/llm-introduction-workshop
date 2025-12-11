export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  createdAt: string;
  updatedAt: string;
}

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export type Priority = 'low' | 'medium' | 'high';

export interface CreateTaskInput {
  title: string;
  description: string;
  priority?: Priority;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: Priority;
}

// Solar troubleshooting task categories
export type TaskCategory =
  | 'system-check'
  | 'inverter'
  | 'connectivity'
  | 'electrical'
  | 'monitoring'
  | 'physical-inspection';
