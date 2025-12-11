# Claude Code Workshop - Setup Complete! 🎉

## What's Been Created

A complete hands-on workshop for Omnidian engineers to learn Claude Code through realistic solar O&M scenarios.

### Workshop Context: Solar System Troubleshooting

The workshop uses a **Solar System Troubleshooting Portal** that helps homeowners diagnose issues with their solar systems. This provides Omnidian-relevant context while teaching Claude Code fundamentals.

## Repository Structure

```
workshop/
├── README.md                    # Workshop overview and philosophy
├── QUICKSTART.md                # 5-minute setup guide
├── TROUBLESHOOTING.md           # Common issues and solutions
├── FACILITATOR.md               # Complete guide for workshop leaders
│
├── exercises/
│   ├── EXERCISE-1.md           # Codebase exploration (15 min)
│   ├── EXERCISE-2.md           # Feature development (20 min)
│   └── EXERCISE-3.md           # Testing & refactoring (15 min)
│
├── task-manager/               # Workshop codebase
│   ├── src/                    # React frontend
│   ├── server/                 # Express backend
│   └── package.json            # Dependencies
│
├── solutions/
│   └── CLAUDE-example.md       # Example CLAUDE.md for reference
│
└── research-docs/              # Your existing documentation
```

## Git Branches (Easy Bake Oven Style)

The repository has 4 branches participants can use:

```
main                      → Starting point (no CLAUDE.md)
  ├─ exercise-1-complete  → Has CLAUDE.md, ready for Exercise 2
  ├─ exercise-2-complete  → Priority feature implemented
  └─ exercise-3-complete  → Tests added
```

**Current branch:** `main` (the starting point)

## The Application

**Solar System Troubleshooting Portal** - Guides homeowners through diagnostic steps:

**Sample troubleshooting steps:**
1. ✅ Check main solar breaker (High Priority)
2. 🔄 Verify inverter display is on (High Priority)
3. ⏳ Confirm internet connectivity (Medium Priority)
4. ⏳ Check for physical damage or debris (Low Priority)

**Features:**
- Status tracking (To Do, In Progress, Done)
- Status filtering
- Custom step creation
- Homeowner-friendly language

**Tech Stack:**
- React 18 + TypeScript
- Express.js REST API
- Vite build tool
- Vitest for testing

## Exercise Progression

### Exercise 1: Codebase Exploration (15 min)
**What they learn:**
- How to analyze unfamiliar code with Claude
- Creating CLAUDE.md documentation
- Spotting hallucinations and verifying outputs
- Context management best practices

**What they build:**
- Complete CLAUDE.md file with architecture documentation
- Understanding of the codebase structure

### Exercise 2: Feature Development (20 min)
**What they learn:**
- Leading design while Claude implements
- Following existing code patterns
- Iterative refinement
- Proper verification at each step

**What they build:**
- Priority system for troubleshooting steps (Low, Medium, High)
- Priority filtering in UI
- Priority badges with color coding
- Priority selection when creating steps

**Solar context:** Helps homeowners understand which steps are most critical (e.g., breaker check = high priority)

### Exercise 3: Testing & Refactoring (15 min)
**What they learn:**
- Generating tests with Claude
- Validating AI-generated tests
- When to write tests manually
- Test quality over coverage

**What they build:**
- Comprehensive taskService tests
- Test mocking patterns
- Understanding of test validation

## Solar O&M Context Throughout

The workshop uses realistic Omnidian scenarios:

**Business Context:**
- Reduces unnecessary truck rolls
- Faster root cause identification
- Homeowner self-service troubleshooting
- Support agent guidance

**Troubleshooting Categories:**
- System check
- Inverter issues
- Connectivity problems
- Electrical (breakers, wiring)
- Monitoring data
- Physical inspection

**Example prompts use solar domain:**
- "Add high priority to breaker check step"
- "Create test for inverter status validation"
- "Filter to show only high-priority electrical issues"

## Quick Start for Engineers

```bash
# Navigate to workshop
cd task-manager

# Install dependencies
npm install

# Start the application
npm run dev

# In another terminal, start Claude Code
claude

# Begin Exercise 1
open ../exercises/EXERCISE-1.md
```

## Key Workshop Principles

1. **"You Lead, AI Follows"** - Engineers design, Claude implements
2. **Verification is Essential** - Always check AI outputs
3. **Follow Existing Patterns** - Consistency over cleverness
4. **Iterative Development** - Small steps, test frequently
5. **Security Mindset** - Review AI code like any other code

## For Workshop Facilitators

See `FACILITATOR.md` for:
- Pre-workshop checklist
- Timing guidance for each exercise
- Common issues and how to handle them
- Discussion prompts for checkpoints
- Tips for managing group dynamics

## Testing the Workshop

Before running with your team:

```bash
cd task-manager
npm install
npm run dev
# Open http://localhost:5173

# Test Exercise 1
git checkout exercise-1-complete
# Verify CLAUDE.md exists

# Test Exercise 2
git checkout exercise-2-complete
npm run dev
# Verify priority filtering works

# Test Exercise 3
git checkout exercise-3-complete
npm test
# Verify tests pass

# Return to start
git checkout main
```

## Customization for Your Team

You may want to:

1. **Add team-specific examples** to CLAUDE.md template
2. **Include your coding conventions** in exercises
3. **Reference your internal systems** (ticketing, monitoring, etc.)
4. **Add bonus exercises** for advanced topics
5. **Create custom slash commands** relevant to your work

## Running the Workshop

**Recommended approach:**
- Schedule 90-minute sessions (includes intro and Q&A)
- Groups of 4-12 engineers
- Have a facilitator who's completed the workshop
- Encourage questions and discussion at checkpoints
- Follow up with office hours for additional support

**Async option:**
- Engineers complete at their own pace
- Slack channel for questions
- Weekly sync for discussion
- Share learnings in team meetings

## Success Metrics

After the workshop, engineers should:
- ✅ Understand how to provide context to Claude
- ✅ Know when (and when not) to use AI assistance
- ✅ Verify AI-generated code effectively
- ✅ Apply patterns to their daily work
- ✅ Feel confident starting with real codebases

## Next Steps

1. **Pilot the workshop** with 2-3 engineers
2. **Gather feedback** and iterate
3. **Schedule team sessions** based on feedback
4. **Create follow-up resources** (prompt libraries, custom commands)
5. **Share success stories** to build momentum

## Support

- **Workshop issues:** Check TROUBLESHOOTING.md
- **Claude Code questions:** Internal AI tools docs
- **Technical problems:** Your AI tools champions
- **Feedback:** Help us improve - share your experience!

---

**The workshop is ready to run!**

Start by reviewing the exercises yourself, then pilot with a small group before rolling out to the full engineering team.

Good luck! 🚀
