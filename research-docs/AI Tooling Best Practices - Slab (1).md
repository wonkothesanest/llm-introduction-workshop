This guide provides practical recommendations for engineers using AI coding tools, particularly Claude Code. It covers essential practices for the complete AI-assisted development workflow, from writing effective prompts to maintaining code quality through proper review processes.

**Key areas covered:**

- **Prompt Engineering:** Structuring requests, providing context, and refining outputs for better code quality
- **Code Review & Validation:** Human oversight practices to catch AI errors, security issues, and performance problems
- **Workflow Integration:** Adapting development processes, git practices, and team collaboration for AI tools
- **Avoiding Pitfalls:** Recognizing AI limitations like hallucinations, code pollution, and inadequate testing

Each section combines industry best practices with team-specific insights from real-world Claude Code usage.

_This doc branches from the Best Practices section referenced_ [_here_](https://docs.google.com/document/d/1_YF_M2GPjjARrPyjBZdKKNHrXpxVgV6W4Cg2nJCfN04)_._

## Prompt Engineering

_Clear, specific prompts with relevant context produce better code that aligns with your project requirements._

**Industry Do's and Don'ts:**

- ✅ **DO:** Provide code snippets and error messages for context when debugging
- ✅ **DO:** Use iterative refinement - start broad, then add specific constraints
- ✅ **DO:** Reference existing files and functions when building related functionality
- ✅ **DO:** Try the Anthropic prompt generator to help structure effective prompts
- ❌ **DON'T:** Use vague prompts like "make this better" without specifying what needs improvement
- ❌ **DON'T:** Assume the AI understands your project's coding standards without examples
- ❌ **DON'T:** Submit prompts without relevant context about your existing codebase

**Examples:**

- ✅ **Good:** "Add error handling to the `processPayment()` function in `payment.js`. Handle network timeouts, invalid card errors, and insufficient funds. Follow the error pattern used in `validation.js`."
- ❌ **Bad:** "Fix the payment function."

**Our Team's Insights:**

- Tell the AI what to do and what not to do (change this file, add 1-3 test cases covering XYZ)
- Remember the AI Usage guidelines, don't put in sensitive info if you don't need to

_Do's and Don'ts:_

- ✅ **DO:** Use precise language
- ✅ **DO:** Start over if simple tasks are taking a long time or are producing unexpected results
- ❌ **DON'T:** Use AI if it is taking longer than doing the work manually

---

### Effective Prompt Templates

_Standardized prompt structures ensure consistent, high-quality outputs across your team._

**Industry Do's and Don'ts:**

- ✅ **DO:** Structure prompts with role, task, context, and expected output format
- ✅ **DO:** Create reusable templates with placeholders for similar tasks
- ✅ **DO:** Include examples of desired output style and format
- ❌ **DON'T:** Create overly rigid templates that can't adapt to different contexts
- ❌ **DON'T:** Skip defining the output format - be specific about code structure expected
- ❌ **DON'T:** Use the same generic prompt for vastly different coding tasks

**Examples:**

- ✅ **Good:** "Create a React component for `{COMPONENT_NAME}` that accepts `{PROPS}` and renders `{DESCRIPTION}`. Follow our existing component pattern from `Button.jsx` with TypeScript interfaces and styled-components."
- ❌ **Bad:** "Make a component" (used for every component request regardless of complexity)

### Task-Specific Prompting Strategies

_Different coding tasks require tailored prompting approaches for optimal results._

**Industry Do's and Don'ts:**

- ✅ **DO:** Use step-by-step reasoning prompts for complex algorithms
- ✅ **DO:** Specify architectural patterns and design constraints upfront
- ✅ **DO:** Request "chain-of-thought" explanations for debugging scenarios
- ❌ **DON'T:** Use the same prompting style for refactoring vs. greenfield development
- ❌ **DON'T:** Skip mentioning performance or security requirements when relevant
- ❌ **DON'T:** Assume AI will follow your team's specific patterns without guidance

**Examples:**

- ✅ **Good:** "Debug this authentication middleware. Walk me through each step: 1) token validation, 2) user lookup, 3) permission check. Here's the error: `TypeError: Cannot read property 'role' of undefined at line 23`"
- ❌ **Bad:** "This auth code isn't working, fix it." (same prompt used for debugging, refactoring, and new feature development)

### Context Optimization Techniques

_Providing the right amount of relevant context improves AI accuracy and reduces revision cycles._

**Industry Do's and Don'ts:**

- ✅ **DO:** Include relevant existing code, interfaces, and data structures
- ✅ **DO:** Reference previous AI outputs when building on earlier work
- ✅ **DO:** Provide error messages and stack traces for debugging tasks
- ❌ **DON'T:** Overwhelm prompts with irrelevant code or documentation
- ❌ **DON'T:** Assume AI can infer missing critical information about your system
- ❌ **DON'T:** Include sensitive data like API keys or production credentials

**Examples:**

- ✅ **Good:** "Add validation to this user registration endpoint. Here's the existing User model schema and the current validation helper from `validators/user.js`. The endpoint should return errors matching our API error format from `types/api.ts`"
- ❌ **Bad:** "Add validation to user registration" (with no context) or including the entire 500-line user service file when only the schema is relevant

**Our Team's Insights:**

- Tell AI which files to touch, "only modify test code in file X without changing existing scenarios or production code"

### Iterative Improvement Patterns

_Successful AI-assisted development requires multiple rounds of refinement based on feedback._

**Industry Do's and Don'ts:**

- ✅ **DO:** Test initial outputs and provide specific feedback for improvements
- ✅ **DO:** Use a generate-test-refine cycle for complex implementations
- ✅ **DO:** Ask for multiple approaches when the first solution isn't optimal
- ❌ **DON'T:** Expect perfect results on the first attempt
- ❌ **DON'T:** Accept outputs that "mostly work" without addressing edge cases
- ❌ **DON'T:** Skip testing between iterations - validate before refining

**Examples:**

- ✅ **Good:** "The sorting algorithm works but is O(n²). Can you optimize it for large datasets? Also, it doesn't handle null values correctly - see test failure on line 15."
- ❌ **Bad:** Accepting the first algorithm that passes basic tests without performance testing or edge case validation

---

## Code Review & Validation

_AI-generated code requires systematic human review to catch errors AI commonly misses._

**Industry Do's and Don'ts:**

- ✅ **DO:** Treat AI code as a first draft requiring human review
- ✅ **DO:** Run your full test suite and add missing test cases
- ✅ **DO:** Validate against your team's coding standards and architectural patterns
- ❌ **DON'T:** Deploy AI-generated code without human review
- ❌ **DON'T:** Skip testing edge cases that AI might have missed
- ❌ **DON'T:** Assume AI follows your organization's specific patterns

**Examples:**

- ✅ **Good:** AI generates a database query function → Run tests → Add edge case tests → Review for SQL injection → Check against team's ORM patterns → Approve
- ❌ **Bad:** AI generates code → Looks syntactically correct → Deploy immediately

**Our Team's Insights:**

- There are business scenarios we want to protect against future regression
- It probably won't test business scenarios on its own (you must tell it)

_Do's and Don'ts:_

- ✅ **DO:** Look closely at AI test code for hallucinations (e.g. tests that pass but don't actually provide meaningful coverage)
- ❌ **DON'T:** Don't equate code coverage with correctness of generated tests (e.g. may be inefficient or not test important business scenarios)

---

### Verifying AI-Generated Code

_Thorough verification catches logic errors and ensures code meets your requirements._

**Industry Do's and Don'ts:**

- ✅ **DO:** Walk through the logic step-by-step, especially for complex algorithms
- ✅ **DO:** Cross-reference API usage with official documentation
- ✅ **DO:** Test with edge cases and error conditions AI might miss
- ❌ **DON'T:** Assume AI-generated code handles all error conditions properly
- ❌ **DON'T:** Trust unfamiliar APIs or methods without verification
- ❌ **DON'T:** Skip manual testing because the code "looks correct"

**Examples:**

- ✅ **Good:** AI suggests using `Array.prototype.at(-1)` → Check MDN docs → Verify browser support → Test with empty arrays
- ❌ **Bad:** AI uses an unfamiliar method → Code looks reasonable → Ship without checking if the method exists

**Our Team's Insights:**

- Following existing code patterns and practices (AI may introduce new pattern unnecessarily)

### Security Considerations

_AI often misses subtle security issues that require human expertise to catch._

**Industry Do's and Don'ts:**

- ✅ **DO:** Run security scans on all AI-generated authentication/authorization code
- ✅ **DO:** Manually review data validation and sanitization logic
- ✅ **DO:** Have security-experienced engineers review sensitive components
- ❌ **DON'T:** Trust AI with cryptography, authentication, or data validation without expert review
- ❌ **DON'T:** Skip penetration testing for AI-generated security-related code
- ❌ **DON'T:** Assume AI understands your organization's security requirements

**Examples:**

- ✅ **Good:** AI generates password hashing → Security engineer reviews salt generation and algorithm choice → Penetration test auth flow → Approve
- ❌ **Bad:** AI generates JWT authentication middleware → Looks like it handles tokens correctly → Deploy without security review

**Our Team's Insights:**

_Do's and Don'ts:_

- ✅ **DO:** Use /security-review
- ❌ **DON'T:** Let /security-review do all the security review, include stakeholders and area experts in review

### Performance Validation

_AI-generated algorithms often work correctly but perform poorly at scale._

**Industry Do's and Don'ts:**

- ✅ **DO:** Profile memory usage and CPU performance of AI-generated algorithms
- ✅ **DO:** Benchmark against known optimal solutions when available
- ✅ **DO:** Load test with realistic data volumes and concurrent users
- ❌ **DON'T:** Trust AI claims about algorithmic complexity without verification
- ❌ **DON'T:** Skip performance testing because the algorithm "looks efficient"
- ❌ **DON'T:** Assume AI optimizes for your specific performance requirements

**Examples:**

- ✅ **Good:** AI generates search algorithm claiming O(log n) → Profile with 1M records → Compare against existing implementation → Measure actual vs. claimed performance
- ❌ **Bad:** AI claims "this optimized algorithm is much faster" → Deploy without benchmarking because it sounds convincing

### Testing Strategies

_Comprehensive testing reveals gaps in AI-generated logic and error handling._

**Industry Do's and Don'ts:**

- ✅ **DO:** Write additional tests for edge cases AI likely missed
- ✅ **DO:** Use property-based testing to discover unexpected behaviors
- ✅ **DO:** Test integration points and error handling thoroughly
- ❌ **DON'T:** Rely solely on AI-generated tests - they miss business logic nuances
- ❌ **DON'T:** Accept tests that only cover the "happy path"
- ❌ **DON'T:** Skip integration testing because unit tests pass

**Examples:**

- ✅ **Good:** AI generates function + basic tests → Add tests for null inputs, boundary conditions, concurrent access → Test actual API integration
- ❌ **Bad:** AI generates 20 tests → All pass → Assume comprehensive coverage without reviewing test scenarios

**Our Team's Insights:**

- Tell Claude to follow unit test format in file X or it will struggle to follow our formats. Tests also tend to not be well-factored with unnecessary comments.
- Telling Claude up front to produce well-factored, formatted test code often works better than fixing it after-the-fact (Claude can get overwhelmed and make mistakes that eat up a lot of time)
- Generating tests for production code can be a good learning tool.

_Do's and Don'ts:_

- ✅ **DO:** Hand-write tests if the AI is struggling, some modules are too difficult for it to cover succinctly.
- ❌ **DON'T:** Rely solely on generated tests without reviewing them

---

## Workflow Integration

_Integrating AI tools requires adapting your development process while maintaining quality standards._

**Industry Do's and Don'ts:**

- ✅ **DO:** Establish clear guidelines for when and how to use AI assistance
- ✅ **DO:** Maintain your existing code review and quality gates
- ✅ **DO:** Train team members on effective AI tool usage
- ❌ **DON'T:** Let AI tools bypass your established development processes
- ❌ **DON'T:** Allow inconsistent AI usage across team members
- ❌ **DON'T:** Skip training - poor AI usage creates more problems than solutions

**Examples:**

- ✅ **Good:** "Use AI for boilerplate generation and initial implementations, but all code must pass through our standard PR review process with security and performance checks"
- ❌ **Bad:** Developers use different AI tools inconsistently, some bypass code review "because AI generated it," creating a patchwork of incompatible code styles

**Our Team's Insights:**

- Start slow: wait to turn on the "Accept Changes" until you are more familiar with what the tool is good at (it can start deleting things or making random changes)

---

### Agentic Workflows Setup

_Autonomous AI agents require careful configuration and monitoring to prevent issues._

**Industry Do's and Don'ts:**

- ✅ **DO:** Set specific permissions and guardrails for AI agents
- ✅ **DO:** Implement comprehensive logging and monitoring of agent actions
- ✅ **DO:** Establish clear rollback procedures for problematic changes
- ❌ **DON'T:** Give AI agents broad permissions or unclear objectives
- ❌ **DON'T:** Run agents without human oversight in production environments
- ❌ **DON'T:** Skip monitoring - agents can make unexpected decisions

**Examples:**

- ✅ **Good:** AI agent limited to creating feature branches, generating tests, and opening draft PRs with detailed logs of all actions and human approval required for merging
- ❌ **Bad:** AI agent with write access to main branch and vague instruction to "improve code quality" running unsupervised overnight

**Our Team's Insights:**

_Do's and Don'ts:_

- ✅ **DO:** Tell Claude which tests to run to verify its changes if you are looping

### Git Workflow Integration

_We should not blindly check in AI-generated code: you are still the owner of code you check in. To protect your code from AI mishaps, isolate AI's work from your own via git commits and branches._

**Industry Do's and Don'ts:**

- ✅ **DO:** Use feature branches for AI-generated code with clear commit messages
- ✅ **DO:** Tag commits with AI assistance indicators for better tracking
- ✅ **DO:** Require human review before merging AI-generated changes
- ❌ **DON'T:** Commit AI-generated code directly to main branches
- ❌ **DON'T:** Mix AI and human changes in commits without clear attribution
- ❌ **DON'T:** Skip documenting which parts were AI-assisted

**Examples:**

- ✅ **Good:** `git commit -m "feat: add user validation logic [AI-assisted]" --co-authored-by="Claude Code <ai@anthropic.com>"`
- ❌ **Bad:** `git commit -m "stuff"` with mixed AI and human changes, or committing AI code directly to main branch

**Our Team's Insights:**

_Do's and Don'ts:_

- ✅ **DO:** Git commit your changes before AI starts modification
- ✅ **DO:** Incrementally commit satisfactory AI code so the AI doesn't undo its progress
- ✅ **DO:** Include area experts on code reviews if you are unfamiliar with the area (also question if the expert team should take the task)

### PR Review Processes

_AI-generated code requires enhanced review focusing on areas where AI commonly fails._

**Industry Do's and Don'ts:**

- ✅ **DO:** Focus reviews on business logic, architecture, and maintainability
- ✅ **DO:** Use automated tools to flag AI-generated sections for extra scrutiny
- ✅ **DO:** Require reviewers to understand and validate the logic, not just syntax
- ❌ **DON'T:** Rubber-stamp AI-generated PRs without thorough review
- ❌ **DON'T:** Focus only on syntax errors - AI rarely makes those
- ❌ **DON'T:** Skip architectural review because the code "works"

**Examples:**

- ✅ **Good:** PR review focuses on "Does this caching strategy fit our architecture? Are we handling race conditions properly? Does this scale with our data model?"
- ❌ **Bad:** PR review: "Code looks clean, tests pass" without understanding what the algorithm actually does or how it fits the broader system

**Our Team's Insights:**

_Do's and Don'ts:_

- ✅ **DO:** Ask Claude to compare the current branch to main to ask about specific changes
- ❌ **DON'T:** Rely solely on Claude to do a PR review, it can miss important business scenarios

### Team Collaboration Patterns

_Effective AI tool adoption requires coordination and knowledge sharing across your team._

**Industry Do's and Don'ts:**

- ✅ **DO:** Create shared prompt libraries and configuration templates
- ✅ **DO:** Hold regular sessions to share AI tool discoveries and limitations
- ✅ **DO:** Establish consistent patterns for AI tool usage across projects
- ❌ **DON'T:** Let team members work in isolation with different AI approaches
- ❌ **DON'T:** Skip knowledge sharing - AI tool effectiveness improves with experience
- ❌ **DON'T:** Assume all team members will naturally use AI tools effectively

**Examples:**

- ✅ **Good:** Weekly "AI wins and fails" meeting where team shares effective prompts, discusses limitations found, and updates shared prompt library
- ❌ **Bad:** Each developer discovers AI limitations independently, recreating the same mistakes and missing opportunities to learn from others' successes

**Our Team's Insights:**

_Do's and Don'ts:_

- ✅ **DO:** Investigate sharing knowledge via checked in Claude.md

---

## Avoiding Pitfalls

_Understanding common AI limitations helps prevent costly mistakes in production._

**Industry Do's and Don'ts:**

- ✅ **DO:** Maintain healthy skepticism and validate AI outputs against documentation
- ✅ **DO:** Implement systematic checks for common AI errors
- ✅ **DO:** Keep humans in the loop for critical decisions
- ❌ **DON'T:** Become overconfident in AI capabilities
- ❌ **DON'T:** Skip validation steps to save time
- ❌ **DON'T:** Ignore subtle errors that compound over time

**Examples:**

- ✅ **Good:** AI suggests a complex regex → Test with multiple input examples → Verify against regex documentation → Consider edge cases
- ❌ **Bad:** AI generates elegant-looking solution → Seems reasonable → Deploy without testing because "AI is usually right"

---

### Recognizing Hallucinations

_AI frequently invents non-existent APIs, methods, and configuration options._

**Industry Do's and Don'ts:**

- ✅ **DO:** Cross-reference all AI-suggested APIs with official documentation
- ✅ **DO:** Be extra cautious with newer frameworks or recent library versions
- ✅ **DO:** Test unfamiliar functions in isolation before integrating
- ❌ **DON'T:** Trust AI suggestions for cutting-edge or niche technologies
- ❌ **DON'T:** Assume method signatures are correct without verification
- ❌ **DON'T:** Skip documentation checks to save time

**Examples:**

- ✅ **Good:** AI suggests `React.useImperativeHandle()` → Check React docs → Understand when to use vs. alternatives → Test in isolation
- ❌ **Bad:** AI suggests `Array.prototype.groupBy()` → Looks useful → Use in production → Discover it doesn't exist in target browsers

### Preventing "Code Pollution"

_Inconsistent AI-generated code patterns degrade codebase maintainability over time._

**Industry Do's and Don'ts:**

- ✅ **DO:** Regularly refactor AI code to match your existing patterns
- ✅ **DO:** Set up linting rules to catch AI-generated anti-patterns
- ✅ **DO:** Establish coding standards that AI tools should follow
- ❌ **DON'T:** Accumulate inconsistent AI code without periodic cleanup
- ❌ **DON'T:** Allow different coding styles in AI vs. human-written code
- ❌ **DON'T:** Skip refactoring because "it works"

**Examples:**

- ✅ **Good:** Monthly refactoring sprint to consolidate AI-generated utility functions, standardize error handling patterns, and align with team conventions
- ❌ **Bad:** Codebase has 5 different ways to handle API errors because different AI sessions generated different patterns and no one consolidated them

### Test Generation Warnings

_AI-generated tests often miss critical scenarios and business logic edge cases._

**Industry Do's and Don'ts:**

- ✅ **DO:** Review AI tests for realistic scenarios and proper assertions
- ✅ **DO:** Add tests for business logic edge cases AI likely missed
- ✅ **DO:** Verify tests actually validate intended behavior, not just implementation
- ❌ **DON'T:** Accept AI tests as comprehensive without review
- ❌ **DON'T:** Trust tests that only verify "happy path" scenarios
- ❌ **DON'T:** Skip manual test case analysis because AI generated many tests

**Examples:**

- ✅ **Good:** AI generates 10 tests for payment processing → Add tests for network failures, invalid currencies, concurrent transactions, rate limiting
- ❌ **Bad:** AI generates 15 tests, all pass → Assume good coverage → Miss that all tests use the same valid input patterns and none test error conditions

### Configuration Accuracy

_AI-generated configuration files frequently contain environment-specific errors and security issues._

**Industry Do's and Don'ts:**

- ✅ **DO:** Validate all configuration files against your environment requirements
- ✅ **DO:** Use infrastructure-as-code validation tools before deployment
- ✅ **DO:** Test configurations in staging environments first
- ❌ **DON'T:** Deploy AI-generated infrastructure configs without manual review
- ❌ **DON'T:** Assume AI understands your specific environment constraints
- ❌ **DON'T:** Skip security reviews of generated deployment configurations

**Examples:**

- ✅ **Good:** AI generates Docker config → Validate base image security → Check resource limits → Test in staging → Review secrets handling
- ❌ **Bad:** AI generates Kubernetes deployment YAML → Looks reasonable → Deploy to production → Discover it uses deprecated APIs and insecure defaults

---

## Appendix

### Useful Commands

- **/INIT** in a new repo can make Claude Code more efficient, generates Claude.md (we may check these in at some point)
- **/COST** see how much cost your current session incurred
- **/CLEAR** when starting new conversation
- **/MODEL** Opus costs 5x more than Sonnet, Sonnet (default) is very good
- **#** (memorize command), e.g. "always run Lint after finishing changes on a file and don't run lint on any unchanged files"
- **/PERMISSIONS** (e.g. always allow "find")

### Integrations

- **Git** (enabled by default, can commit, branch, check-out etc)
- **Database** (could be enabled, should be read only)
- **BitBucket** (not enabled, but can inspect local branches from PRs)
- **Slack** (not enabled, but could be nice)
- **Gmail** (available in Claude.ai → Claude Code → Connectors)
- **Claude Hooks** (custom commands, use with care)
