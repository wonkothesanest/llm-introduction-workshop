This section is designed to help you move beyond treating Claude Code like a typical chatbot and start using it as a coding tool.

The key difference? Claude Code is an **agent**, not just a language model. It has tools, can read your files, and can execute commands. Prompting it effectively means you're not just asking a question; you're issuing a command and directing a workflow.

Here are some core principles to keep in mind:

- **You are still the engineer.** Standard development best practices are as important as ever. You are responsible for understanding the problem, verifying the AI's output, and ensuring the code meets Omnidian's quality standards. Treat Claude's output as a first draft that requires your expert review.
- **Natural language is the syntax, but your logic must be precise.** While you use plain English, your prompts must be specific and contain all the logic necessary to complete the task. Language models excel at pattern matching, not abstract reasoning. Therefore, you should always provide clear patterns, examples, and relevant context in your prompts.

This document is specific to Anthropic's Claude models. Since every AI interface and API is designed differently, the guidelines mentioned here may not be effective for other models, such as Gemini or ChatGPT.

# Core Prompting Techniques

## Be Clear, Direct, and Specific

Vague prompts lead to vague answers. Be explicit about what you want.

- **Instead of:** "Make this better."
- **Use:** "Refactor this function to be more efficient by reducing its time complexity. Explain the changes you made."

## Provide Examples (Zero, One, & Few-Shot Prompting)

Providing examples is one of the most effective ways to guide the model.

- **Zero-Shot:** Giving an instruction with no examples (e.g., "Summarize this article.").
- **One-Shot:** Providing a single example for the model to follow (e.g., "Write a test for this function in the same style as `myTests.kt`.").
- **Few-Shot (N-Shot):** Providing multiple (2-5) examples to ensure the output matches a specific pattern.

## Structure Prompts with XML Tags

Use XML tags to provide clear, unambiguous structure, especially when your request has multiple parts. While Claude doesn't have a required list of tags, it's trained to recognize and respect the structure they create.

- **Common Tags:** `<instructions>`, `<context>`, `<code>`, `<document>`, `<examples>`, `<requirements>`.

**Example of a few-shot prompt using XML tags:**

```
# Use command `claude` to enter interactive mode
# or `claude "{message prompt here}"`
<instructions>
Categorize the customer feedback based on the examples provided.
</instructions>

<examples>
  <example>
    <input>The new dashboard is slow and confusing.</input>
    <output>UI/UX, Performance</output>
  </example>
  <example>
    <input>I wish I could export my data to a CSV file.</input>
    <output>Feature Request</output>
  </example>
</examples>

<context>
[...new customer feedback to categorize...]
</context>
```

## Establishing Guardrails and Persistent Rules

To ensure Claude adheres to critical, non-negotiable requirements, you can establish **guardrails**. These are special instructions designed to stand out from the rest of the prompt and act as persistent rules for the AI to follow throughout the task.

Here are a few effective methods:

### Use Strong, Authoritative Language

Using keywords in all caps signals a high-priority instruction that should not be overlooked.

**Example:**

```
IMPORTANT: You MUST follow the existing data fetching patterns in 
api/AssetQueries.ts. Do not introduce new data fetching libraries.
```

### Use Dedicated XML Tags

Wrapping your core rules in a specific tag like `<persistent_rules>` or `<guardrails>` helps the model treat them as overarching constraints for the entire task.

**Example:**

```
<persistent_rules>
- All new components must include a corresponding `.test.tsx` file.
- All styling must be done using Tailwind CSS utility classes, not custom CSS.
</persistent_rules>

<instructions>
Now, create a new button component named 'CancelButton.tsx'...
</instructions>
```

## Assign a Role or Persona

Assigning a role or persona to Claude can improve the tone, focus, and accuracy of its response. While not always necessary, this technique is very helpful when you want Claude to adopt a specific point of view, such as a security expert, a QA tester, or a junior developer learning the codebase.

This is best done with the `<system>` tag in the project MD file or as the first line in an interactive session.

> You are an expert security engineer. Review the following Python code for potential vulnerabilities.

More System and User Message examples can be found here: [https://docs.anthropic.com/en/resources/prompt-library/website-wizard](https://docs.anthropic.com/en/resources/prompt-library/website-wizard)

## Orchestrating Complex Tasks

Break down large requests into a numbered list to guide the workflow. For complex tasks, instruct Claude to reason through the problem before giving the final answer. This leads to more robust and accurate results. You can also use Claude's "plan mode" to help generate this list.

```
Implement comprehensive error boundary handling across the React application:
1. First, analyze the current error handling patterns in the codebase.
2. Create a standardized error boundary component.
3. Add error tracking integration with our existing Sentry setup.
4. Update all feature pages to use the new error boundary.
5. Write unit tests and run the test suite to fix any failures.
```

- Include the phrase "Think step-by-step" if you want to see more verbose output.
- For even more complex tasks, you can ask it to put its reasoning in a specific XML block:

```
<instructions>
Solve this logic puzzle, and put your step-by-step reasoning 
inside <thinking> tags before giving the final answer.
</instructions>
```

## The Power of Context: `CLAUDE.md`

A well-maintained `CLAUDE.md` file is the most effective way to improve Claude’s accuracy. It acts as the AI's knowledge base for your project, making it the perfect place to establish guardrails and other critical instructions using markdown or XML tags for organization. For more details, refer to Anthropic's [official best practices](https://www.anthropic.com/engineering/claude-code-best-practices).

### Multi-Repo, High-Level CLAUDE.md Example:

```
# Omnidian Platform - Claude Code Context

## Architecture Overview
Omnidian's platform monitors and manages solar energy assets through a microservices architecture:

### Core Services
- **client-portal**: Customer-facing React/TypeScript frontend + Spring Boot API
- **ingestion-api**: Data ingestion from solar monitoring platforms (Tesla, SolarEdge, Enphase, etc.)
- **stream**: Real-time event processing and issue detection
- **data-services**: Core data APIs and metadata management
- **databricks-etl**: Python data pipelines for analytics and reporting

### Shared Libraries
- **core/**: Shared Java utilities (retry, messaging, database, etc.)
- **infrastructure-cluster/**: Kubernetes deployment configurations

## Technology Stack
- **Frontend**: React 18, TypeScript, TanStack Query, Tailwind CSS, Vite
- **Backend**: Java 17, Spring Boot 3, Maven
- **Data**: Python 3.10+, Databricks, Apache Spark
- **Infrastructure**: Kubernetes, Docker, AWS
- **Testing**: Vitest (frontend), JUnit (backend), Storybook

## Development Commands
- **Frontend**: `pnpm dev`, `pnpm test`, `pnpm build`, `pnpm lint`
- **Backend**: `mvn spring-boot:run`, `mvn test`, `mvn clean install`
- **Python**: `poetry install`, `poetry run pytest`, `databricks bundle deploy`

## Common Patterns
- Use existing retry patterns from `core/retry/` for external API calls
- Follow component patterns in `client-portal/frontend/src/components/core/`
- Use TanStack Query for all data fetching in React components
- Solar asset data follows AssetId -> Site -> Portfolio hierarchy
- All services use structured logging and monitoring via Kubernetes

## Domain Knowledge
- **Solar Assets**: Physical solar installations with inverters, panels, and monitoring equipment
- **Ingestion**: Regular data collection from third-party monitoring platforms
- **Issues**: Automated detection of performance problems or equipment failures
- **Tickets**: Customer service cases tracking issue resolution
```

### Client Portal MD Example:

```
# Client Portal - Claude Code Context

## Overview
Customer-facing web application for viewing solar asset performance, service activities, and tickets.

## Architecture
- **Frontend**: React SPA in `frontend/` (port 5173)
- **Backend**: Spring Boot API in `src/` (port 8080)
- **Deployment**: Kubernetes with dev/prod environments

## Frontend Structure (`frontend/src/`)
  components/
  ├── core/           # Reusable UI components (Table, Button, Modal, etc.)
  ├── auth/           # Okta authentication
  ├── clientprofile/  # Multi-tenant client selection
  ├── feature-flags/  # Feature gating
  └── graphs/         # Highcharts solar performance visualizations

  features/           # Feature-specific components
  pages/             # Top-level page componentsapi/       
  contexts/          # React Context providers

## Key Technologies
  - **React 18** with TypeScript
  - **TanStack Query** for server state management
  - **React Router** for navigation
  - **Tailwind CSS** + custom design system
  - **Highcharts** for solar performance graphs
  - **Okta** for authentication
  - **MSW** for API mocking in tests

## Development Workflow
  ```bash
  cd frontend/
  pnpm install
  pnpm dev          # Start dev server
  pnpm test         # Run unit tests
  pnpm test:watch   # Watch mode
  pnpm lint         # ESLint + TypeScript check
  pnpm storybook    # Component documentation

  Backend (Spring Boot)

  - Controllers: REST API endpoints
  - Services: Business logic layer
  - Repositories: Database access (JPA)
  - Config: Okta integration, CORS, etc.

  Common Patterns

  - Use Table.tsx component for all data tables
  - Implement filters with HeaderFacetFilter.tsx pattern
  - Use ExportCsvButton for data export functionality
  - Follow existing component stories in Storybook
  - Use RequireClientProfile wrapper for tenant-specific pages

  API Integration

  - All backend calls use TanStack Query hooks in api/ directory
  - Follow existing query hook patterns (useServiceActivityQuery, useAssetQueries)
  - Use MSW handlers in mocks/ for testing

  Testing Strategy

  - Unit: Vitest + React Testing Library
  - Component: Storybook
  - Integration: MSW for API mocking
  - E2E: Playwright (configured but not actively used)

```

# Practical Examples & Workflows

## Task-Specific Examples

### Frontend Examples

```
Add a loading spinner to the AssetPerformanceTable component in Resolv3 when data 
is fetching. Use the existing SolarSpinner from components/core/spinner/.
```

```
Create a new "Export to PDF" button in the TicketSummaryModal in ClientPortal. 
Follow the same pattern as ExportCsvButton but integrate with the PDF service 
endpoint.
```

```
In the ClientPortal, update the ClientProfileSelector to show the client's primary contact 
email. Add it below the client name using the existing text styling 
patterns.
```

### Backend Examples

```
Add request logging to the TeslaIngestionService. Use the existing 
logging patterns from core/spring-exception-logger.
```

```
Implement rate limiting for the Enphase API client in EnphaseIngestion/. 
Use the retry patterns from core/retry/ and add exponential backoff.
```

```
Add a new endpoint /api/assets/{assetId}/health-summary that returns 
the latest issue status and performance metrics.
```

### Data Pipeline Examples

```
Add data validation to the critical_metrics pipeline in 
databricks-etl/pipelines/critical_metrics/. Check for null 
work_order_ids before processing.
```

```
Optimize the bronze-to-silver transformation in the mysql_importer 
pipeline. The current Spark job is timing out on large datasets.
```

## Complex Multi-Step Prompts

### Frontend Feature Implementation

```
Implement a new "Asset Health Dashboard" feature for the client portal:

<requirements>
- Display real-time health status for all assets in a portfolio
- Include performance metrics, active issues, and last communication timestamp
- Add filtering by asset status (healthy, warning, critical, offline)
- Implement drill-down capability to individual asset details
- Export functionality for asset health reports
</requirements>

<specifications>
- Create the dashboard as a new page route `/dashboard/asset-health`
- Use the existing Table component with custom cells for status indicators
- Integrate with the existing GraphSeries components for performance trends
- Follow the established patterns in PortfolioOverviewPage for layout
- Add appropriate loading states and error handling
- Include responsive design for mobile viewing
</specifications>

<implementation-steps>
1. Create the new page component and route in routing/AppRoutes.tsx
2. Implement the API query hooks in api/AssetQueries.ts
3. Build the health status table with custom cell components
4. Add filtering functionality using existing filter patterns
5. Create performance trend graphs using HighchartsWrapper
6. Implement export functionality following ExportCsvButton patterns
7. Add comprehensive test coverage including MSW mock handlers
8. Update Storybook with component stories
9. Test the feature across different client profiles
</implementation-steps>

Think step-by-step and ensure all new code follows the established patterns in the client-portal frontend codebase.
```

### Backend Service Enhancement

```
Enhance the Tesla ingestion service with comprehensive error handling and monitoring:

<requirements>
- Implement exponential backoff retry logic for API failures
- Add comprehensive logging for debugging authentication issues
- Create health check endpoint for monitoring service status
- Implement circuit breaker pattern for Tesla API calls
- Add metrics collection for ingestion success/failure rates
- Create alerts for persistent failures
</requirements>

<technical-approach>
- Use the existing retry patterns from core/retry/WebClientRetrySpecs
- Follow the logging patterns established in core/spring-exception-logger
- Implement health checks using Spring Boot Actuator
- Add Micrometer metrics for monitoring integration
- Use the messaging patterns from core/messaging for alert notifications
</technical-approach>

<implementation-plan>
1. Analyze current TeslaIngestion implementation and identify failure points
2. Implement retry logic using core/retry utilities
3. Add structured logging throughout the ingestion flow
4. Create health check indicators for Tesla API connectivity
5. Add circuit breaker using Resilience4j patterns
6. Implement metrics collection and dashboard integration
7. Create comprehensive unit and integration tests
8. Update Kubernetes deployment with health check configuration
9. Add monitoring alerts and runbook documentation
</implementation-plan>

Ensure all changes follow the existing architectural patterns in the ingestion-api module.
```

## XML-Tagged Prompts for JIRA Integration

### Simple Bug Fix Template

```
<jira-ticket>
  <summary>
  Table sorting breaks when clicking on Status column in Service Activities
  </summary>
  <description>
  Users report that clicking the Status column header in the Service Activities 
  table causes the sort to fail silently. The data doesn't reorder and no error 
  is shown.

  Steps to reproduce:
  1. Navigate to Service Activities page
  2. Click on the "Status" column header
  3. Observe that data doesn't sort by status

  Expected: Data should sort by status (alphabetically or by priority)
  Actual: No sorting occurs
  </description>

  <acceptance-criteria>
  - Status column should sort alphabetically by status text
  - Clicking again should reverse the sort order
  - Sort indicator should show current sort direction
  - Should work consistently across all client profiles
  </acceptance-criteria>
</jira-ticket>

<instructions>
Investigate and fix the sorting issue in the Service Activities table Status column. Use the existing sorting patterns from other columns in the Table component.
</instructions>
```

### Feature Enhancement Template

```
<jira-ticket>
  <epic>Asset Performance Monitoring</epic>
  <summary>Add real-time performance alerts to asset dashboard</summary>
  <description>
  Portfolio managers need to be notified immediately when asset performance drops below expected thresholds. Currently they have to manually check the dashboard multiple times per day.

  Business Impact:
  - Faster response time to performance issues
  - Reduced manual monitoring overhead
  - Better customer satisfaction through proactive issue resolution

  Requirements:
  - Real-time alerts for performance drops >15% below expected
  - Email notifications to portfolio managers
  - In-app notifications with snooze capability
  - Integration with existing issue detection system
  </description>
  <technical-notes>
  - Leverage the existing stream processing pipeline for real-time detection
  - Use the notification service from core/notification for email delivery
  - Frontend should use WebSocket or Server-Sent Events for real-time updates
  - Integrate with existing TicketSummaryModal for issue details
  </technical-notes>
  <acceptance-criteria>
  - Performance drop alerts trigger within 5 minutes of detection
  - Portfolio managers receive email notifications for their assets only
  - In-app alerts show asset details and recommended actions
  - Users can snooze alerts for configurable time periods (30min, 1hr, 4hr)
  - Integration with existing issue tracking workflow
  - Mobile-responsive alert interface
  </acceptance-criteria>
</jira-ticket>

<instructions>
Design and implement the real-time performance alert system. Start by analyzing the current issue detection patterns in the stream processing services, then extend them with notification capabilities.
</instructions>

<implementation-approach>
1. Extend the stream/trigger-detector service to identify performance threshold violations
2. Use core/messaging to publish alert events to notification service
3. Implement WebSocket connection in client-portal frontend for real-time updates
4. Create new AlertsContext and AlertsProvider following existing context patterns
5. Add alert management UI components following design system patterns
6. Integrate with existing email templates and notification preferences
</implementation-approach>
```

### Data Pipeline Enhancement Template

```
<jira-ticket>
  <epic>Data Quality Initiatives</epic>
  <summary>Implement data validation pipeline for critical metrics ETL</summary>
  <description>
  The critical_metrics Databricks pipeline occasionally produces incorrect KPI calculations due to data quality issues in upstream sources. We need comprehensive validation to catch and handle these issues.

  Data Quality Issues Observed:
  - Null work_order_ids causing metric calculation failures
  - Duplicate asset records skewing performance calculations
  - Invalid timestamp formats from some ingestion sources
  - Missing required fields for FSP response time calculations

  Impact:
  - Executive dashboards show incorrect metrics
  - Customer SLA reports are unreliable
  - Manual data cleanup required 2-3 times per week
  </description>
  <technical-requirements>
  - Implement Great Expectations data validation framework
  - Add data quality checks at bronze, silver, and gold layer transitions
  - Create automated alerts for data quality failures
  - Implement data lineage tracking for debugging
  - Add data quality metrics to monitoring dashboard
  </technical-requirements>
  <acceptance-criteria>
  - All data quality rules documented and version controlled
  - Automated validation prevents bad data from reaching gold tables
  - Data quality dashboard shows validation results and trends
  - Alerts notify team within 15 minutes of validation failures
  - Data lineage tracking enables root cause analysis
  - Pipeline automatically retries after data quality fixes
  </acceptance-criteria>
</jira-ticket>

<instructions>
Implement comprehensive data validation for the critical_metrics Databricks pipeline. Focus on the data quality issues mentioned in the ticket and use industry-standard data validation patterns.
</instructions>
```
