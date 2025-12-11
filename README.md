# Getting Started with Claude Code: Engineering Workshop

A hands-on workshop for engineers learning to use Claude Code effectively. Built for teams working with TypeScript, React, and modern development practices.

## Workshop Overview

**Duration:** 45-60 minutes
**Format:** Progressive, hands-on exercises
**Audience:** Engineers new to AI-assisted development

This workshop teaches practical Claude Code skills through three progressive exercises:

1. **Codebase Exploration** - Learn to understand unfamiliar code with Claude
2. **Feature Development** - Build new features following existing patterns
3. **Refactoring & Testing** - Modernize code and add comprehensive tests

## Prerequisites

- Claude Code CLI installed ([installation guide](https://docs.anthropic.com/en/docs/claude-code/setup))
- Node.js 18+ and npm/yarn
- Git
- Your preferred IDE (IntelliJ, VSCode with Claude Code plugin recommended)
- Basic familiarity with TypeScript and React

## Workshop Structure

Each exercise builds on the previous one, with git branches marking each starting point:

```
main (workshop-start)     → Exercise 1: Explore the codebase
  ↓
exercise-1-complete       → Exercise 2: Add priority filtering
  ↓
exercise-2-complete       → Exercise 3: Refactor and test
  ↓
exercise-3-complete       → Final solution
```

## The Codebase: Task Manager

A simple but realistic task management application:

- **Frontend:** React 18 with TypeScript
- **Backend:** Express.js REST API
- **Storage:** In-memory (for workshop simplicity)
- **Key Features:** CRUD operations, filtering, basic validation

This codebase intentionally:
- Follows real-world patterns (components, services, types)
- Has some documentation gaps (you'll fill them!)
- Contains code that could be improved (perfect for refactoring!)
- Mimics the kind of code you encounter daily

## Getting Started

### 1. Clone and Setup

```bash
# Navigate to workshop directory
cd /path/to/workshop

# Install dependencies
cd task-manager
npm install

# Start the application
npm run dev
```

The app will run on:
- Frontend: http://localhost:5173
- Backend: http://localhost:3001/api

### 2. Verify Your Setup

Open your IDE in the `task-manager` directory and run:

```bash
claude
```

Type `/ide` to verify IDE integration is working.

### 3. Choose Your Starting Point

**First Time?** Start with Exercise 1 on the `main` branch.

**Skip Ahead?** Checkout the appropriate branch:
```bash
git checkout exercise-1-complete  # Start from Exercise 2
git checkout exercise-2-complete  # Start from Exercise 3
```

## Workshop Philosophy

This workshop follows the **"You Lead, AI Follows"** principle:

- **You** understand the requirements and design the approach
- **Claude** helps with implementation, testing, and documentation
- **You** verify, validate, and maintain responsibility for the code

Remember:
- Always verify AI outputs against actual code and documentation
- Start tasks yourself, let Claude fill the gaps
- Treat generated code as a first draft requiring review
- Context is everything - good prompts get good results

## Exercise Overview

### Exercise 1: Codebase Exploration (15 min)
**Goal:** Use Claude to understand and document an unfamiliar codebase

You'll learn:
- How to analyze codebases with Claude
- Creating effective CLAUDE.md documentation
- Verifying AI-generated architecture analysis
- Generating architecture diagrams

**Key Skill:** Context management and verification

### Exercise 2: Feature Development (20 min)
**Goal:** Add a priority filtering feature following existing patterns

You'll learn:
- Effective feature development prompts
- Finding and following existing patterns
- Iterative refinement with Claude
- Validating generated code

**Key Skill:** Leading the design, using Claude for implementation

### Exercise 3: Refactoring & Testing (15 min)
**Goal:** Modernize code and add comprehensive test coverage

You'll learn:
- Refactoring strategies with Claude
- Test generation best practices
- Validating AI-generated tests
- When to write tests manually vs. using AI

**Key Skill:** Code quality and testing discipline

## Workshop Materials

- `exercises/` - Step-by-step exercise instructions
- `task-manager/` - The workshop codebase
- `solutions/` - Reference solutions for each exercise
- `FACILITATOR.md` - Guide for workshop facilitators

## After the Workshop

Continue your Claude Code journey:

1. **Review Internal Docs:**
   - AI Tooling Best Practices
   - Claude Code Core Concepts
   - Advanced Engineering Guide

2. **Practice with Real Work:**
   - Start with code review and documentation tasks
   - Graduate to feature development
   - Build team-specific custom commands

3. **Share Your Learnings:**
   - Contribute effective prompts to team libraries
   - Update project CLAUDE.md files
   - Help teammates adopt best practices

## Getting Help

- Workshop issues? Check `TROUBLESHOOTING.md`
- Claude Code questions? Use `/help` or see [docs](https://docs.anthropic.com/en/docs/claude-code)
- Team-specific questions? Reach out to your AI tools champions

## Key Takeaways

By the end of this workshop, you'll understand:

✅ How to provide effective context to Claude
✅ When to use (and not use) AI assistance
✅ How to verify and validate AI-generated code
✅ Practical patterns for daily development tasks
✅ Security and quality considerations

Remember: Claude Code is a powerful assistant, not a replacement for engineering judgment. You remain responsible for code quality, security, and architectural decisions.

---

**Ready to begin?** Head to `exercises/EXERCISE-1.md` to start!
