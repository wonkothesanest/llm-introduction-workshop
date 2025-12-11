# Workshop Troubleshooting Guide

## Quick Diagnostic

Running into issues? Start here:

```bash
# Check Node version (need 18+)
node --version

# Check if Claude Code is installed
claude --version

# Check if logged in
claude
/status

# Check if dependencies installed
cd task-manager
ls node_modules  # Should have many folders

# Check if API is accessible
curl https://api.anthropic.com/v1/messages -I
```

## Common Issues

### Claude Code Won't Start

**Symptom:** Running `claude` shows error or doesn't start

**Solutions:**

1. **Not installed:**
   ```bash
   # Install via official method
   # See: https://docs.anthropic.com/en/docs/claude-code/setup
   ```

2. **Not logged in:**
   ```bash
   claude
   /login
   # Choose: Anthropic Console account
   # Select: Omnidian Org
   ```

3. **API key issues:**
   - Go to https://console.anthropic.com
   - Verify you're logged in with Omnidian SSO
   - Try logging out and back in
   - Run `/login` in Claude again

### npm install Fails

**Symptom:** Dependencies won't install

**Solutions:**

1. **Node version too old:**
   ```bash
   node --version  # Need 18+
   # Upgrade Node if needed
   ```

2. **Network/proxy issues:**
   ```bash
   # Check npm registry access
   npm config get registry

   # Try clearing cache
   npm cache clean --force
   npm install
   ```

3. **Corrupted installation:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Application Won't Start

**Symptom:** `npm run dev` fails or hangs

**Solutions:**

1. **Port already in use:**
   ```bash
   # On Linux/Mac:
   lsof -ti:3001 | xargs kill
   lsof -ti:5173 | xargs kill

   # On Windows:
   netstat -ano | findstr :3001
   netstat -ano | findstr :5173
   # Then kill the process ID shown
   ```

2. **Dependencies not installed:**
   ```bash
   npm install
   npm run dev
   ```

3. **TypeScript errors:**
   ```bash
   # Check for errors
   npx tsc --noEmit

   # If many errors, try:
   rm -rf node_modules package-lock.json
   npm install
   ```

### IDE Plugin Not Working

**Symptom:** `/ide` shows red X or not detected

**IntelliJ/PyCharm:**
1. Open Settings → Plugins
2. Search for "Claude Code"
3. Install and restart IDE
4. Open terminal INSIDE the IDE
5. Run `claude` and `/ide`

**VSCode:**
1. Open Extensions (Ctrl+Shift+X)
2. Search for "Claude Code"
3. Install official extension
4. Open integrated terminal (Ctrl+`)
5. Run `claude` and `/ide`

### Claude Gives Unhelpful Responses

**Symptom:** Responses are vague, generic, or wrong

**Solutions:**

1. **No CLAUDE.md context:**
   - Complete Exercise 1 first
   - Ensure CLAUDE.md is in project root
   - Restart Claude session

2. **Prompt too vague:**
   ```
   ❌ Bad: "Add a feature"
   ✅ Good: "Add a priority field to Task type in src/types/Task.ts,
           following the same pattern as the status field"
   ```

3. **Too much at once:**
   - Break into smaller steps
   - Do one thing at a time
   - Verify each step before next

4. **Wrong context:**
   ```bash
   # Make sure you're in the right directory
   pwd  # Should show .../task-manager

   # Start new session if needed
   /clear
   ```

### TypeScript Errors

**Symptom:** Red squiggles or compile errors

**Solutions:**

1. **IDE not recognizing changes:**
   - Reload IDE window
   - Restart TypeScript server
   - VSCode: Cmd/Ctrl+Shift+P → "TypeScript: Restart TS Server"

2. **Missing imports:**
   ```bash
   # Check if file exists
   ls src/types/Task.ts

   # Check import paths are correct
   # Should be: import { Task } from '../types/Task'
   # Not: import { Task } from './types/Task'
   ```

3. **Type mismatches:**
   - Read the error message carefully
   - Check what type is expected vs. provided
   - Ask Claude to fix specific type error

### Git Issues

**Symptom:** Can't commit or checkout branches

**Solutions:**

1. **Uncommitted changes:**
   ```bash
   # Stash changes
   git stash

   # Or commit them
   git add .
   git commit -m "WIP: Exercise progress"
   ```

2. **Branch doesn't exist:**
   ```bash
   # Check available branches
   git branch -a

   # Create branch if needed
   git checkout -b my-branch
   ```

### Tests Won't Run

**Symptom:** `npm test` fails or hangs

**Solutions:**

1. **Dependencies not installed:**
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```

2. **Test file has errors:**
   ```bash
   # Check which test file is failing
   npm test -- --reporter=verbose

   # Fix TypeScript errors first
   npx tsc --noEmit
   ```

3. **Vitest not configured:**
   - Check vite.config.ts exists
   - Verify vitest is in devDependencies

### API Requests Failing

**Symptom:** Frontend can't reach backend

**Solutions:**

1. **Backend not running:**
   ```bash
   # Check if server is running
   curl http://localhost:3001/api/tasks

   # If not, start it:
   npm run dev:server
   ```

2. **CORS issues:**
   - Check server/index.ts has `app.use(cors())`
   - Verify vite.config.ts has proxy configuration

3. **Wrong ports:**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001
   - Check package.json scripts

### Claude Session Issues

**Symptom:** Claude seems confused or gives wrong answers

**Solutions:**

1. **Start fresh:**
   ```bash
   /clear  # Clear conversation history
   ```

2. **Provide more context:**
   ```
   I'm working in src/components/TaskList.tsx
   The current code is: [paste relevant code]
   I need to: [specific task]
   ```

3. **Check CLAUDE.md is up to date:**
   - Does it reflect your current codebase?
   - Update it if you've made significant changes

## Exercise-Specific Issues

### Exercise 1: Can't Generate CLAUDE.md

**Issue:** Claude won't create the file

**Solution:**
```
Create a file named CLAUDE.md in the current directory with:
[describe what you want]

Write the file using the Write tool.
```

### Exercise 2: Priority Feature Not Working

**Common issues:**

1. **Type errors:**
   - Check Priority type is exported
   - Verify imports in all files

2. **Filter not working:**
   - Check query parameter syntax: `?priority=high`
   - Verify backend handles priority filter
   - Check console for errors

3. **UI not updating:**
   - Hard refresh browser (Cmd/Ctrl+Shift+R)
   - Check browser console for errors
   - Verify state updates in React DevTools

### Exercise 3: Tests Failing

**Common issues:**

1. **Mocks not working:**
   ```typescript
   // Make sure to mock before importing
   vi.mock('../services/taskService')
   ```

2. **Async test issues:**
   ```typescript
   // Use async/await properly
   test('loads tasks', async () => {
     // ...
     await waitFor(() => {
       expect(screen.getByText('Task 1')).toBeInTheDocument()
     })
   })
   ```

3. **React Testing Library issues:**
   ```bash
   # Ensure setup file exists
   # Create vitest.setup.ts if needed
   ```

## Getting Help

### Self-Service Options

1. **Check the docs:**
   - Official: https://docs.anthropic.com/en/docs/claude-code
   - Internal: research-docs/ folder

2. **Search error messages:**
   - Copy exact error to Google
   - Check Stack Overflow
   - Look at GitHub issues

3. **Ask Claude:**
   ```
   I'm getting this error:
   [paste full error message]

   Context: I was trying to [what you did]

   What's causing this and how do I fix it?
   ```

### Get Human Help

**During workshop:**
- Raise hand / use help signal
- Ask facilitator
- Check with neighbor

**After workshop:**
- Team Slack/Teams channel
- AI tools champions
- Engineering support

## Prevention

### Best Practices

1. **Work incrementally:**
   - Make small changes
   - Test after each change
   - Commit working code

2. **Verify everything:**
   - Don't trust AI blindly
   - Check files exist
   - Test functionality

3. **Keep backup:**
   ```bash
   # Before major changes
   git commit -m "WIP: Before trying X"
   ```

4. **Read error messages:**
   - Don't skip over errors
   - Read carefully
   - Google unknown errors

## Still Stuck?

If you've tried everything:

1. **Take a break** - Fresh eyes help
2. **Start over** from a clean branch:
   ```bash
   git checkout main
   # Or checkout solution branch:
   git checkout exercise-1-complete
   ```
3. **Ask for help** - Don't struggle alone
4. **Document the issue** - Helps improve workshop

## Report Issues

Found a bug in the workshop materials?

1. Note what you were doing
2. Include error messages
3. Share with facilitator or AI tools team
4. Help us make it better!

---

**Remember:** Struggling is part of learning. Don't let technical issues discourage you from the core concepts!
