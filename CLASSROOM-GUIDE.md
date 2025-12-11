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

### Git Branches

**Main branch:** Contains the complete working application with all features
- Solar troubleshooting portal
- Priority system
- Tests included
- Full CLAUDE.md documentation

This allows you to:
1. **Demo the complete app** to show what participants will build
2. **Reference the full solution** when helping stuck participants
3. **Share one repository** that contains everything

### For Classroom Use

#### Option 1: Instructor-Led Demo

**You demonstrate, participants observe:**

1. Clone and show the complete working app:
```bash
git clone <your-repo-url>
cd workshop/task-manager
npm install
npm run dev
```

2. Open browser to http://localhost:5173 and demo:
   - Creating troubleshooting steps
   - Priority badges (High/Medium/Low)
   - Status tracking
   - Filtering by status and priority

3. In a separate terminal, demonstrate Claude Code:
```bash
claude
```

4. Work through exercises live:
   - Show how to analyze codebase (Exercise 1)
   - Add a new feature with Claude (use Exercise 2 as guide)
   - Generate and validate tests (Exercise 3)

#### Option 2: Hands-On Workshop

**Participants build alongside you:**

1. **Pre-workshop:**
   - Share repository URL
   - Have participants clone and run `npm install`
   - Verify everyone can start the app
   - Verify everyone has Claude Code installed

2. **During workshop:**
   - Work through Exercise 1 together
   - Pair program through Exercise 2
   - Group exercise for Exercise 3

3. **Reference the complete code:**
   - When stuck, participants can check task-manager/ for working examples
   - solutions/CLAUDE-example.md shows complete documentation

#### Option 3: Self-Paced Learning

**Participants work independently:**

1. Share repository with clear README
2. Point to QUICKSTART.md
3. Participants work through exercises at their own pace
4. Can reference complete working code when needed

### Using the Complete Working Application

The current `main` branch has everything working. To show different exercise states:

**Starting State (for Exercise 1):**
```bash
# Remove CLAUDE.md to simulate starting point
rm task-manager/CLAUDE.md

# Now participants can create it themselves
claude
# Follow EXERCISE-1.md
```

**After Exercise 1 (for Exercise 2):**
```bash
# CLAUDE.md exists, but priority feature doesn't yet
# Participants will add priority in Exercise 2
```

**After Exercise 2 (for Exercise 3):**
```bash
# Priority feature exists, now add tests
# Participants will create taskService.test.ts
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
rm task-manager/CLAUDE.md
# Start with Exercise 1
```

**Push to your org:**
```bash
git remote add origin <your-git-url>
git push -u origin main
```

---

**Ready to teach!**

Start with a demo of the complete app, then guide participants through the exercises. The complete working code is always available for reference.
