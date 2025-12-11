# Exercise 1: Codebase Exploration and Documentation

**Duration:** ~15 minutes
**Goal:** Learn to use Claude Code to explore and document an unfamiliar codebase

## Learning Objectives

By the end of this exercise, you'll understand:
- How to effectively use Claude to analyze code structure
- Creating comprehensive CLAUDE.md documentation
- Verifying AI-generated analysis
- Best practices for providing context to Claude

## Scenario

You've just joined a team and need to understand their Task Manager application. The codebase has minimal documentation, and you need to get up to speed quickly. You'll use Claude Code to analyze the architecture and create documentation.

## Prerequisites

Make sure you're on the correct branch:
```bash
git checkout main  # or workshop-start
cd task-manager
npm install
```

Start the application to see what it does:
```bash
npm run dev
```

Visit http://localhost:5173 and explore the app. Create a few tasks, change their status, and delete one.

## Part 1: Initial Codebase Analysis (5 minutes)

### Step 1: Start Claude Code

From the `task-manager` directory:
```bash
claude
```

### Step 2: Ask High-Level Questions

Start with broad questions to understand the application. Try these prompts:

**Prompt 1: Project Overview**
```
Analyze this codebase and explain:
1. What does this application do?
2. What is the overall architecture?
3. What technologies are used?
4. What is the directory structure?
```

**Important:** As Claude responds, **verify its claims** by:
- Checking the package.json for actual dependencies
- Looking at the directory structure yourself
- Opening mentioned files to confirm they exist

### Step 3: Understand the Data Flow

**Prompt 2: Data Flow Analysis**
```
Explain how data flows through this application:
1. How are tasks fetched from the server?
2. How are new tasks created?
3. How is state managed on the frontend?
4. What happens when a task status is updated?

Reference specific files and functions in your explanation.
```

**Verification:**
- Open the files Claude mentions
- Trace through the actual function calls
- Note any inaccuracies (hallucinations) you find

### Common Issues to Watch For:
- Claude might mention files that don't exist
- It may describe patterns that aren't actually used
- Function names or import paths might be incorrect

## Part 2: Create CLAUDE.md Documentation (7 minutes)

Now you'll work with Claude to create project documentation that will help future Claude sessions (and team members!) understand this codebase.

### Step 4: Generate Initial CLAUDE.md

**Prompt 3: Documentation Generation**
```
Create a CLAUDE.md file for this project that includes:
1. Project overview and purpose
2. Architecture and key patterns
3. Technology stack with versions
4. Directory structure explanation
5. Key files and their responsibilities
6. How to run and test the application
7. Coding conventions observed in the codebase

Base this on the actual code structure in this repository.
```

Claude will generate a CLAUDE.md file. Review it carefully!

### Step 5: Verify and Refine

**Review the generated CLAUDE.md:**

1. **Check technical accuracy:**
   - Are the versions correct? (check package.json)
   - Are file paths accurate?
   - Do described patterns match actual code?

2. **Add missing context:**
   - Business rules or constraints
   - Known limitations or TODOs
   - Team-specific conventions

3. **Iterate with corrections:**

If you find inaccuracies, use this pattern:

```
The CLAUDE.md says [incorrect thing], but actually [correct thing].
Please update the CLAUDE.md to reflect this.
```

### Step 6: Add Architecture Diagram

**Prompt 4: Visual Documentation**
```
Create a mermaid diagram showing:
1. The relationship between React components
2. How components interact with the taskService
3. How the backend API endpoints are structured

Add this diagram to the CLAUDE.md file.
```

**Verify:** Does the diagram match the actual code structure?

## Part 3: Testing Your Documentation (3 minutes)

### Step 7: Start a Fresh Session

1. Exit Claude Code (type `/exit`)
2. Start a new session: `claude`

### Step 8: Ask Questions Using Your Context

Now that CLAUDE.md exists, ask Claude a specific question:

```
Where should I add validation to ensure task titles are not empty?
```

Claude should reference your CLAUDE.md and provide context-aware answers about the codebase.

**Expected behavior:** Claude uses the CLAUDE.md context to give better, more specific answers about your codebase patterns.

## Checkpoint Questions

Before moving to Exercise 2, answer these:

1. **What inaccuracies did you find in Claude's analysis?**
   - This is normal! AI makes mistakes.
   - Your job is to catch and correct them.

2. **How would you describe the architecture to a new team member?**
   - Can you explain it in your own words now?
   - Is Claude's analysis helping or confusing?

3. **What would you add to CLAUDE.md that Claude didn't include?**
   - Business rules?
   - Team conventions?
   - Known issues or gotchas?

## Key Takeaways

✅ **Always verify:** Claude can hallucinate files, functions, and patterns
✅ **You lead:** Use Claude to accelerate understanding, not replace it
✅ **Context matters:** Good CLAUDE.md = better future interactions
✅ **Iterate:** First drafts are rarely perfect; refine and correct

## Common Pitfalls

❌ **Trusting without verifying:** Always check that files and functions exist
❌ **Accepting generic advice:** Push for specific, codebase-relevant answers
❌ **Skipping manual exploration:** Use Claude to supplement, not replace, your own code reading

## Next Steps

Once your CLAUDE.md is accurate and comprehensive, you're ready for Exercise 2, where you'll use this context to build a new feature!

**Commit your work:**
```bash
git add CLAUDE.md
git commit -m "docs: Add project documentation from Exercise 1"
```

**Move to Exercise 2:**
```bash
# Stay on current branch - we'll build on this work
# Open exercises/EXERCISE-2.md
```

## Bonus Challenge (Optional)

If you finish early:
- Ask Claude to generate API documentation in OpenAPI format
- Create a sequence diagram for the task creation flow
- Document error handling patterns used in the codebase

---

**Having trouble?** See `TROUBLESHOOTING.md` or ask your facilitator.
