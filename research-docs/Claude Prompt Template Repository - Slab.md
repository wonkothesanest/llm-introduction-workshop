# AI Prompt Library - Reusable Templates

_A collaborative collection of AI prompts for common development tasks_

See [📊 Reference: Prompt Library](https://omnidian.slab.com/posts/cst2eads)  for background.

Bonus Section (improve all prompts with memories): [Claude Prompt Template Repository](https://omnidian.slab.com/posts/lkdybr0k#h9kku-suggested-claude-memories)

---

## How to Use This Library

1. **Browse** existing prompts by category
1. **Copy** and customize prompts for your specific use case
1. **Contribute** new prompts or improvements using the template below
1. **Discuss** improvements in comments 

---

## Contributing Guidelines

### Adding New Prompts

When adding a new prompt, please include:

- **Category**: e.g. Code Review heading
- **Use Case**: What problem it solves
- **Variables**: What needs to be customized (marked with `[brackets]`)
- **Example**: A real example of the prompt in action
- **Success Tips**: What makes this prompt work well

### Improving Existing Prompts

- Add your improvements as suggested edits
- Include a brief note about what you changed and why
- Test your modifications before suggesting them

---

## Code Analysis & Testing

### Test Case Review

**Use Case**: Identify logical errors or misaligned test cases in unit tests

**Prompt Template**:

V 1.0

```
Do you see any test cases in [filename] inner class [class name] that have logical mistakes or are not testing the scenario outlined in the test case name?

Please analyze:
1. Test method names vs. actual test logic
2. Assertions that don't match the intended behavior
3. Missing edge cases or boundary conditions
4. Inconsistent test data setup
```

**Variables**:

- `[filename]`: Name of code file
- `[class name]`: Specific inner class containing the tests

**Example**:

```
Do you see any test cases in C:\someDir\UserServiceTest.java inner class ValidationTests that have logical mistakes or are not testing the scenario outlined in the test case name?

Please analyze:
1. Test method names vs. actual test logic
2. Assertions that don't match the intended behavior
3. Missing edge cases or boundary conditions
4. Inconsistent test data setup
```

**Success Tips**:

- Be specific about which test methods to focus on to avoid getting too much output
- Optionally include "**only examine changes in this branch vs main**" to do PR reviews
- Follow up with questions about specific assertions if needed

---

### Production Code Review 

**Use Case**: Get structured feedback on code quality and best practices

**Prompt Template**:

V0.1a  (file or class focus)

```
Please review [class] in [filname] for:
1. Code quality and readability
2. Potential bugs or edge cases
3. Performance considerations
4. Best practice adherence
5. Security implications (if applicable)

Focus on: [specific areas of concern]

[CODE BLOCK HERE]
```

**Variables**:

- `[class]`: Class Name or other identifier
- `[filename]`: Name of code file

---

### PR Smoke Test

**Use case**: First pass on a PR review (based on local code branch). Useful for getting the feedback loop started or double-checking first impressions.

V1.0 (Burt - Sep 2025)

```
Please review the changes in this branch vs [parent branch]:
1. Code quality and readability
2. Potential bugs or edge cases
3. Performance considerations
4. Best practice adherence
5. Security implications (if applicable)
```

**Variables:**

- `[parent branch]` : often set to `main`, whatever branch the changes are based on

**Example:**

```
Please review the changes in this branch vs main:
1. Code quality and readability
2. Potential bugs or edge cases
3. Performance considerations
4. Best practice adherence
5. Security implications (if applicable)
```

**Success Tips:**

- 💡Don't automatically sign off if Claude says "Approved" 😊
- Open Claude Code in the root dir of your repo with the PR's branch checked out
    - Pro Tip: IntelliJ `Bit Bucket Pull Requests` plugin makes checking out PR branches faster
    - This step ensures Claude code will use the correct git repo and not need get confused by directory changing (more of a problem if you have multiple copies of repos underneath the current directory)
- It is not always more efficient to use this because you have to review the Claude and the PR. However, if you use the Claude output like a highlighter (like pointing to places to get started in a large PR), it can speed up the feedback loop.
- Claude appears to incorporate Claude.md files in its review, for example, it noted `Proper use of val over var` which is something I told Claude to memorize.

---

## Documentation & Writing

### Technical Writing Review

**Use Case**: Improve clarity and completeness of technical documentation

**Prompt Template**:

V 0.1a

```
Please review this technical documentation for:
1. Clarity and readability for the target audience: [audience]
2. Missing information or steps
3. Inconsistent terminology
4. Areas that need examples or diagrams

[DOCUMENTATION CONTENT HERE]
```

**Variables**:

- `[audience]`: Who will read this (developers, end users, managers, etc.)

---

## Debugging & Troubleshooting

### Error Analysis

**Use Case**: Systematically approach error resolution

**Prompt Template**:

V 0.1a

```
I'm encountering this error: [error message]

Context:
- What I was trying to do: [goal]
- Environment: [OS, language version, frameworks]
- Recent changes: [what changed recently]

Please help me:
1. Understand what this error means
2. Identify likely root causes
3. Suggest debugging steps
4. Recommend fixes in order of likelihood

[RELEVANT CODE/LOGS HERE]
```

---

### Performance Investigation

**Use Case**: Identify performance bottlenecks

**Prompt Template**:

V 0.1a

```
I'm seeing performance issues with [specific operation/feature]:
- Symptom: [what's slow]
- Expected performance: [what should happen]
- Current performance: [metrics if available]
- Load context: [traffic, data volume, etc.]

Please suggest:
1. Likely bottlenecks to investigate
2. Profiling strategies
3. Quick wins for optimization
4. Long-term architectural considerations

[RELEVANT CODE/METRICS HERE]
```

---

## Prompt Templates for Prompt Engineering

### Prompt Optimization

**Use Case**: Improve existing prompts for better results

**Prompt Template**:

V 0.1a

```
Help me improve this prompt for better results:

Current prompt: "[existing prompt]"
Goal: [what I want the AI to do]
Issues: [what's not working well]

Please suggest:
1. Clearer instructions
2. Better structure
3. Missing context that would help
4. Examples that would improve output quality
```

---

## Version History

| Date | Change | Contributor |
| --- | --- | --- |
| [Date] | Initial version created | [Your name] |

---

## Feedback & Suggestions

Have ideas for new prompt categories or improvements to existing ones?

- **Comment** directly on prompts you've used
- **Share examples** of successful variations
- **Request** prompts for common tasks you encounter
- **Report issues** with prompts that didn't work as expected

---

_Remember: The best prompts are specific, provide context, and give the AI clear expectations for the output format and level of detail._

# Suggested Claude Memories

Coming Soon (feel free to contribute!)

Things that may be useful to have your Claude Code memorize. These things may graduate to being included in `claud.md` files that are checked into source control.
