# Exercise 2: Feature Development with Claude

**Duration:** ~20 minutes
**Goal:** Add a priority system to tasks using Claude Code while following existing patterns

## Learning Objectives

By the end of this exercise, you'll understand:
- How to lead feature design while using Claude for implementation
- Finding and following existing code patterns
- Iterative development with Claude
- Proper validation and testing of AI-generated code

## Scenario

Your product team wants to add task priorities to help users organize their work better. Each task should have a priority level (Low, Medium, High), and users should be able to filter tasks by priority.

**Important:** YOU will design the approach, Claude will help with implementation.

## Prerequisites

Make sure you've completed Exercise 1 and have a CLAUDE.md file in place.

```bash
# Verify you have CLAUDE.md
ls CLAUDE.md

# Start Claude Code
claude
```

## Part 1: Plan the Feature (5 minutes)

### Step 1: Design the Approach YOURSELF

**Before asking Claude to write code**, figure out what needs to change:

1. **Data Model:**
   - What type should priority be?
   - What values should it allow?
   - Should it have a default?

2. **Backend Changes:**
   - Update the Task interface
   - Modify the API to handle priority
   - Add filtering capability

3. **Frontend Changes:**
   - Update components to display priority
   - Add priority selector when creating tasks
   - Add priority filter controls

### Step 2: Find Existing Patterns

**Explore the codebase to find patterns to follow:**

Ask Claude:
```
Show me how status filtering is currently implemented, including:
1. How it's defined in the types
2. How the backend handles filtering
3. How the frontend UI implements the filter dropdown
4. How the filter state is managed
```

**Why?** Priority filtering should follow the same pattern as status filtering.

Take notes on:
- Where type definitions live
- How query parameters are handled
- What the UI pattern looks like

## Part 2: Implement Priority Type (5 minutes)

### Step 3: Update Type Definitions

**Prompt 1: Add Priority Type**
```
I need to add a priority field to tasks. Looking at how TaskStatus is implemented:
1. Add a new Priority type that can be 'low', 'medium', or 'high'
2. Add priority field to the Task interface with default value 'medium'
3. Update CreateTaskInput to optionally accept priority
4. Update UpdateTaskInput to optionally update priority

Follow the same pattern as TaskStatus. Show me the changes to src/types/Task.ts
```

**Verification Steps:**
1. Review the generated code
2. Confirm it follows the existing pattern
3. Check that types are properly exported

**Apply the changes:**
- Let Claude update the file, OR
- Copy the changes manually if you prefer

### Step 4: Update Backend API

**Prompt 2: Backend Changes**
```
Update the server to handle priority:
1. Add priority to the sample tasks in server/index.ts
2. Add priority filtering to the GET /api/tasks endpoint (follow the status filter pattern)
3. Include priority when creating/updating tasks

Ensure the filter query parameter works like: ?priority=high
```

**Verification:**
1. Read through the changes
2. Check that it follows the existing status filter pattern
3. Look for edge cases (what if priority is invalid?)

**Test it:**
```bash
# In a separate terminal
curl http://localhost:3001/api/tasks?priority=high
```

Should return filtered results (or empty array if no high-priority tasks exist yet).

## Part 3: Update Frontend (8 minutes)

### Step 5: Update Task Creation

**Prompt 3: Add Priority to Create Form**
```
Update CreateTaskForm component to include priority selection:
1. Add a priority dropdown (Low, Medium, High)
2. Default to 'medium'
3. Include priority when creating task
4. Follow the same styling pattern as existing form elements

Reference: Look at how the status dropdown is styled in TaskItem.tsx
```

**Verification:**
1. Check that the component still compiles
2. Verify the styling matches existing patterns
3. Test creating a task with different priorities

### Step 6: Display Priority in Task Items

**Prompt 4: Show Priority in Tasks**
```
Update TaskItem component to display the task's priority:
1. Add a priority badge/label next to the task title
2. Use different colors for each priority level (high=red, medium=orange, low=green)
3. Make it visually distinct but not overwhelming

Follow the existing styling patterns in App.css
```

**Verification:**
1. Does it look good with the existing UI?
2. Are colors accessible?
3. Is the priority clearly visible?

### Step 7: Add Priority Filtering

**Prompt 5: Implement Priority Filter**
```
Add priority filtering to TaskList component:
1. Add a priority filter dropdown next to the status filter
2. Allow filtering by priority with an "All Priorities" option
3. Update the API call to include priority filter
4. Follow the exact pattern used for status filtering

Match the styling and layout of the existing status filter.
```

**Verification:**
1. Can you filter by priority?
2. Can you filter by both status AND priority?
3. Does "All Priorities" show all tasks?

## Part 4: Test and Refine (2 minutes)

### Step 8: Manual Testing

Test these scenarios:
1. ✅ Create a task with high priority
2. ✅ Create a task with default (medium) priority
3. ✅ Filter to show only high priority tasks
4. ✅ Filter by both status=todo AND priority=high
5. ✅ Change a task's priority (bonus if you added this!)

### Step 9: Ask for Code Review

**Prompt 6: Self-Review**
```
Review the changes we made for the priority feature:
1. Are there any edge cases we didn't handle?
2. Did we follow the existing code patterns consistently?
3. Are there any potential bugs or improvements?
4. Should we add any validation?
```

**Take action on feedback:**
- Fix any issues Claude identifies
- Add any missing validation
- Improve code quality if needed

## Checkpoint Questions

Before moving to Exercise 3:

1. **Did you lead the design or did Claude?**
   - You should have planned the approach first
   - Claude should have followed your patterns

2. **How well did Claude follow existing patterns?**
   - Did it match the status filter implementation?
   - Were there any deviations you had to fix?

3. **What would you do differently?**
   - Better initial planning?
   - More specific prompts?
   - Different testing strategy?

## Key Takeaways

✅ **You design, Claude implements:** Plan the approach before writing code
✅ **Follow existing patterns:** Consistency matters more than cleverness
✅ **Verify at each step:** Don't wait until the end to test
✅ **Iterate and refine:** First implementation is rarely perfect

## Common Pitfalls

❌ **Letting Claude design:** You should decide the approach, not AI
❌ **Skipping pattern analysis:** Understanding existing code before adding new code
❌ **Not testing incrementally:** Test after each change, not at the end
❌ **Accepting the first solution:** Refine and improve based on testing

## Bonus Challenges (Optional)

If you finish early:

1. **Add priority editing:** Allow changing priority in TaskItem (add a dropdown)
2. **Visual improvements:** Add icons for priority levels
3. **Sorting:** Sort tasks by priority within each status
4. **Validation:** Prevent invalid priority values

## Next Steps

Your feature is complete! Now let's improve code quality in Exercise 3.

**Commit your work:**
```bash
git add .
git commit -m "feat: Add priority system to tasks"
```

**Move to Exercise 3:**
```bash
# Open exercises/EXERCISE-3.md
```

---

**Having trouble?** See `TROUBLESHOOTING.md` or ask your facilitator.

## Reference: Expected File Changes

You should have modified:
- `src/types/Task.ts` - Added Priority type
- `server/index.ts` - Added priority handling
- `src/services/taskService.ts` - Updated type signatures
- `src/components/CreateTaskForm.tsx` - Added priority selector
- `src/components/TaskItem.tsx` - Display priority
- `src/components/TaskList.tsx` - Added priority filter
- `src/App.css` - Priority styling
