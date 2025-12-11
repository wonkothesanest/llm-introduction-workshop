# Using Claude to Prioritize Sentry Issues for Operator Rotation

Claude can be used like Gemini's "Catch Me Up" feature in Google Meet to quickly surface new impactful issues for operator triage (step 1 in [Engineering Operator Rotation](https://omnidian.slab.com/posts/2ib5pdfq#hh8ef-operator-priorities-by-issue-severity-impact) / Priority 0 and 1 from the [guidebook](https://omnidian.slab.com/posts/engineering-operator-guidebook-teatw7ej#h0a82-priority-0-monitor-service-health)).

## The Problem

During operator rotations, engineers often face 100+ Sentry issues to investigate. Without deep product knowledge, it's difficult to quickly distinguish customer-impacting bugs from noisy but benign errors. High-volume, low-impact issues (like failures that auto-retry) can obscure critical problems affecting just a handful of customers (like missing email notifications). It can be hard to know which issues to triage first, with the goal of getting eyes on the most impactful new issues first.

## The Solution

Use Claude to analyze and prioritize your Sentry issues, surfacing customer-impacting problems first, alongside manual review of the issues.

## How It Works

1. **Export your Sentry issues** - Copy the list of issues from your Sentry dashboard
1. **Paste into Claude** - Share the error data with Claude in a conversation
1. **Ask for prioritization** - Request that Claude order the issues by customer impact
1. **Review and investigate** - Work through the prioritized list, starting with the most critical items

## What Claude Looks For

Claude analyzes error messages, endpoints, and stack traces to reason about customer impact:

- **Customer-facing endpoints** - Errors on routes like `homeowner/contract/signature` likely affect end users
- **Communication failures** - Issues blocking emails, reports, or notifications
- **Error frequency patterns** - Distinguishing between noisy retries and persistent failures
- **Service criticality** - Understanding which systems are user-facing vs. internal

## Results

In testing, Claude successfully:

- ✅ Identified email delivery failures as high priority/triage first
- ✅ Correctly deprioritized loud but auto-retried exceptions
- ✅ Surfaced customer-facing endpoint errors
- ⚠️ Occasionally flagged ~10-20% of items as high priority that were actually auto-retried or non-impacting

## Future Enhancements

- Create a shared Operator sub-agent with product context and retry policies
- Integrate with Sentry's API or MCP server for automated analysis
- Build in knowledge of which errors auto-retry vs. require intervention
- Especially valuable for new operators or during incident spikes

## Getting Started

No special setup required - just paste your Sentry issues into a Claude conversation and ask: "Can you prioritize these issues by customer impact, with the most critical problems first?"

# Example Response from Claude.ai

## Tier 1: Critical Customer-Facing Issues (Fix First)

1. **RESOLV3-2A** - JSON parsing errors in Elite Report detail pages (75 events, High priority)
    - Directly blocks customer access to task details
    - Highest event volume in customer-facing UI
1. **RESOLV3-2P** - Failed to fetch on asset details page (22 events, High priority)
    - Customers can't view asset information
    - Core navigation failure
1. **RESOLV3-22** - Failed to load structured text in asset search (18 events, 5 users, High priority)
    - Breaks asset search functionality
    - Multiple users affected
1. **RESOLV3-K** - Connection closed errors (4 events, 2 users, ongoing 2 years)
    - UI disconnections impact user experience
    - Long-standing issue affecting reliability

## Tier 2: Data Accuracy & Reporting (Fix Next)

1. **ONBOARDING-G** - 503 errors on homeowner contract signature (36 events)
    - Blocks customer onboarding completion
    - Direct revenue impact
1. **METADATA-SERVICE-1AA/1A9/1A7/1A5** - Evebright Weekly Production report failures
    - Customer-facing reports failing
    - Multiple related errors suggest systemic issue
1. **DIAGNOSIS-6D/6F** - Issue diagnosis failures (3 events each)
    - Prevents automated issue detection
    - Impacts proactive customer service

## Tier 3: Backend Stability (Address Soon)

1. **METADATA-SERVICE-PJ** - Redis timeouts on asset summary (26 events, ongoing 1 year)
    - High volume suggests performance bottleneck
    - Degrades overall system responsiveness
1. **METADATA-SERVICE-1FT** - Collation errors in asset search (15 events, Escalating)
    - Database configuration issue
    - "Escalating" status requires attention
1. **Connection Refused Errors** (WORKFLOW-5, STREAM-3F, LOSSFACTORS-SERVICE-1J/4, INGESTION-API-D7/7K)
    - Service discovery/networking issues
    - Could cascade to customer-facing problems

## Tier 4: Data Ingestion & Processing (Monitor & Fix)

1. **LOSS-FACTORS-7** - SystemExit in get_losses (30 events, ongoing 1 year)
1. **INGESTION-API-HA** - AlsoEnergy connection resets (6 events, New)
1. **INGESTION-API-GK** - Enphase misconfiguration (3 events)
1. **INGESTION-API-D1/D5/DV** - Qcells/AlsoEnergy ingestion errors

## Key Reasoning:

- **Customer-facing UI errors** (RESOLV3-*) should be top priority - they directly block customer workflows
- **Onboarding/contract issues** prevent revenue realization
- **Diagnosis service failures** reduce service quality and increase manual intervention
- **Long-running issues** with high event counts (Redis timeouts, connection refused) indicate systemic problems worth investigating
- **Data ingestion errors** are important but typically have less immediate customer visibility

The "Escalating" status on METADATA-SERVICE-1FT makes it worth prioritizing despite lower volume - database collation issues can spread and become harder to fix.
