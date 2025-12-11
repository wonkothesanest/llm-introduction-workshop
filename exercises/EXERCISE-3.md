# Exercise 3: Refactoring and Testing with Claude

**Duration:** ~15 minutes
**Goal:** Improve code quality and add comprehensive tests with Claude's assistance

## Learning Objectives

By the end of this exercise, you'll understand:
- How to use Claude for refactoring
- Effective test generation strategies
- Validating AI-generated tests
- When to write tests manually vs. using AI

## Scenario

Your code is working, but the team wants to:
1. Add comprehensive test coverage
2. Refactor the taskService to use modern async/await error handling
3. Extract reusable utilities

Remember: **YOU decide what needs improvement, Claude helps execute.**

## Prerequisites

Make sure you've completed Exercise 2 (priority feature).

```bash
claude
```

## Part 1: Add Test Coverage (8 minutes)

### Step 1: Explore Testing Setup

First, understand what testing infrastructure exists:

**Prompt 1: Testing Setup**
```
What testing framework is configured in this project?
Show me:
1. What's in package.json for testing
2. Any existing test files
3. How to run tests
```

**Note:** The starter project has vitest configured but no tests yet.

### Step 2: Generate Service Tests

Let's start with the taskService, but YOU specify what to test:

**Prompt 2: Task Service Tests**
```
Create unit tests for src/services/taskService.ts using vitest.

Test these specific scenarios:
1. getAllTasks() - successful fetch
2. getAllTasks() - with status filter
3. getAllTasks() - with priority filter (from Exercise 2)
4. getAllTasks() - handles fetch errors
5. createTask() - successful creation
6. createTask() - handles validation errors
7. updateTask() - successful update
8. deleteTask() - successful deletion

Use vitest's mock functionality to mock fetch().
Follow this pattern for each test:
- Arrange: Set up mocks and data
- Act: Call the function
- Assert: Check the results

Create the test file at src/services/taskService.test.ts
```

**CRITICAL: Review the tests!**

Check for these common issues:
- ✅ Tests actually test behavior, not implementation
- ✅ Mocks are properly set up
- ✅ Error cases are covered
- ✅ Assertions make sense
- ❌ Tests don't use methods that don't exist
- ❌ Tests aren't just checking that mocks were called

### Step 3: Run and Validate Tests

```bash
npm test
```

**Did they pass?** If not:
- Read the error messages carefully
- Ask Claude to fix specific failures
- Verify the fixes make sense

**Do the tests actually work?**

Break a test intentionally:
```typescript
// In taskService.ts, temporarily break getAllTasks:
return []; // Always return empty array
```

Run tests again. Do they fail? If not, the tests aren't testing the right thing!

Fix it and continue.

### Step 4: Generate Component Tests

Components are trickier to test. Be specific about what to test:

**Prompt 3: Component Tests**
```
Create tests for src/components/CreateTaskForm.tsx using vitest and @testing-library/react.

Test these specific user interactions:
1. Form renders with empty inputs
2. User can type in title and description fields
3. Submit button is disabled when title is empty
4. Form calls onTaskCreated callback when submitted successfully
5. Form shows error message when submission fails
6. Form clears inputs after successful submission

Mock the taskService.createTask function.
Create the test file at src/components/CreateTaskForm.test.tsx

Install needed dependencies first:
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

**Review carefully:**
- Are these testing user behavior or implementation details?
- Do the tests make sense to you?
- Can you explain what each test does?

**Run the tests:**
```bash
npm test CreateTaskForm
```

### Step 5: Decide on Manual Tests

Some tests are better written manually:

**You decide:** Should you test TaskList with AI or manually?

**Factors to consider:**
- TaskList is complex (multiple state, effects, child components)
- Business logic around filtering
- Integration between components

**Recommended approach:**
```
I'll write 1-2 example tests for TaskList manually, then ask Claude to follow that pattern for additional scenarios.
```

Write one test yourself, then:

**Prompt 4: Follow the Pattern**
```
Here's a test I wrote for TaskList:

[paste your test]

Create 3 more tests following this exact pattern:
1. Test status filter changes
2. Test priority filter changes
3. Test task creation triggers reload
```

**Why this works better:**
- YOU establish the pattern
- Claude follows your approach
- More likely to match your testing style

## Part 2: Refactor for Quality (7 minutes)

### Step 6: Improve Error Handling

The taskService has basic error handling. Let's improve it:

**Prompt 5: Better Error Handling**
```
Refactor src/services/taskService.ts to improve error handling:

1. Create a custom ApiError class that includes:
   - status code
   - error message
   - optional details

2. Update all service methods to:
   - Parse error responses from the API
   - Throw ApiError with appropriate details
   - Maintain the same function signatures

3. Create the error class in src/types/ApiError.ts

Don't break the existing API - components should still work!
```

**Verification:**
1. Does the app still work?
2. Run your tests - do they still pass?
3. Test error scenarios manually (stop the server, try to create a task)

### Step 7: Extract Utilities

Notice repeated code? Let's refactor:

**Prompt 6: Extract Utilities**
```
I see repeated code for formatting dates in the UI.

Create a utility module at src/utils/dateHelpers.ts with:
- formatDate(dateString): formats ISO dates to readable format
- formatRelativeDate(dateString): "2 days ago" style formatting

Then update TaskItem.tsx to use these utilities.
```

**Verification:**
1. Does the date display still work?
2. Is the code more readable?
3. Can this utility be reused elsewhere?

### Step 8: Code Quality Review

**Prompt 7: Final Review**
```
Review all the changes we made today:

1. Are there any code smells or anti-patterns?
2. Is error handling consistent across the codebase?
3. Are there any security concerns?
4. Are there opportunities for further refactoring?
5. Does the code follow TypeScript best practices?

Provide a prioritized list of improvements.
```

**YOUR job:** Decide which improvements to implement now vs. later.

## Checkpoint Questions

1. **How reliable were the generated tests?**
   - Did they test behavior or implementation?
   - Were there any hallucinations?
   - How much did you have to fix?

2. **When was manual testing better than AI?**
   - Complex components?
   - Business logic?
   - Integration scenarios?

3. **Did refactoring break anything?**
   - How did you verify it was safe?
   - Did tests catch issues?

## Key Takeaways

✅ **Specify exact scenarios:** Don't ask for "comprehensive tests"
✅ **Review tests critically:** Coverage ≠ Quality
✅ **Test the tests:** Make sure they actually fail when they should
✅ **Manual + AI works best:** Write patterns, let AI follow
✅ **Refactor incrementally:** Small changes, verify often

## Common Pitfalls

❌ **Trusting test coverage metrics:** 100% coverage with bad tests is worse than 60% with good tests
❌ **Testing implementation details:** Test behavior, not how code works internally
❌ **Accepting hallucinated test utilities:** Verify testing library methods exist
❌ **Refactoring without tests:** Add tests first, then refactor

## Bonus Challenges (Optional)

If you finish early:

1. **Integration tests:** Test the full flow from user action to API call
2. **E2E tests:** Add a basic Playwright test
3. **Performance:** Add request caching to taskService
4. **Accessibility:** Test keyboard navigation and screen readers

## Workshop Complete! 🎉

You've learned:
- ✅ Codebase exploration with Claude
- ✅ Feature development following existing patterns
- ✅ Test generation and validation
- ✅ Refactoring with confidence

**Commit your work:**
```bash
git add .
git commit -m "test: Add comprehensive test coverage and refactor"
```

## Next Steps: Apply to Real Work

**Start small:**
- Use Claude for code reviews
- Generate documentation for existing features
- Write tests for untested code

**Build up to:**
- Feature development
- Refactoring large modules
- Architecture exploration

**Always remember:**
- You lead, Claude follows
- Verify everything
- Maintain engineering discipline
- You're responsible for the code

## Continue Learning

Review these internal resources:
- AI Tooling Best Practices (in research-docs/)
- Claude Code Advanced Engineering Guide
- Team prompt libraries and conventions

**Share your learnings:**
- Update project CLAUDE.md files
- Contribute effective prompts
- Help teammates adopt best practices

---

## Reflection Questions

Take 2 minutes to think about:

1. **What surprised you about using Claude Code?**
2. **Where do you see the most value in your daily work?**
3. **What concerns or questions do you still have?**
4. **What will you try first on your real projects?**

**Discussion:** Share with your group or facilitator!

---

**Questions?** See your facilitator or check internal AI tools documentation.

**Feedback:** Help improve this workshop by sharing your experience!
