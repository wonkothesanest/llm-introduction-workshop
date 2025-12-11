# Solar System Troubleshooting Portal - Project Context

## Project Overview

The Solar System Troubleshooting Portal is a full-stack web application that guides Omnidian homeowners through systematic troubleshooting steps when their solar system is underperforming or experiencing issues.

**Purpose:** Educational workshop application for learning Claude Code, using realistic Omnidian use cases

**Business Context:** When homeowners report issues with their solar systems, customer support can guide them through these standardized troubleshooting steps before dispatching a technician. This reduces unnecessary truck rolls and helps identify the root cause faster.

## Architecture

**Frontend:** React 18 with TypeScript
- Component-based architecture
- Direct API calls via fetch (no state management library)
- Local state management with React hooks
- Optimized for homeowner experience (clear instructions, simple UI)

**Backend:** Express.js REST API
- In-memory data storage (in production, would integrate with Omnidian's asset management system)
- RESTful endpoint design
- CORS enabled for local development

**Development Stack:**
- Build tool: Vite
- Type checking: TypeScript
- Package manager: npm
- CSS: Vanilla CSS (simple, accessible styling)

## Technology Stack

**Core Dependencies:**
- react: ^18.2.0
- react-dom: ^18.2.0
- express: ^4.18.2
- cors: ^2.8.5

**Development Dependencies:**
- typescript: ^5.3.3
- vite: ^5.0.8
- @vitejs/plugin-react: ^4.2.1
- tsx: ^4.7.0 (for running TypeScript on server)
- vitest: ^1.0.4 (testing framework - not yet configured with tests)

## Directory Structure

```
task-manager/
├── src/                           # React frontend
│   ├── components/                # React components
│   │   ├── TaskList.tsx          # Main troubleshooting steps container
│   │   ├── TaskItem.tsx          # Individual troubleshooting step display
│   │   └── CreateTaskForm.tsx    # Custom step creation for support
│   ├── services/                 # API client
│   │   └── taskService.ts        # Fetch wrapper for API calls
│   ├── types/                    # TypeScript definitions
│   │   └── Task.ts               # Task type definitions + solar categories
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # React entry point
│   └── *.css                     # Styling
├── server/                       # Express backend
│   └── index.ts                  # API server with troubleshooting logic
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Files and Responsibilities

### Type Definitions (`src/types/Task.ts`)
- `Task` interface: Troubleshooting step data model
- `TaskStatus` type: Union type for step states (todo, in-progress, done)
- `CreateTaskInput`: Data required to create a custom step
- `UpdateTaskInput`: Partial update data
- `TaskCategory`: Solar-specific categories for organizing steps

**Solar-specific categories:**
- `system-check`: Overall system health verification
- `inverter`: Inverter-specific troubleshooting
- `connectivity`: Internet/monitoring connectivity issues
- `electrical`: Breaker, wiring, grid connection
- `monitoring`: Portal access, data reporting
- `physical-inspection`: Visual inspection of equipment

### Backend API (`server/index.ts`)

**Endpoints:**
- `GET /api/tasks` - List all troubleshooting steps, optional ?status filter
- `GET /api/tasks/:id` - Get single step details
- `POST /api/tasks` - Create new custom troubleshooting step
- `PUT /api/tasks/:id` - Update step (mark complete, add notes)
- `DELETE /api/tasks/:id` - Remove step

**Sample Troubleshooting Steps:**
1. Check main solar breaker (electrical)
2. Verify inverter display is on (inverter)
3. Confirm internet connectivity (connectivity)
4. Check for physical damage or debris (physical-inspection)

**Data Storage:** In-memory array (resets on server restart)
*Production note: Would integrate with Omnidian's ticketing and asset management systems*

### Frontend Service (`src/services/taskService.ts`)
- Abstracts fetch API calls
- Handles request/response formatting
- Throws errors for failed requests
- Used by all components for API communication

### React Components

**TaskList** (`src/components/TaskList.tsx`)
- Main container for troubleshooting workflow
- Manages step list state and filtering
- Handles status filtering (show only incomplete steps)
- Coordinates child components
- User-friendly error messages for homeowners

**TaskItem** (`src/components/TaskItem.tsx`)
- Displays individual troubleshooting step
- Clear, homeowner-friendly instructions
- Status dropdown for marking progress
- Delete button (for support agents only)
- Shows step metadata (when created)

**CreateTaskForm** (`src/components/CreateTaskForm.tsx`)
- Allows support agents to add custom steps
- Controlled form inputs with validation
- Validates step title is not empty
- Placeholder guidance for homeowner-friendly language
- Calls API to create step, notifies parent on success

## Data Flow

1. **Loading Troubleshooting Steps:**
   - TaskList → taskService.getAllTasks() → Backend API → Returns Task[]
   - State updated, components re-render with current steps

2. **Homeowner Marks Step Complete:**
   - User changes status in TaskItem → Callback to TaskList
   - TaskList → taskService.updateTask() → Backend updates status
   - TaskList reloads all steps to show updated progress

3. **Support Agent Creates Custom Step:**
   - Agent fills CreateTaskForm → Submit → taskService.createTask()
   - Backend creates step with "todo" status → Returns new Task
   - TaskList reloads, new step appears for homeowner

4. **Filtering by Status:**
   - User selects filter in TaskList → State updated
   - useEffect triggers → Calls API with ?status parameter
   - Display updates showing only matching steps

## Omnidian Business Rules

### Troubleshooting Step Guidelines
- **Language:** Use simple, non-technical language homeowners understand
- **Safety first:** Always remind homeowners to stay safe (no roof access, don't open electrical panels)
- **Visual cues:** Mention what they should look for (lights, displays, labels)
- **Next steps:** Each step should have clear success/failure criteria

### Common Troubleshooting Patterns

**No Production Data:**
1. Check breakers (most common issue)
2. Verify inverter is on and displaying properly
3. Confirm internet connectivity for monitoring
4. Check for error codes on inverter display

**Low Production:**
1. Check for physical obstructions (snow, debris, shading)
2. Verify all panels are clean
3. Check for error indicators
4. Compare to expected production (seasonal adjustments)

**Monitoring Offline:**
1. Verify home internet is working
2. Check if monitoring device has power/lights
3. Restart monitoring equipment (power cycle)
4. Verify credentials still work in portal

## Running the Application

**Development mode:**
```bash
npm install
npm run dev
```
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

**Testing:**
```bash
npm test
```
*Note: Test suite will be added in Exercise 3*

**Production build:**
```bash
npm run build
npm run preview
```

## Coding Conventions

### TypeScript
- Strict mode enabled
- Explicit types for function parameters and returns
- Interface for object shapes (Task, CreateTaskInput, etc.)
- Type aliases for unions (TaskStatus, TaskCategory)

### React
- Functional components with hooks
- Props interfaces defined inline or above component
- useState for local state
- useEffect for side effects (API calls, filtering)

### Naming Conventions
- Components: PascalCase (TaskList, TaskItem)
- Files: Same as component name (.tsx for components)
- Functions: camelCase (loadTasks, handleStatusChange)
- Types/Interfaces: PascalCase (Task, TaskStatus)

### Error Handling
- Service layer throws errors with descriptive messages
- Components catch and display user-friendly error messages
- Console.error for debugging, user-friendly UI messages
- Never expose technical errors to homeowners

### Styling
- CSS modules not used (plain CSS)
- Class names: kebab-case (.task-item, .status-done)
- Component-specific styles in App.css
- Orange/amber colors (Omnidian branding) for highlights

## Known Limitations

1. **No persistence:** Data resets on server restart (would integrate with Omnidian DB)
2. **No authentication:** Anyone can access/modify steps (would require homeowner login)
3. **No asset context:** Doesn't know which specific solar system (would integrate with asset IDs)
4. **No validation:** Minimal input validation (would validate against system capabilities)
5. **No pagination:** All steps loaded at once (fine for 5-10 steps per troubleshooting session)
6. **In-memory only:** Not suitable for production without backend integration
7. **No test coverage yet:** Tests will be added in Exercise 3

## Development Guidelines

### Adding New Troubleshooting Steps
1. Start with clear, homeowner-friendly language
2. Include specific things to check/verify
3. Mention safety considerations if relevant
4. Provide expected outcome (what should they see if it's working)
5. Consider categorizing with TaskCategory for future filtering

### Following Existing Patterns
When adding features:
- Look at how status filtering is implemented
- Match the UI patterns for dropdowns and filters
- Follow the same API parameter style (?status=done)
- Use consistent colors for visual indicators

### Error Handling Pattern
```typescript
try {
  const result = await taskService.someCall();
  // Handle success - update UI state
  setError(null);
} catch (err) {
  // User-friendly message for homeowners
  setError('Unable to load troubleshooting steps. Please refresh the page.');
  console.error(err); // Technical details for debugging
}
```

### Component Update Pattern
- Modify data via API call
- Reload all data from server (ensure consistency)
- Let React re-render with updated state
- Show loading states during API calls

## Integration Points (Production)

In a production environment, this would integrate with:
- **Asset Management System:** Know which system the homeowner owns
- **Monitoring Data:** Show real-time production data during troubleshooting
- **Ticketing System:** Create support tickets if troubleshooting doesn't resolve issue
- **Knowledge Base:** Link to detailed help articles for each step
- **Dispatch System:** Automatically schedule tech visit if needed

## Future Enhancements

Potential improvements (not currently implemented):
- **Priority levels:** Mark urgent steps (safety issues) vs. optional (optimization)
- **Step dependencies:** Some steps should only appear if previous steps complete
- **Rich media:** Include photos, videos, diagrams in instructions
- **Real-time data:** Show current inverter status, production data
- **Chat integration:** Allow homeowner to ask questions during troubleshooting
- **History tracking:** Show when homeowner last completed troubleshooting
- **Weather context:** Adjust troubleshooting based on current weather conditions

## Workshop Context

This application is designed for the Claude Code workshop to teach engineers:
- How to explore and understand an unfamiliar codebase (Exercise 1)
- How to add features following existing patterns (Exercise 2: add priority)
- How to write tests and refactor code (Exercise 3)

The solar troubleshooting context makes it relevant to Omnidian engineers' daily work and provides realistic business scenarios for learning AI-assisted development.

---

*This documentation was created in Exercise 1 to help Claude understand the codebase structure and Omnidian business context.*
