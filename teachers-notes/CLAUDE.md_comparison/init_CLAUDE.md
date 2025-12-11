# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Solar System Troubleshooting Workshop application - a full-stack task manager specifically themed around solar troubleshooting steps for homeowners. It demonstrates a React frontend with TypeScript communicating with an Express backend API.

**Domain Context**: The application manages solar troubleshooting tasks (checking breakers, verifying inverters, confirming connectivity, etc.) to help homeowners diagnose solar system issues systematically.

## Development Commands

```bash
# Start both client and server concurrently
npm run dev

# Start only the React client (Vite dev server on port 5173)
npm run dev:client

# Start only the Express server (runs on port 3001)
npm run dev:server

# Build for production
npm run build

# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Lint TypeScript files
npm run lint
```

## Architecture

### Client-Server Architecture

**Frontend (Vite + React)**:
- Runs on `localhost:5173`
- Vite proxy configured to forward `/api/*` requests to backend
- React components use `taskService` to communicate with backend
- All API calls use relative `/api` paths (proxied by Vite)

**Backend (Express)**:
- Runs on `localhost:3001`
- RESTful API with `/api/tasks` endpoints
- In-memory storage (data resets on server restart)
- CORS enabled for frontend access

### Data Flow

1. React components call `taskService` methods
2. `taskService` makes fetch requests to `/api/*` endpoints
3. Vite dev server proxies these to `http://localhost:3001/api/*`
4. Express server processes requests and responds
5. Data flows back through the proxy to React components

### Key Files

**Type Definitions** (`src/types/Task.ts`):
- `Task`: Main data model with id, title, description, status, timestamps
- `TaskStatus`: Union type for 'todo' | 'in-progress' | 'done'
- `TaskCategory`: Solar-specific categories (system-check, inverter, connectivity, etc.)
- Shared between frontend and backend (backend imports from `../src/types/Task`)

**Service Layer** (`src/services/taskService.ts`):
- Single source of API communication logic
- Methods: `getAllTasks()`, `getTaskById()`, `createTask()`, `updateTask()`, `deleteTask()`
- Uses browser `fetch` API with `/api` base path

**Server** (`server/index.ts`):
- Express server with in-memory task storage
- Pre-populated with 4 sample solar troubleshooting tasks
- RESTful endpoints following standard conventions
- Query parameter support for status filtering: `/api/tasks?status=todo`

**Components**:
- `TaskList.tsx`: Main container with state management, filtering, and data loading
- `TaskItem.tsx`: Individual task display with status dropdown and delete button
- `CreateTaskForm.tsx`: Form for adding new troubleshooting steps

## Important Implementation Details

### Shared Types Between Client/Server
The backend imports types from the frontend source directory:
```typescript
import type { Task, CreateTaskInput, UpdateTaskInput } from '../src/types/Task';
```
Changes to `Task` types affect both client and server code.

### Proxy Configuration
The Vite config (`vite.config.ts`) proxies `/api` requests to the backend. When running both servers:
- Frontend code uses `/api/tasks` paths
- Vite forwards these to `http://localhost:3001/api/tasks`
- No CORS issues because requests appear same-origin to the browser

### In-Memory Storage
Tasks are stored in a simple array in `server/index.ts`. Data persists only while the server is running. Restarting `npm run dev:server` resets to the 4 default troubleshooting tasks.

## Testing

The project uses Vitest for testing. Test files should be co-located with source files or in a `__tests__` directory.
