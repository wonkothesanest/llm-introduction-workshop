# Quick Start Guide

Get up and running with the Claude Code workshop in 5 minutes!

## Step 1: Verify Prerequisites (2 min)

Run these commands to check your setup:

```bash
# Check Node.js version (need 18+)
node --version

# Check Claude Code is installed
claude --version

# Check you're logged in
claude
/status
/exit
```

If anything fails, see [Setup Instructions](#setup-instructions) below.

## Step 2: Get the Workshop Code (1 min)

```bash
# Navigate to the workshop directory
cd /path/to/workshop/task-manager

# Install dependencies
npm install
```

## Step 3: Start the Application (1 min)

```bash
# Start both frontend and backend
npm run dev
```

Visit http://localhost:5173 - you should see the Task Manager app.

**Test it:**
- Create a task
- Change its status
- Delete it

## Step 4: Start Claude Code (1 min)

```bash
# Open a new terminal in the task-manager directory
cd /path/to/workshop/task-manager

# Start Claude
claude
```

You should see the Claude Code prompt.

**Test the IDE integration:**
```
/ide
```

You should see a green checkmark next to your IDE.

## Step 5: Begin Exercise 1

```
Open the file: exercises/EXERCISE-1.md
Follow along!
```

---

## Setup Instructions

### Install Claude Code CLI

1. Visit https://docs.anthropic.com/en/docs/claude-code/setup
2. Follow installation for your OS
3. Run `claude --version` to verify

### Login to Claude Code

```bash
claude
/login
```

When prompted:
1. Choose: **Anthropic Console account**
2. Browser will open
3. Select: **Omnidian Org**
4. Click: **Authorize**

### Install IDE Plugin (Optional but Recommended)

**IntelliJ/PyCharm:**
1. Settings → Plugins
2. Search "Claude Code"
3. Install and restart

**VSCode:**
1. Extensions (Ctrl+Shift+X)
2. Search "Claude Code"
3. Install

### Verify Full Setup

Run this in a terminal:

```bash
cd /path/to/workshop/task-manager
npm install
npm run dev
```

In another terminal:
```bash
cd /path/to/workshop/task-manager
claude
```

Type: `Explain what this codebase does`

If Claude responds with information about the Task Manager, you're ready!

---

## Common Issues

**"Claude command not found"**
- Claude Code not installed or not in PATH
- Reinstall from https://docs.anthropic.com/en/docs/claude-code/setup

**"Missing API key"**
- Run: `claude` then `/login`
- Choose Anthropic Console → Omnidian Org

**"npm install fails"**
```bash
# Clear cache and try again
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**"Port already in use"**
```bash
# Kill processes on the ports
lsof -ti:3001 -ti:5173 | xargs kill
npm run dev
```

See `TROUBLESHOOTING.md` for more help.

---

## Workshop Structure

```
📁 workshop/
├── README.md              ← Overview and philosophy
├── QUICKSTART.md          ← You are here!
├── TROUBLESHOOTING.md     ← When things go wrong
├── FACILITATOR.md         ← For workshop leaders
│
├── exercises/
│   ├── EXERCISE-1.md      ← Codebase exploration (15 min)
│   ├── EXERCISE-2.md      ← Feature development (20 min)
│   └── EXERCISE-3.md      ← Testing & refactoring (15 min)
│
├── task-manager/          ← The application you'll work with
│   ├── src/               ← React frontend
│   ├── server/            ← Express backend
│   └── package.json       ← Dependencies
│
└── research-docs/         ← Background reading (optional)
```

## Learning Path

1. **Complete the exercises** (45-60 min)
   - Exercise 1: Understanding code with Claude
   - Exercise 2: Building features
   - Exercise 3: Testing and refactoring

2. **Apply to real work** (ongoing)
   - Start with code review and documentation
   - Graduate to feature development
   - Build team-specific patterns

3. **Share knowledge** (continuous)
   - Update project CLAUDE.md files
   - Contribute effective prompts
   - Help teammates learn

---

## Key Principles

Remember these throughout the workshop:

**YOU LEAD, AI FOLLOWS**
- You design the approach
- Claude helps with implementation
- You verify everything

**VERIFY EVERYTHING**
- AI makes confident mistakes
- Check files exist
- Test functionality
- You're responsible for quality

**START SMALL**
- Begin with low-risk tasks
- Build confidence gradually
- Learn from mistakes

---

Ready? Head to `exercises/EXERCISE-1.md` and let's begin!
