# Classroom Guide - Claude Code Workshop

## Quick Setup for Instructors

The workshop repository is now organized at the top level for easy classroom distribution.

### Repository Structure

```
workshop/  (main git repository)
├── README.md                    # Workshop overview
├── QUICKSTART.md                # 5-minute setup
├── FACILITATOR.md               # Instructor guide
├── CLASSROOM-GUIDE.md           # This file
├── notes.md                     # Your workshop notes
├── CLAUDE.md_comparison/        # CLAUDE.md examples
│
├── exercises/                   # Exercise instructions
│   ├── EXERCISE-1.md
│   ├── EXERCISE-2.md
│   └── EXERCISE-3.md
│
├── task-manager/                # The working application
│   ├── src/
│   ├── server/
│   └── package.json
│
├── solutions/                   # Reference solutions
└── research-docs/               # Background materials
```

### Git Branches - Exercise Checkpoints

The repository uses git branches to provide checkpoints for each exercise. Students who are late, encounter issues, or need to skip ahead can checkout the appropriate branch to continue:

**Branch Structure:**
- **`main`** - Starting point (Exercise 1 begins here)
  - Basic task manager app
  - NO CLAUDE.md
  - NO priority feature
  - NO tests

- **`exercise-1-complete`** - After completing Exercise 1
  - Basic task manager app
  - ✅ CLAUDE.md documentation
  - NO priority feature
  - NO tests

- **`exercise-2-complete`** - After completing Exercise 2
  - Task manager app
  - ✅ CLAUDE.md documentation
  - ✅ Priority system (high/medium/low)
  - NO tests

- **`exercise-3-complete`** - After completing Exercise 3 (fully complete)
  - Task manager app
  - ✅ CLAUDE.md documentation
  - ✅ Priority system
  - ✅ Test coverage

**Usage:**
```bash
# Student is late or stuck? Jump to next exercise:
git checkout exercise-1-complete  # Start Exercise 2 from here
git checkout exercise-2-complete  # Start Exercise 3 from here
git checkout exercise-3-complete  # View completed solution
```

This allows you to:
1. **Handle late arrivals** - Students can checkout the current exercise state
2. **Recover from mistakes** - If a student breaks their code, they can reset to a checkpoint
3. **Enable flexible pacing** - Different students can work at different speeds
4. **Demo completed features** - Checkout `exercise-3-complete` to show the final app

### For Classroom Use

#### Option 1: Instructor-Led Demo

**You demonstrate, participants observe:**

1. Clone the repository:
```bash
git clone <your-repo-url>
cd workshop
```

2. Demo the complete application first (so students see what they'll build):
```bash
git checkout exercise-3-complete
cd task-manager
npm install
npm run dev
```

3. Open browser to http://localhost:5173 and demo:
   - Creating troubleshooting steps
   - Priority badges (High/Medium/Low)
   - Status tracking
   - Filtering by status and priority

4. Return to starting point and demonstrate Claude Code:
```bash
git checkout main
claude
```

5. Work through exercises live:
   - Show how to analyze codebase (Exercise 1)
   - Add priority feature with Claude (Exercise 2)
   - Generate and validate tests (Exercise 3)
   - Use checkpoint branches when needed

#### Option 2: Hands-On Workshop

**Participants build alongside you:**

1. **Pre-workshop:**
   - Share repository URL
   - Have participants clone and run `npm install` from task-manager/
   - Verify everyone starts on `main` branch
   - Verify everyone can start the app
   - Verify everyone has Claude Code installed

2. **During workshop:**
   - Everyone starts on `main` branch
   - Work through Exercise 1 together
   - Pair program through Exercise 2
   - Group exercise for Exercise 3
   - **Late arrivals:** Checkout the appropriate exercise branch to catch up

3. **Handle different pacing:**
   - Fast students: Can move ahead or explore bonus challenges
   - Stuck students: Checkout the next exercise branch to continue
   - Late students: Checkout current exercise state to join the class

#### Option 3: Self-Paced Learning

**Participants work independently:**

1. Share repository with clear README
2. Point to QUICKSTART.md
3. Participants work through exercises at their own pace
4. Can reference complete working code when needed

### Using Exercise Checkpoint Branches

Each branch represents the completed state of that exercise. Use these for:
- Late arrivals who need to catch up
- Students who encounter blocking errors
- Demonstrating the completed features
- Resetting if students break their code

**Starting Exercise 1:**
```bash
git checkout main
cd task-manager
npm install
npm run dev
# App works, but no CLAUDE.md, no priority, no tests
# Follow exercises/EXERCISE-1.md
```

**Starting Exercise 2 (after completing Exercise 1):**
```bash
git checkout exercise-1-complete
# CLAUDE.md exists, now add priority feature
# Follow exercises/EXERCISE-2.md
```

**Starting Exercise 3 (after completing Exercise 2):**
```bash
git checkout exercise-2-complete
# CLAUDE.md and priority feature exist, now add tests
# Follow exercises/EXERCISE-3.md
```

**Viewing the complete solution:**
```bash
git checkout exercise-3-complete
# All features complete: CLAUDE.md + priority + tests
```

### Demonstration Script

**5-Minute Overview Demo:**

1. **Show the problem:** (1 min)
   - "Homeowners call when solar isn't working"
   - "We guide them through troubleshooting steps"
   - "This app makes that systematic"

2. **Demo the app:** (2 min)
   - Open http://localhost:5173
   - Create a step: "Reset inverter"
   - Set priority to High
   - Mark steps as complete
   - Filter by priority

3. **Show Claude Code in action:** (2 min)
   ```bash
   claude

   # Ask a question
   "How does priority filtering work in this app?"

   # Make a small change
   "Add a count of completed steps to the header"
   ```

4. **Explain workshop:**
   - 3 exercises, ~45-60 minutes
   - Learn to use Claude Code effectively
   - Build on realistic Omnidian scenarios

### Classroom Tips

**Before Class:**
- ✅ Test the complete app works
- ✅ Verify npm install runs cleanly
- ✅ Prepare any custom examples relevant to your team
- ✅ Review FACILITATOR.md for timing and common issues

**During Class:**
- ⏱️ Keep strict time limits on exercises
- 🤝 Encourage pair programming
- ❓ Use checkpoint discussions (in exercises)
- 🎯 Focus on verification, not perfection

**After Class:**
- 📝 Collect feedback
- 🔗 Share this repository for future reference
- 💬 Create Slack/Teams channel for questions
- 📅 Schedule follow-up office hours

### Customization

You can customize for your specific class:

**Add company-specific examples:**
```bash
# Edit task-manager/server/index.ts
# Change sample tasks to match your actual troubleshooting steps
```

**Add your Claude prompts:**
```bash
# Add to CLAUDE.md_comparison/
# Show different CLAUDE.md approaches
```

**Create additional exercises:**
```bash
# Add exercises/EXERCISE-4.md
# Build on the workshop with advanced topics
```

### Troubleshooting Common Classroom Issues

**"npm install fails":**
- Check Node version: `node --version` (need 18+)
- Clear cache: `npm cache clean --force`
- Delete node_modules and try again

**"Claude Code won't start":**
- Verify login: `claude` then `/login`
- Check Omnidian org selected
- See TROUBLESHOOTING.md

**"Git conflicts":**
- Participants should work in their own branches
- Or fork the repository

**"Different results than instructor":**
- Claude may give different (valid) solutions
- Focus on the process, not exact code match
- Use this as a teaching moment about AI variability

### Support Materials

- **notes.md:** Your personal workshop notes
- **CLAUDE.md_comparison/:** Different CLAUDE.md examples
- **research-docs/:** Background reading on Claude Code
- **solutions/:** Reference implementations

### Post-Workshop Follow-Up

**Within 24 hours:**
- Send summary email with repository link
- Share recording if available
- Provide feedback form

**Within 1 week:**
- Review feedback
- Schedule office hours
- Share advanced resources

**Ongoing:**
- Build prompt library from successful patterns
- Document team-specific Claude Code practices
- Share success stories

---

## Quick Reference

**Start the app:**
```bash
cd task-manager
npm install
npm run dev
```

**Start Claude Code:**
```bash
cd task-manager
claude
```

**Reset to starting state:**
```bash
git checkout main
cd task-manager
# Starts Exercise 1 from beginning
```

**Jump to exercise checkpoint:**
```bash
git checkout exercise-1-complete  # After Ex 1
git checkout exercise-2-complete  # After Ex 2
git checkout exercise-3-complete  # After Ex 3 (complete)
```

**Push to your org:**
```bash
git remote add origin <your-git-url>
git push -u origin main
```

---

**Ready to teach!**

Start with a demo of the complete app, then guide participants through the exercises. The complete working code is always available for reference.
