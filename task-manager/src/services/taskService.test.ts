import { describe, it, expect, beforeEach, vi } from 'vitest';
import { taskService } from './taskService';
import type { Task, CreateTaskInput, UpdateTaskInput } from '../types/Task';

// Mock the global fetch function
global.fetch = vi.fn();

describe('taskService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAllTasks', () => {
    it('should fetch all tasks successfully', async () => {
      const mockTasks: Task[] = [
        {
          id: '1',
          title: 'Check main solar breaker',
          description: 'Verify the breaker is in the ON position',
          status: 'todo',
          priority: 'high',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z'
        }
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      const result = await taskService.getAllTasks();

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks');
      expect(result).toEqual(mockTasks);
    });

    it('should filter tasks by status', async () => {
      const mockTasks: Task[] = [];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      await taskService.getAllTasks('done');

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks?status=done');
    });

    it('should filter tasks by priority', async () => {
      const mockTasks: Task[] = [];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      await taskService.getAllTasks(undefined, 'high');

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks?priority=high');
    });

    it('should filter tasks by both status and priority', async () => {
      const mockTasks: Task[] = [];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTasks
      });

      await taskService.getAllTasks('todo', 'high');

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks?status=todo&priority=high');
    });

    it('should throw error when fetch fails', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500
      });

      await expect(taskService.getAllTasks()).rejects.toThrow('Failed to fetch tasks');
    });
  });

  describe('getTaskById', () => {
    it('should fetch a single task successfully', async () => {
      const mockTask: Task = {
        id: '1',
        title: 'Check inverter display',
        description: 'Verify the inverter shows green lights',
        status: 'in-progress',
        priority: 'high',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTask
      });

      const result = await taskService.getTaskById('1');

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks/1');
      expect(result).toEqual(mockTask);
    });

    it('should throw error when task not found', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404
      });

      await expect(taskService.getTaskById('999')).rejects.toThrow('Failed to fetch task');
    });
  });

  describe('createTask', () => {
    it('should create a task successfully', async () => {
      const input: CreateTaskInput = {
        title: 'New troubleshooting step',
        description: 'Test the monitoring connection',
        priority: 'medium'
      };

      const mockCreatedTask: Task = {
        id: '2',
        ...input,
        status: 'todo',
        priority: 'medium',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCreatedTask
      });

      const result = await taskService.createTask(input);

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      });
      expect(result).toEqual(mockCreatedTask);
    });

    it('should handle creation errors', async () => {
      const input: CreateTaskInput = {
        title: '',
        description: 'Invalid task',
        priority: 'low'
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 400
      });

      await expect(taskService.createTask(input)).rejects.toThrow('Failed to create task');
    });
  });

  describe('updateTask', () => {
    it('should update a task successfully', async () => {
      const update: UpdateTaskInput = {
        status: 'done',
        priority: 'low'
      };

      const mockUpdatedTask: Task = {
        id: '1',
        title: 'Check breaker',
        description: 'Verify breaker is on',
        status: 'done',
        priority: 'low',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T01:00:00Z'
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockUpdatedTask
      });

      const result = await taskService.updateTask('1', update);

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(update)
      });
      expect(result).toEqual(mockUpdatedTask);
    });

    it('should handle update errors', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404
      });

      await expect(taskService.updateTask('999', { status: 'done' })).rejects.toThrow('Failed to update task');
    });
  });

  describe('deleteTask', () => {
    it('should delete a task successfully', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true
      });

      await taskService.deleteTask('1');

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks/1', {
        method: 'DELETE'
      });
    });

    it('should handle deletion errors', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404
      });

      await expect(taskService.deleteTask('999')).rejects.toThrow('Failed to delete task');
    });
  });
});
