import { describe, it, expect, vi, beforeEach } from 'vitest';
import { taskService } from './taskService';
import type { Task } from '../types/Task';

// Mock the global fetch
global.fetch = vi.fn();

describe('taskService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAllTasks', () => {
    it('fetches all tasks without filters', async () => {
      const mockTasks: Task[] = [
        {
          id: '1',
          title: 'Test Task',
          description: 'Test Description',
          status: 'todo',
          priority: 'medium',
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      ];

      (fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      const result = await taskService.getAllTasks();

      expect(fetch).toHaveBeenCalledWith('/api/tasks');
      expect(result).toEqual(mockTasks);
    });

    it('fetches tasks with status filter', async () => {
      const mockTasks: Task[] = [];

      (fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      await taskService.getAllTasks('done');

      expect(fetch).toHaveBeenCalledWith('/api/tasks?status=done');
    });

    it('fetches tasks with priority filter', async () => {
      const mockTasks: Task[] = [];

      (fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      await taskService.getAllTasks(undefined, 'high');

      expect(fetch).toHaveBeenCalledWith('/api/tasks?priority=high');
    });

    it('fetches tasks with both filters', async () => {
      const mockTasks: Task[] = [];

      (fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      await taskService.getAllTasks('todo', 'high');

      expect(fetch).toHaveBeenCalledWith('/api/tasks?status=todo&priority=high');
    });

    it('throws error when fetch fails', async () => {
      (fetch as any).mockResolvedValueOnce({
        ok: false
      });

      await expect(taskService.getAllTasks()).rejects.toThrow('Failed to fetch tasks');
    });
  });

  describe('createTask', () => {
    it('creates a task successfully', async () => {
      const newTask = {
        title: 'New Task',
        description: 'New Description',
        priority: 'high' as const
      };

      const mockResponse: Task = {
        id: '2',
        ...newTask,
        status: 'todo',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z'
      };

      (fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      const result = await taskService.createTask(newTask);

      expect(fetch).toHaveBeenCalledWith('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });
      expect(result).toEqual(mockResponse);
    });

    it('throws error when creation fails', async () => {
      (fetch as any).mockResolvedValueOnce({
        ok: false
      });

      await expect(taskService.createTask({ title: 'Test', description: '' })).rejects.toThrow(
        'Failed to create task'
      );
    });
  });

  describe('updateTask', () => {
    it('updates a task successfully', async () => {
      const update = { status: 'done' as const };
      const mockResponse: Task = {
        id: '1',
        title: 'Test Task',
        description: 'Test Description',
        status: 'done',
        priority: 'medium',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-02T00:00:00.000Z'
      };

      (fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      const result = await taskService.updateTask('1', update);

      expect(fetch).toHaveBeenCalledWith('/api/tasks/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(update)
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('deleteTask', () => {
    it('deletes a task successfully', async () => {
      (fetch as any).mockResolvedValueOnce({
        ok: true
      });

      await taskService.deleteTask('1');

      expect(fetch).toHaveBeenCalledWith('/api/tasks/1', {
        method: 'DELETE'
      });
    });

    it('throws error when deletion fails', async () => {
      (fetch as any).mockResolvedValueOnce({
        ok: false
      });

      await expect(taskService.deleteTask('1')).rejects.toThrow('Failed to delete task');
    });
  });
});
