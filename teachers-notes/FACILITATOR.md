# Workshop Facilitator Guide

## Overview

This guide helps you run an effective Claude Code workshop for engineers new to AI-assisted development.

**Workshop Duration:** 45-60 minutes
**Recommended Group Size:** 4-12 participants
**Format:** Hands-on, self-paced with guided checkpoints

## Preparation Checklist (1 week before)

### Technical Setup
- [ ] Verify all participants have Claude Code CLI access
- [ ] Ensure everyone can access the Anthropic Console (SSO setup)
- [ ] Test the workshop repository on different machines
- [ ] Confirm IDE plugins work (IntelliJ, VSCode)
- [ ] Prepare a backup plan if network/API issues occur

### Communication
- [ ] Send calendar invite with preparation instructions
- [ ] Share installation guide (at least 3 days prior)
- [ ] Remind participants to complete setup 1 day before
- [ ] Prepare a troubleshooting Slack/Teams channel

### Materials
- [ ] Clone this repository to a shared location
- [ ] Prepare solution branches (see below)
- [ ] Test all exercises end-to-end
- [ ] Print quick reference cards (optional)

## Pre-Workshop Setup (Day before)

### Verify Participant Readiness

Send this checklist:
```
Before the workshop, please verify:
✅ Claude Code CLI installed (run: claude --version)
✅ Logged into Anthropic Console with Omnidian Org
✅ Node.js 18+ installed (run: node --version)
✅ Git configured
✅ IDE with Claude Code plugin (optional but recommended)

Test command: Run `claude` in a terminal - you should see the Claude prompt.
```

### Prepare Your Demo Environment

1. **Clean installation:** Test workshop on a fresh machine
2. **Time each exercise:** Ensure timing estimates are accurate
3. **Note common issues:** Be ready to troubleshoot typical problems
4. **Prepare examples:** Have alternative prompts ready if needed

## Workshop Flow

### Introduction (5 minutes)

**Key points to cover:**
- Workshop goals and structure
- "You Lead, AI Follows" philosophy
- This is about learning patterns, not perfection
- Questions are encouraged

**Set expectations:**
```
Today you'll learn:
✅ How to provide effective context to Claude
✅ When (and when NOT) to use AI assistance
✅ How to verify AI-generated code
✅ Practical patterns for daily development

You WON'T become experts in 1 hour - this is just the beginning!
```

**Quick poll:** "Who has used ChatGPT/GitHub Copilot before?"
- Helps gauge experience level
- Adjust pacing if needed

### Exercise 1: Codebase Exploration (15 minutes)

**Start time:** Note the clock, this is self-paced

**Your role:**
- Circulate and observe
- Answer setup questions
- Point out when people skip verification steps
- Note common issues for group discussion

**Common issues to watch for:**
1. **Not verifying Claude's output**
   - Gently remind: "Did you check if that file actually exists?"
2. **Accepting hallucinations**
   - Point out: "Compare what Claude said to the actual package.json"
3. **Skipping the CLAUDE.md creation**
   - This is critical for later exercises!

**5-minute warning:** "Aim to have your CLAUDE.md created in the next 5 minutes"

**Checkpoint discussion (3 minutes):**
```
Quick show of hands:
- Who found inaccuracies in Claude's analysis? (Everyone should!)
- What kinds of hallucinations did you see?
- How did you catch them?

Key lesson: AI makes confident mistakes. Your job is to verify.
```

### Exercise 2: Feature Development (20 minutes)

**Start time:** Note the clock

**Your role:**
- Watch for people letting Claude design instead of implementing
- Remind participants to find existing patterns first
- Encourage testing at each step, not just at the end

**Common issues:**
1. **Letting Claude lead:**
   - "Wait - have YOU decided what the priority type should be?"
   - "Did you look at the status filtering code first?"

2. **Not following patterns:**
   - "Look at how status filtering works - your priority filter should match"

3. **Skipping verification:**
   - "Test it now before moving on!"

**10-minute mark:** "You should be done with backend by now, moving to frontend"

**5-minute warning:** "Wrap up your current step - we'll discuss in 5 minutes"

**Checkpoint discussion (3 minutes):**
```
How did it go?
- Who successfully added priority filtering?
- What challenges did you face?
- Did Claude follow your existing patterns?
- Any interesting bugs or issues?

Key lesson: Good prompts reference existing code and patterns.
```

### Exercise 3: Testing and Refactoring (15 minutes)

**Start time:** Note the clock

**Your role:**
- This is where test quality issues surface
- Watch for people trusting test coverage without reviewing tests
- Emphasize the "break the test" verification

**Common issues:**
1. **Trusting generated tests without review:**
   - "Did you actually read what those tests do?"
   - "Break the code - do the tests fail?"

2. **Tests that don't test behavior:**
   - "This test just checks that you called a function. Does it verify the outcome?"

3. **Skipping the manual testing comparison:**
   - "Try writing one test yourself first"

**5-minute warning:** "Focus on getting at least one test working"

**Checkpoint discussion (3 minutes):**
```
Test generation insights:
- How many had to fix generated tests?
- What kinds of issues did you find?
- When would you write tests manually?

Key lesson: AI-generated tests need the same scrutiny as any code.
```

### Wrap-Up Discussion (5 minutes)

**Reflection questions:**
```
1. What surprised you about Claude Code?
2. Where do you see value in your daily work?
3. What concerns do you have?
4. What will you try first on real projects?
```

**Key takeaways to reinforce:**
- ✅ You're responsible for code quality, not the AI
- ✅ Verification is not optional
- ✅ Start small with real work (code review, docs)
- ✅ Share learnings with the team

**Next steps:**
- Point to internal resources (research-docs/)
- Encourage starting with low-risk tasks
- Remind about team prompt libraries
- Share feedback channel

## Troubleshooting Guide

### "Claude Code won't start"

**Likely causes:**
1. Not logged in: `Run /login`
2. API key issues: Check Anthropic Console
3. Network/firewall issues: Verify connection

**Quick fix:**
```bash
# Re-login
claude
/login
# Select Anthropic Console > Omnidian Org
```

### "npm install fails"

**Likely causes:**
1. Node version too old
2. Network issues
3. Corrupted node_modules

**Quick fix:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### "The app won't start"

**Likely causes:**
1. Port already in use
2. Dependencies not installed
3. TypeScript errors

**Quick fix:**
```bash
# Kill processes on ports
lsof -ti:3001 -ti:5173 | xargs kill

# Reinstall and try again
npm install
npm run dev
```

### "Claude is giving weird responses"

**Likely causes:**
1. No CLAUDE.md context
2. Not enough detail in prompts
3. Asking too many things at once

**Guidance:**
- Break complex requests into steps
- Reference specific files/patterns
- Verify responses against actual code

### "Tests won't run"

**Likely causes:**
1. Testing dependencies not installed
2. Wrong test command
3. TypeScript configuration issues

**Quick fix:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm test
```

## Time Management

### If Running Behind

**Priority order:**
1. Exercise 1: MUST complete (foundation for rest)
2. Exercise 2: Core learning (at least get to backend changes)
3. Exercise 3: Nice to have (can be homework)

**Time-saving options:**
- Skip bonus challenges
- Reduce group discussion time
- Focus on one exercise deeply rather than all three superficially

### If Running Ahead

**Bonus activities:**
- Discuss advanced prompting techniques
- Show custom slash commands
- Demonstrate hooks/MCP servers
- Live coding session with group suggestions

## Common Questions

### "Is Claude Code free?"

No, but costs are managed at the org level. Use freely for learning and work - management monitors costs, not individuals.

### "Can I use this on production code?"

Yes, but maintain the same review standards. You're responsible for what gets merged.

### "What if Claude writes bad code?"

That's expected! The point is to catch it, not prevent it. Review everything.

### "Should I use Opus or Sonnet?"

Sonnet (default) for 95% of tasks. Opus only for complex architectural decisions.

### "Can Claude access our private data?"

Only code you explicitly share in your session. It doesn't automatically scan your filesystem.

### "What about security sensitive code?"

Extra caution required. Have security experts review AI-assisted auth/crypto/validation code.

## Post-Workshop Follow-Up

### Within 24 hours:
- [ ] Send summary email with key takeaways
- [ ] Share link to workshop materials
- [ ] Provide feedback form
- [ ] Address any outstanding questions

### Within 1 week:
- [ ] Review feedback and note improvements
- [ ] Schedule optional office hours
- [ ] Share success stories from early adopters
- [ ] Update internal docs based on feedback

## Measuring Success

### Good indicators:
- Participants understand "verify everything"
- People reference existing patterns in prompts
- Discussion about when NOT to use AI
- Questions about team adoption

### Warning signs:
- Over-confidence in AI outputs
- Skipping verification steps
- No questions or concerns raised
- Rushing through without understanding

## Tips for Success

**Do:**
- ✅ Create a safe learning environment
- ✅ Emphasize that mistakes are part of learning
- ✅ Share real examples from your experience
- ✅ Adjust pacing based on the group

**Don't:**
- ❌ Rush through to hit every exercise
- ❌ Skip the verification discussions
- ❌ Present AI as infallible
- ❌ Forget to reinforce "You Lead, AI Follows"

## Resources for Facilitators

**Internal documents:**
- AI Tooling Best Practices
- Claude Code Core Concepts
- Advanced Engineering Guide

**External resources:**
- [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code)
- [Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)

## Appendix: Solution Branches

The repository should have these branches:

```
main (workshop-start)     - Clean codebase, no CLAUDE.md
exercise-1-complete       - Has CLAUDE.md, ready for Exercise 2
exercise-2-complete       - Priority feature complete
exercise-3-complete       - Tests and refactoring done
```

Participants can checkout these branches if they:
- Get stuck and want to move forward
- Want to see reference solutions
- Need to catch up to the group

**How to use:**
```bash
# If someone gets stuck, they can jump ahead
git stash  # Save their work
git checkout exercise-1-complete  # Start from solution
```

## Feedback

Help improve this workshop! Note:
- What worked well
- What confused participants
- Timing accuracy
- Technical issues encountered
- Suggested improvements

Share with the AI tools team to iterate and improve!
