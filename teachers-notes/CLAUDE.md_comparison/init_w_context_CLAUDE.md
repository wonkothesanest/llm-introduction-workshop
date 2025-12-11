# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Solar System Troubleshooting Task Manager - A full-stack TypeScript application for helping homeowners diagnose solar power system issues through step-by-step troubleshooting tasks.

## Development Commands

### Running the Application
```bash
npm run dev              # Run both frontend and backend concurrently
npm run dev:client       # Frontend only (Vite dev server on port 5173)
npm run dev:server       # Backend only (Express server on port 3001 with hot reload)
```

### Building and Testing
```bash
npm run build           # TypeScript compilation + Vite production build
npm run preview         # Preview production build locally
npm test               # Run tests with Vitest
npm test:ui            # Run tests with Vitest UI
npm run lint           # ESLint on src/ and server/ directories
```

## Architecture

### Client-Server Communication
- **Frontend**: React app (Vite dev server on port 5173)
- **Backend**: Express REST API (port 3001)
- **Proxy**: Vite automatically proxies `/api/*` requests to backend (configured in `vite.config.ts:8-12`)
- **Data Storage**: In-memory array on backend (no database)

### Data Flow Pattern
The application follows a **fetch-after-mutate** pattern:
1. User action triggers API call via `taskService`
2. Backend updates in-memory data
3. Frontend immediately refetches all tasks to stay in sync
4. No optimistic updates - UI always reflects server state

Example: Status update flow (`src/components/TaskList.tsx:32-40`)
```
User changes dropdown → handleStatusChange() →
taskService.updateTask() → Backend PUT /api/tasks/:id →
loadTasks() refetches → UI re-renders
```

### State Management
- **No global state**: Uses React `useState` hooks in components
- **Parent-child communication**: Props drilling from `TaskList` (parent) to `TaskItem` and `CreateTaskForm` (children)
- **Single source of truth**: `TaskList` component owns all task state
- **Reactive filtering**: `useEffect` watches `statusFilter` and refetches when changed

### Service Layer
All HTTP communication is abstracted in `src/services/taskService.ts`. This service provides:
- `getAllTasks(statusFilter?)` - GET with optional query param
- `getTaskById(id)` - GET by ID
- `createTask(input)` - POST
- `updateTask(id, update)` - PUT with partial updates
- `deleteTask(id)` - DELETE

Always use the service layer rather than calling `fetch()` directly from components.

### Type System
Shared TypeScript types (`src/types/Task.ts`) are imported by both frontend and backend:
- `Task` - Full task object with id, timestamps
- `TaskStatus` - Union type: 'todo' | 'in-progress' | 'done'
- `CreateTaskInput` - For POST requests (no id/timestamps)
- `UpdateTaskInput` - For PUT requests (all fields optional)

## Key Implementation Details

### Backend Auto-increment IDs
The server uses a simple counter (`server/index.ts:47`):
```typescript
let nextId = 5;  // Starts at 5 (4 sample tasks exist)
```
New tasks get `String(nextId++)` as their ID.

### Partial Updates with Nullish Coalescing
Backend PUT handler (`server/index.ts:104-110`) uses `??` operator to merge updates:
```typescript
tasks[taskIndex] = {
  ...task,
  title: update.title ?? task.title,
  description: update.description ?? task.description,
  status: update.status ?? task.status,
  updatedAt: new Date().toISOString()
};
```
This allows updating just the status without sending title/description.

### Component Callbacks Pattern
Child components receive callback functions to notify parent of changes:
- `CreateTaskForm` receives `onTaskCreated` callback
- `TaskItem` receives `onStatusChange` and `onDelete` callbacks
- All callbacks trigger `loadTasks()` to refetch data

## File References Format

When referencing code locations, use the pattern `file_path:line_number` for easy navigation.
Example: The task status update handler is in `src/components/TaskList.tsx:32`
