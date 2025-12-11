# CLAUDE.md - Solar System Troubleshooting Workshop

## Project Overview

This is a **Solar System Troubleshooting Task Manager** application built for the Omnidian AI Workshop. It provides a web-based interface for homeowners to follow systematic troubleshooting steps when their solar panel system experiences issues. The application allows users to track their progress through troubleshooting procedures, mark steps as complete, and add custom troubleshooting steps.

### Purpose
- Guide homeowners through solar system diagnostic procedures
- Track completion status of troubleshooting steps
- Provide a structured approach to identifying solar system issues
- Allow customization with additional troubleshooting steps

## Architecture

### High-Level Architecture
This is a **full-stack TypeScript application** with a clear separation between client and server:

```
┌─────────────────┐         ┌──────────────────┐
│  React Frontend │ <──────>│  Express Backend │
│   (Port 5173)   │   HTTP  │   (Port 3001)    │
└─────────────────┘  /api/* └──────────────────┘
```

### Key Patterns

1. **Service Layer Pattern**: API calls are abstracted into a `taskService` module (`src/services/taskService.ts`)
2. **Component Composition**: React components are split by responsibility (List, Item, Form)
3. **RESTful API**: Standard REST endpoints for CRUD operations
4. **In-Memory Storage**: Server uses in-memory array for data (resets on restart)
5. **Vite Proxy**: Development proxy routes `/api/*` requests from port 5173 to 3001
6. **Type-Safe**: Shared TypeScript types between client and server

### Data Flow
1. User interacts with React components
2. Component calls `taskService` methods
3. Service makes HTTP requests to Express server
4. Server processes request and updates in-memory data
5. Server returns JSON response
6. Component updates UI with new data

## Technology Stack

### Frontend
- **React** ^18.2.0 - UI library
- **TypeScript** ^5.3.3 - Type-safe JavaScript
- **Vite** ^5.0.8 - Build tool and dev server
- **CSS** - Vanilla CSS (no framework)

### Backend
- **Express** ^4.18.2 - Web server framework
- **CORS** ^2.8.5 - Cross-origin resource sharing
- **tsx** ^4.7.0 - TypeScript execution for Node.js

### Development Tools
- **Vitest** ^1.0.4 - Testing framework
- **ESLint** ^8.55.0 - Code linting
- **TypeScript ESLint** ^6.14.0 - TypeScript-specific linting
- **Concurrently** ^8.2.2 - Run multiple commands in parallel

### TypeScript Configuration
- **Target**: ES2020
- **Module**: ESNext with bundler resolution
- **JSX**: react-jsx
- **Strict Mode**: Enabled
- Unused locals/parameters checking enabled
- ES module interop enabled

## Directory Structure

```
omnidian-ai-workshop/
├── server/                    # Backend Express server
│   └── index.ts              # Main server file with REST API endpoints
├── src/                      # Frontend React application
│   ├── components/           # React components
│   │   ├── CreateTaskForm.tsx   # Form for adding new troubleshooting steps
│   │   ├── TaskItem.tsx         # Individual task display and actions
│   │   └── TaskList.tsx         # Main container, fetches and displays tasks
│   ├── services/             # API service layer
│   │   └── taskService.ts       # HTTP client for task operations
│   ├── types/                # TypeScript type definitions
│   │   └── Task.ts              # Task-related types and interfaces
│   ├── App.tsx               # Root application component
│   ├── App.css               # Application styles
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript config for Node.js tools
├── vite.config.ts            # Vite build configuration
└── .gitignore               # Git ignore patterns
```

## Key Files and Responsibilities

### Backend (`server/`)

#### `server/index.ts` (130 lines)
**Primary responsibilities:**
- Express server setup with CORS and JSON middleware
- In-memory task storage with sample solar troubleshooting data
- REST API endpoint implementations:
  - `GET /api/tasks` - Retrieve all tasks (optional status filter)
  - `GET /api/tasks/:id` - Retrieve single task by ID
  - `POST /api/tasks` - Create new task (validates title)
  - `PUT /api/tasks/:id` - Update task (partial updates supported)
  - `DELETE /api/tasks/:id` - Delete task
- Sample data includes 4 pre-populated solar troubleshooting tasks
- Server runs on port 3001

**Key patterns:**
- Request validation (title required, 400 status)
- Error responses (404 for not found, 400 for validation)
- ISO datetime strings for timestamps
- Incremental ID generation

### Frontend (`src/`)

#### `src/types/Task.ts` (31 lines)
**Type definitions:**
- `Task` - Main task interface (id, title, description, status, timestamps)
- `TaskStatus` - Union type: 'todo' | 'in-progress' | 'done'
- `CreateTaskInput` - DTO for task creation
- `UpdateTaskInput` - Partial update DTO
- `TaskCategory` - Solar-specific categories (currently unused)

#### `src/services/taskService.ts` (62 lines)
**API service layer:**
- Wraps all HTTP calls to backend
- Methods: `getAllTasks`, `getTaskById`, `createTask`, `updateTask`, `deleteTask`
- Uses Fetch API with proper headers
- Error handling with descriptive messages
- Status filter support for GET requests

#### `src/components/TaskList.tsx` (102 lines)
**Main container component:**
- State management for tasks, loading, error, and status filter
- Fetches tasks on mount and filter changes
- Handles task status updates and deletion
- Renders header, filter dropdown, create form, and task list
- Implements loading and error states
- Displays "no tasks" message when empty

#### `src/components/TaskItem.tsx` (53 lines)
**Individual task display:**
- Displays task title, description, and creation date
- Status dropdown for changing task state
- Delete button with trash icon
- CSS classes based on status for visual distinction
- Accessibility: aria-label on delete button

#### `src/components/CreateTaskForm.tsx` (65 lines)
**Task creation form:**
- Controlled form inputs for title and description
- Client-side validation (title required)
- Submission handling with loading state
- Error display
- Form reset after successful creation
- Callback to parent to refresh task list

#### `src/App.tsx` (13 lines)
**Root component:**
- Simple wrapper that renders TaskList
- Applies `.app` container styling

#### `src/main.tsx` (11 lines)
**React entry point:**
- Creates React root
- Renders App in StrictMode
- Imports global styles

### Configuration Files

#### `vite.config.ts`
- React plugin configuration
- Dev server on port 5173
- Proxy configuration: `/api` → `http://localhost:3001`

#### `tsconfig.json`
- Strict TypeScript configuration
- ES2020 target with DOM libraries
- Bundler module resolution
- No unused variables allowed
- Includes both `src` and `server` directories

#### `package.json`
- Project metadata
- Development scripts (dev, build, test, lint)
- ES modules enabled (`"type": "module"`)

## How to Run the Application

### Prerequisites
- Node.js (v20 recommended based on types)
- npm or compatible package manager

### Installation
```bash
npm install
```

### Development Mode
Run both client and server concurrently:
```bash
npm run dev
```

This starts:
- Frontend dev server: http://localhost:5173
- Backend API server: http://localhost:3001

Or run them separately:
```bash
npm run dev:client  # Frontend only (port 5173)
npm run dev:server  # Backend only (port 3001)
```

### Production Build
```bash
npm run build      # Compile TypeScript and build frontend
npm run preview    # Preview production build
```

### Testing
```bash
npm test           # Run tests in watch mode
npm run test:ui    # Run tests with Vitest UI
```

### Linting
```bash
npm run lint       # Check code quality
```

## Testing the Application

### Manual Testing Workflow
1. Start the dev server: `npm run dev`
2. Navigate to http://localhost:5173
3. Verify 4 default troubleshooting tasks are displayed
4. Test status filtering (All, To Do, In Progress, Completed)
5. Change a task status using the dropdown
6. Delete a task using the trash icon
7. Create a new custom troubleshooting step
8. Verify the new task appears in the list

### API Testing
Test endpoints directly:
```bash
# Get all tasks
curl http://localhost:3001/api/tasks

# Get tasks by status
curl http://localhost:3001/api/tasks?status=todo

# Get single task
curl http://localhost:3001/api/tasks/1

# Create task
curl -X POST http://localhost:3001/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test step","description":"Test description"}'

# Update task
curl -X PUT http://localhost:3001/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"done"}'

# Delete task
curl -X DELETE http://localhost:3001/api/tasks/1
```

## Coding Conventions

### TypeScript
- **Strict mode enabled** - No implicit any, strict null checks
- **Explicit types** for function parameters and returns
- **Interfaces** for object shapes (Task, CreateTaskInput, etc.)
- **Type guards** where needed (e.g., `typeof status === 'string'`)
- **No unused variables** - Enforced by compiler

### React Patterns
- **Functional components** - No class components
- **Hooks** - useState, useEffect for state and side effects
- **Props interfaces** - Typed component props (e.g., TaskItemProps)
- **Async/await** - For all asynchronous operations
- **Error boundaries** - Try/catch in async handlers
- **Controlled components** - Form inputs controlled by React state
- **Callback props** - For child-to-parent communication (onTaskCreated, onStatusChange, onDelete)

### Naming Conventions
- **Components** - PascalCase (TaskList, TaskItem)
- **Functions/Variables** - camelCase (loadTasks, statusFilter)
- **Types/Interfaces** - PascalCase (Task, TaskStatus)
- **Constants** - UPPER_SNAKE_CASE or camelCase (API_BASE, nextId)
- **CSS classes** - kebab-case (task-list-container, status-select)
- **Files** - PascalCase for components, camelCase for utilities

### Code Organization
- **One component per file** - Component name matches filename
- **Co-located types** - Props interfaces defined near components
- **Service layer** - API calls isolated from components
- **Shared types** - Imported from shared `types/` directory
- **CSS modules** - Currently using plain CSS, scoped by component class names

### API Conventions
- **RESTful design** - Standard HTTP methods (GET, POST, PUT, DELETE)
- **JSON payloads** - All request/response bodies use JSON
- **Status codes** - 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 404 (Not Found)
- **Error responses** - JSON with `error` field
- **Route prefixes** - All API routes under `/api`
- **ID in URL** - Resource IDs in path parameters (`/api/tasks/:id`)

### Error Handling
- **Try/catch** blocks around async operations
- **User-friendly messages** - Display clear error messages in UI
- **Console logging** - Log errors for debugging (console.error)
- **Error state** - Component state for displaying errors
- **Validation** - Server-side validation with appropriate status codes

### State Management
- **Local component state** - useState for component-specific state
- **Prop drilling** - Callbacks passed down for state updates
- **No global state** - Currently no Redux/Context (not needed for this size)
- **Optimistic updates** - Reload data after mutations

### Styling
- **Vanilla CSS** - No CSS-in-JS or preprocessors
- **Class-based** - Classes for styling, not inline styles
- **Status classes** - Dynamic classes based on state (status-done, status-in-progress)
- **Responsive layout** - Flexbox for layout
- **Color scheme** - Orange (#f39c12) primary, green (#27ae60) success
- **Accessibility** - Focus states, aria-labels where needed

## Development Notes

### Current Limitations
- **In-memory storage** - Data is lost on server restart
- **No persistence** - No database integration
- **No authentication** - Public access to all tasks
- **No real-time updates** - Manual refresh required
- **Task categories** - Defined in types but not implemented in UI

### Potential Enhancements
- Add database persistence (PostgreSQL, MongoDB)
- Implement task categories/tags
- Add search and advanced filtering
- Add task priorities or due dates
- Implement user authentication
- Add real-time updates (WebSockets)
- Add task history/audit log
- Export troubleshooting reports
- Add file attachments (photos of system)
- Mobile-responsive improvements

### Workshop Context
This application serves as a teaching tool for the Omnidian AI Workshop, demonstrating:
- Full-stack TypeScript development
- React component patterns
- REST API design
- Type-safe client-server communication
- Modern build tooling (Vite)
- Development workflow best practices

## Git Workflow

- **Main branch**: `main`
- **Current branch**: `dusty-ex-1`
- Use conventional commits for clear history
- .gitignore excludes: node_modules, dist, .env files, IDE configs, .claude/

## Additional Resources

### File Locations
- Main server entry: `server/index.ts:127` (server startup)
- Task type definitions: `src/types/Task.ts:1-31`
- API service: `src/services/taskService.ts:1-62`
- Main UI container: `src/components/TaskList.tsx:1-102`

### Common Tasks
- Add new API endpoint: Edit `server/index.ts`
- Add new task field: Update `src/types/Task.ts` and relevant components
- Modify styling: Edit `src/App.css` or `src/index.css`
- Change port numbers: Update `vite.config.ts` and `server/index.ts`

---

Last updated: 2025-12-11
Project version: 1.0.0
