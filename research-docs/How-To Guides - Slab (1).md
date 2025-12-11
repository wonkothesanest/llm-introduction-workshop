_A practical guide for leveraging AI coding assistants effectively_

## Core Philosophy

**YOU lead, AI follows.** Start tasks yourself, let Claude fill gaps. The plan mode of Claude is not to plan actual engineering tasks, but plan execution for the plan created by the engineer.

**For documentation:** Ask AI how features work → Make corrections to generated output → Ask AI to save refined understanding to `claude.md`/README.

**Always verify:** AI hallucinates. Cross-reference outputs with actual code, documentation, and your domain knowledge.

---

## Codebase Analysis

### Analyzing Unfamiliar Repositories

**Process:**

1. **Start with** `**/init**` to generate `CLAUDE.md`
1. **Ask high-level questions first:** "What does this app do?" "What's the architecture?"
1. **Use Task tool for complex analysis** - don't try to understand everything at once
1. **Verify everything** - check file paths, function names, architectural claims

**Effective Prompts:**

```
Analyze this codebase and explain:
1. Main application purpose and business domain
2. Key architectural patterns (MVC, microservices, etc.)
3. Directory structure and component relationships  
4. Technology stack and critical dependencies
5. Entry points and main workflows
```

**Verification Strategy:**

- Cross-reference analysis with actual file contents
- Verify imports and dependencies claims
- Check that described patterns actually exist in code

### Generating Architecture Documentation

**Approach:**

1. **Document what YOU know first** - don't start blank
1. **Ask Claude to fill gaps:** "Based on code structure, document the payment flow"
1. **Request diagrams:** "Create mermaid diagrams for component relationships"
1. **Review and correct** hallucinated components

**Template Request:**

```xml
Create architecture documentation for 
<system_or_module>

</system_or_module>.

Reference existing files: 
<key_files>

</key_files>

Include:
- Component relationships and data flow
- Integration points with 
<external_services>

</external_services>

- Technology decisions and patterns used
- Mermaid diagrams for visual clarity

Base documentation on actual code structure in src/
<relevant_path>

</relevant_path>
```

### Creating Sequence Diagrams

**Process:**

1. **Trace workflow manually first** - understand the basic flow yourself
1. **Identify components** involved in the process
1. **Ask for mermaid generation** with specific components listed
1. **Verify each step exists** in actual codebase

**Sample Prompt:**

```xml
Create a sequence diagram for 
<workflow>

</workflow> in this system.

I've traced these components: 
<components>

</components>

Show flow from 
<start_point>

</start_point> to 

<end_point>

</end_point>.

Reference actual methods in 
<files>

</files> for accuracy.
```

### Understanding Complex Systems

**Strategy:**

- **Break into focused areas** - don't analyze entire system at once
- **Use search for patterns:** "Find all database transaction handling"
- **Ask for specific explanations:** "Explain the caching strategy in module X"
- **Focus on integration points** and data boundaries

**Pattern Analysis Prompt:**

```xml
Analyze how 
<concern>

</concern> is handled across this codebase.

Find patterns in these areas: 
<directories_files>

</directories_files>

Explain:
- Common approaches used
- Variations and why they exist  
- Best practices to follow
- Areas that need improvement
```

---

## Code Generation

### Writing New Features

**Methodology:**

1. **Plan the feature yourself** - design approach, identify integration points
1. **Find similar existing code** to establish patterns
1. **Ask Claude to generate following your design decisions + findings**
1. **Iterate with refinement:** basic functionality → error handling → edge cases

**Template Approach:**

```xml
I need to implement 
<feature>

</feature>.

I've planned the approach and identified these patterns to follow:
- Error handling: Follow pattern in 
<existing_file>

</existing_file>

- Data validation: Use same approach as 
<similar_feature>

</similar_feature>  

- API response format: Match 
<existing_endpoint>

</existing_endpoint>

- Testing: Follow structure in 
<test_file>

</test_file>

Generate 
<component>

</component> that integrates with 

<existing_components>

</existing_components>.

Requirements: 
<business_requirements>

</business_requirements>
```

### Component Scaffolding

**Frontend Components:**

```xml
Create new
<component_type>

</component_type> following pattern in 

<similar_component>

</similar_component>

<styling_framework>

</styling_framework>

<state_management>

</state_management>

<error-handling>

</error-handling>

<loading-states>

</loading-states>

<functionality_requirements>

</functionality_requirements>
```

**Backend Components:**

```xml
Generate new
<service_description>

</service_description>
following pattern in
<existing_service>

</existing_service>.

Match existing:
- Dependency injection approach
- Error handling and logging patterns  
- Transaction management style
- Response formatting

Implement:
<business_logic_requirements>

</business_logic_requirements>
```

### API Endpoint Creation

**Process:**

1. **Review existing endpoints** to understand patterns
1. **Specify exact request/response format**
1. **Reference authentication/validation patterns**
1. **Include testing requirements**

**Template:**

```xml
Create new REST endpoint:[method]/api/[resource]
Follow patterns in
<files>

</files>:
- Authentication middleware usage
- Request validation structure
- Error response format
- OpenAPI spec generation

<request_format>

</request_format>

<response_format>

</response_format>  
Business rules: 
<validation_business_logic>

</validation_business_logic>
```

### Frontend Components (React)

**Best Practice Pattern:**

```xml
Create React component for
<component_purpose>

</component_purpose>.
Reference 
<similar_component_reference>

</similar_component_reference> 

<state_management_approach>

</state_management_approach>

- Error boundary and loading state handling

Props needed:
<props_and_types>

</props_and_types>
Behavior: 
<component_behavior_requirements>

</component_behavior_requirements>
```

---

## Refactoring & Maintenance

### Dependency Upgrades

**Approach:**

1. **Research breaking changes yourself** - read migration guides
1. **Plan upgrade strategy** - identify affected code areas
1. **Ask Claude for mechanical changes:** "Update ESLint configs to new syntax"
1. **Generate validation scripts**

**Process Template:**

```xml
I'm upgrading <dependency_name></dependency_name> from <version_from></version_from> to <version_to></version_to>.
I've reviewed migration guide and identified these breaking changes:
<breaking_changes>

</breaking_changes>

Help me:
1. Update
<config_files>

</config_files> to new format

2. Convert
<existing-patterns>

</existing-patterns>
to new syntax  
3. Update related scripts and tooling
4. Generate validation script to verify migration
```

### Large-Scale Refactoring

**Strategy:**

1. **Start design refactoring yourself**
1. **Use Claude for plan refinement and mechanical transformations**
1. **Break into small, testable steps**
1. **Generate verification scripts**

**Template:**

```xml
I'm refactoring
<system>

</system> to 
<new_pattern>

</new_pattern>.

I've designed the new 
<interface_or_class>

</interface_or_class>: 

<design_details>

</design_details>

Help me:
1. Update all instances in
<specific_directories>

</specific_directories>
2. Replace 
<old_pattern>

</old_pattern> with 
<new_pattern>

</new_pattern>  
3. Ensure backward compatibility during transition
4. Generate migration script to validate changes
```

### Code Modernization

**Process:**

1. **Identify modernization goals** (ES6+, new APIs, etc.)
1. **Update in focused batches** - one pattern at a time
1. **Verify behavior preservation**

**Example:**

```xml
Modernize 
<module>

</module> to use 

<newer_approach>

</newer_approach>.
Current pattern: 
<existing_code>

</existing_code>
Target pattern: 
<desired_modern_pattern>

</desired_modern_pattern>
Update all similar instances while preserving exact behavior.
```

### Performance Optimization

**Methodology:**

1. **Profile and identify bottlenecks yourself**
1. **Ask Claude for specific optimizations**
1. **Implement caching/memoization patterns**
1. **Generate performance tests**

**Template:**

```xml
I've profiled and found performance bottleneck in 
<performance_area>

</performance_area>.

Issue: 
<performance_problem>

</performance_problem>

<current_implementation>

</current_implementation>

Optimize by:
<optimization_strategy>

</optimization_strategy>

- Following caching pattern in
<performant_code_reference>

</performant_code_reference>
- Maintaining exact same behavior and outputs
```

---

## Debugging & Problem Solving

### Analyzing Sentry Errors

**Approach:**

1. **Gather error context yourself** - stack traces, user actions, environment
1. **Ask Claude to interpret complex traces**
1. **Generate debugging strategies**
1. **Implement fixes based on analysis**

**Template:**

```xml
Analyzing Sentry error:
<sentry_error>

</sentry_error>

Context I've gathered:
- User action:
<user_action>

</user_action>

- Environment:
<environment_details>

</environment_details>

- Frequency:
<error_frequency>

</error_frequency>

- Related code:
<relevant_file_paths>

</relevant_file_paths>

Help me:
1. Identify likely root cause
2. Suggest additional logging for better context
3. Propose fix that handles this edge case
4. Add prevention for similar issues
```

### Log Analysis Techniques

**Process:**

- **Feed specific log excerpts** - not entire files
- **Ask for pattern identification**
- **Generate parsing/filtering commands**
- **Create monitoring queries**

**Example:**

```xml
Analyze these log patterns:
<log_excerpts>

</log_excerpts>
Time period:
<timeframe>

</timeframe>
Context:
<context_details>

</context_details>

Identify:
- Error patterns and correlations
- Performance trends
- Anomalous behavior
- Suggested monitoring alerts
```

### Finding Performance Bottlenecks

**Strategy:**

1. **Use profiling tools yourself** first
1. **Ask Claude to analyze specific slow areas**
1. **Generate optimization strategies**
1. **Implement performance monitoring**

**Template:**

```xml
Performance analysis for
<component_or_query>

</component_or_query>.

Profiling data shows:
<performance_metrics>

</performance_metrics>

Current implementation:
<current_implementation_code>

</current_implementation_code>

Suggest optimizations for:
- <bottleneck>

</bottleneck>
- <bottleneck>

</bottleneck>
Include monitoring setup to track improvements.
```

### Root Cause Analysis

**Methodology:**

1. **Collect evidence yourself** - symptoms, timeline, changes
1. **Ask Claude to connect patterns**
1. **Generate investigation hypotheses**
1. **Create testing strategies**

**Template:**

```xml
Investigating issue:
<problem_description>

</problem_description>

Evidence collected:
<observed_symptoms>

</observed_symptoms>

<issue_timeline>

</issue_timeline>

<recent_changes>

</recent_changes>

<environmental_factors>

</environmental_factors>

Help me:
1. Identify potential root causes
2. Suggest additional investigation steps
3. Generate hypotheses to test
4. Create monitoring to prevent recurrence
```

---

## Documentation Generation

### README Automation

**Process:**

1. **Create README structure yourself** - decide sections needed
1. **Ask Claude to fill specific sections**
1. **Iterate with corrections**

**Template:**

```xml
Generate README content for this project.
Required sections:
<required_sections>

</required_sections>

Based on codebase analysis, include:
- Installation from
<package_file>

</package_file>

- Available scripts and their purposes
- API documentation from
<controller_files>

</controller_files>

- Development workflow from
<existing_documentation>

</existing_documentation>

Follow this outline:
<outline>

</outline>
```

### API Documentation

**Approach:**

1. **Define documentation standard** (OpenAPI, etc.)
1. **Ask Claude to extract from code**
1. **Review for hallucinated endpoints**

**Template:**

```xml
Generate API documentation for endpoints in
<controller_files>

</controller_files>.

Format:
<documentation_format>

</documentation_format>

Include:
- Request/response schemas with examples
- Authentication requirements  
- Error response formats
- Rate limiting and versioning info

Extract actual endpoint definitions from:
<endpoint_files>

</endpoint_files>
```

### Code Comments and JSDoc

**Best Practice:**

- **Only ask for comments when needed** for complex business logic
- **Focus on "why" not "what"**
- **Document edge cases and business rules**

**Template:**

```xml
Add JSDoc to
<specific_functions>

</specific_functions> in 

<file_name>

</file_name>.

Focus on:
- Business logic explanation (the "why")
- Parameter validation requirements
- Error conditions and edge cases
- Integration points with
<other_systems>

</other_systems>

Skip obvious functionality - document only complex business rules.
```

### Technical Specifications

**Strategy:**

1. **Create specification outline yourself**
1. **Ask Claude to fill technical details**
1. **Maintain consistency across docs**

**Template:**

```xml
Create technical specification for
<system_or_feature>

</system_or_feature>.

I've outlined these sections:
<section_outline>

</section_outline>

Based on code in
<relevant_directories>

</relevant_directories>

document:
- Architecture decisions and rationale
- Integration patterns and data flow
- Performance and scalability considerations
- Security and compliance requirements
```

---

## Working with Tests

### Why Test Generation Is Challenging

**Critical Issues:**

- **AI misses business logic edge cases** that are critical to test
- **High coverage ≠ high value** - tests implementation details vs. behavior
- **AI hallucinates testing methods** that don't exist
- **Generated tests often too complex** compared to focused human tests

### Effective Test Prompting Strategies

**Best Approaches:**

1. **Provide existing test examples** for pattern matching
1. **Specify exact scenarios** - don't ask for "comprehensive tests"
1. **Focus on specific test types:** unit/integration/edge cases
1. **Review carefully** for business logic correctness

**Template:**

```xml
Write unit tests for
<specific_function>

</specific_function>in

<test_file>

</test_file>.

Follow testing pattern in
<existing_test_file>

</existing_test_file>.

Test these exact scenarios:
- <scenario_1>

</scenario_1>
- <scenario_2>

</scenario_2>  
- <edge_case_1>

</edge_case_1>
- <error_condition_1>

</error_condition_1>

Use same assertion style and test structure as existing tests.
```

### Validating Generated Tests

**Verification Checklist:**

1. **Run tests** - ensure they execute
1. **Test the tests** - verify they fail when they should
1. **Check business requirements** - not just code coverage
1. **Verify behavior testing** - not implementation details
1. **Look for missing edge cases** AI commonly overlooks

### When to Write Tests Manually

**Manual Testing Scenarios:**

- **Complex business logic** with many domain-specific edge cases
- **Security-sensitive functionality** (auth, validation, payments)
- **Integration tests** requiring specific setup/teardown
- **Performance/load testing**
- **Regulatory compliance** testing

**Use AI for Tests When:**

- **Simple utility functions** with clear inputs/outputs
- **Boilerplate validation** with standard patterns
- **Regression tests** for specific bug scenarios (when you provide the case)
- **Converting manual test cases** to automated tests

**Hybrid Approach:**

1. **Write 1-2 tests manually** to establish pattern
1. **Ask Claude to generate similar tests** for related functions
1. **Review and enhance** with business-specific scenarios
1. **Validate all tests** actually test business requirements

---

## Quick Reference: Effective Prompting Patterns

### Structure Template

```xml
Context:
<analysis_and_planning>

</analysis_and_planning>

Task:
<specific_task>

</specific_task>

Constraints:
<constraints>

</constraints>

Requirements:
<requirements>

</requirements>

Verification:
<verification_method>

</verification_method>
```

### Verification Questions

- Does this match existing patterns in the codebase?
- Are all referenced files/methods real?
- Does this handle the edge cases I know about?
- Will this integrate properly with <existing_systems>

</existing_systems>?- Does this follow our established conventions?

### Red Flags

- Claude suggests patterns that don't exist in your codebase
- Generated code uses libraries not in your dependencies
- Solutions seem overly complex for the problem
- Tests achieve coverage but don't test business logic
- Documentation describes features that don't exist

---

**Remember:** You're the engineer. Claude is a powerful assistant, not a replacement for engineering judgment. Lead with your domain knowledge, verify everything, and use AI to accelerate the work you've already planned.
