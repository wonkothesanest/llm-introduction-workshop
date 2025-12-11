# Introduction

Welcome to Claude Code!

Claude Code is a CLI interface that lets you work with Claude, an LLM developed by Anthropic, directly in your codebase. [Anthropic has a lot of excellent documentation that's worth reading through.](https://code.claude.com/docs/en/overview)

Claude can help you write code faster, review code more quickly, and generate thorough documentation. **Remember that you're still responsible for everything you create and review**, whether or not you used Claude.

This document will get Claude Code set up on your machine, walk you through an example use case, and provide some tips & tricks for how to use Claude most effectively.

# Installation and Setup

Install the Claude code CLI by following the steps here: [https://docs.anthropic.com/en/docs/claude-code/setup](https://docs.anthropic.com/en/docs/claude-code/setup)

## Login and first run

Before running Claude Code, login to [https://console.anthropic.com/](https://console.anthropic.com/)

🤪 Confusingly, don't click `Continue with Google`. Enter your email address and click Continue with SSO.

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/yhEjpYwg6Xu4tcUp7G4pDscm.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

Once you are logged into the Anthropic console you are ready to run Claude Code for the first time.

From your terminal run:

```bash
claude
```

If you are presented with a 'missing API key' status message,  run the /login command.

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/Yfuxh8Cm9eF6KKZyFC5qHyLl.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/ZQAqH7zc33xhJKi188ATCMbw.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

When you are asked to select a login method, choose Anthropic Console account.

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/HZQ2iMUKkyewZLBWa9jEsivI.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

Select the _Omnidian Org_

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/i4WPIRrxaLEKCuEg3n2gFDD5.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

And then select _Authorize_

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/dfn3wQyX5ZkE4IQqXOLina4e.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

Now just continue through the notices and terminal setup options that Claude asks you on the first run.  This process should have created an Anthropic API key on your behalf and stored it locally in your OS credential store.  Now you are ready to start using Claude Code from your terminal.

# IDE Setup

The Claude Code plugin is pretty bare bones. It basically still runs in a terminal window but has integration with the IDE that is hosting it. For example when it modifies code it will show you the diffs in your ides diff windows rather than diffs in the terminal window.

## IntelliJ / PyCharm

Install the _Claude Code_ plugin from the marketplace tab in settings

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/HEHaLg1skTkyZicEKruaEcQe.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

Verify that that the plugin is working correctly by running Claude Code in the IDE's terminal window and type in the `/ide` command

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/Br9tZF9AcitFjWuLGJby7DPf.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

It should show IntelliJ with a green checkmark

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/AiKyv3fr9I9XtrB2X8Q6HK81.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

## VSCode

Install the Claude Code for VSCode extension from the marketplace

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/w7lmEuAOKpzq3RBEwrmx5fqp.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

Again, verify the plugin is working correctly by running Claude Code in the IDE's terminal window via the /ide command.  It should show Visual Studio Code marked with a green checkmark.

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/PQ5hrLFSKT63m4epVYg20Fef.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)

**RECOMMENDATION**: Read through Anthropic's [QuickStart](https://docs.anthropic.com/en/docs/claude-code/quickstart)

# Your first session

Claude code is typically run from a terminal. Either standalone or within your chosen IDE. You want to **make sure that you start Claude Code in the root of a project** you are working on. This will ensure it is positioned to easily find all of the files and configuration in your project. To do this, open a terminal and navigate to a project you want to work on.

```
# Change to the directory that contains your project
cd /path/to/your/project

# Run claude code
claude
```

A typical way to get started with Claude Code is to use it to answer questions about your codebase. You can practice crafting prompts and familiarize yourself with its TUI. Typically if you ask it questions it will simply respond like a person would in a chat. It won't write or modify code but it will scan through the files in your project as it builds an answer to your question.

**For example:** If you go to the `issues` repository, you might ask:

```
How are new issues created?
```

And Claude might respond with something like:

```
⏺ I'll search the codebase to understand how new issues are created in the Issues Service.

⏺ Search(pattern: "create.*issue|new.*issue|Issue.*create", glob: "**/*.kt")
  ⎿  Found 29 files (ctrl+r to expand)

⏺ Read(issues-server/src/main/kotlin/com/omnidian/services/issues/IssueProvider.kt)
  ⎿  Read 1871 lines (ctrl+r to expand)

⏺ Search(pattern: "handlePresentEvent|createNewIssue|createNewCondition", glob: "**/*.kt", output_mode: "content")
  ⎿  Found 84 lines (ctrl+r to expand)

⏺ Based on my analysis of the codebase, here's how a new issue is created in the Issues Service:

  New issues are created through the handlePresentEvent method in IssueProvider.kt:621. Here's the process:

  1. Trigger Event Reception: The system receives a "present" trigger event via IssueEventService.kt:53, which calls
  issueProvider::handlePresentEvent
  2. Event Processing: The handlePresentEvent method processes the incoming trigger event with parameters:
    - assetId: The asset experiencing the issue
    - unitId: The specific hardware unit
    - triggerRule: The type of issue (e.g., NonCom, ZeroGen, DeviceError)
    - triggerRuleSubType: Optional subtype
    - signalTS: When the issue was detected
    - timeOfRecordTS: When the event was recorded
    - contextJson: Additional context data
    - estimatedTS: Estimated actual occurrence time
  3. Database Transaction Logic (lines 650-724):
    - Checks if a condition already exists for this symptom
    - If no existing condition, validates the event timing
    - Checks for other related conditions on the same asset
    - Creates new issue: If no related conditions exist, calls createNewIssueAndCondition (line 683)
    - Adds to existing issue: If related conditions exist, adds new condition to existing issue (line 702)
  4. New Issue Creation (createNewIssueAndCondition at line 1110):
    - Calls createNewIssue to insert into issues table with status "Open"
    - Calls createNewCondition to insert into issue_conditions table
    - Increments metrics counter
  5. Database Inserts:
    - Issue: INSERT INTO issues (asset_id, status) VALUE ({assetId}, {status}) (line 1141)
    - Condition: INSERT INTO issue_conditions with all trigger details (line 1167)
```

At first glance this looks pretty good. However, you should read through what it has output here and look at the file references that it has provided and verify that what it is saying is true. Depending on the size and complexity of your codebase, what kind of prep work your team has already done to tune Claude code for the repository and the prompt you provided you may get quite a variance in accuracy of the responses. That being said these type of responses are usually a good place to start learning about an unfamiliar codebase or test Claude's accuracy with your code and projects. If something doesn't make sense in it's response, ask followup questions. Inaccurate responses can be an indication that more refinement needs to be made to `CLAUDE.md` or that you should learn more about writing effective prompts. <- TODO link to our docs on prompt engineering.

To get help type `/help`. These are known as "slash commands".  Try it out and look through all the available slash commands. Ones that you find interesting and what to know more about try asking Claude to explain it to you.

# Tokens, Context and Cost

## What are Tokens?

Tokens are the basic units that language models like Claude use to process text. Think of them as the "building blocks" of language processing. A token isn't always equivalent to a word - it can be a word, part of a word, or even punctuation marks.

**Examples of tokenization:**

- "Hello world" = 2 tokens ("Hello" + "world")
- "OpenAI" might = 2 tokens ("Open" + "AI")
- "don't" = 2 tokens ("don" + "'t")
- Common words like "the" = 1 token
- Rare or complex words might = multiple tokens

The exact tokenization depends on the model's training and tokenizer. Generally, more common words and character sequences become single tokens, while uncommon words or phrases get split into multiple tokens.

## How Prompts and Context are Tokenized

When you interact with Claude or other language models, everything gets converted to tokens:

**Input tokenization includes:**

- Your actual message/prompt
- System instructions (the rules and guidelines the AI follows)
- Conversation history (previous messages in the chat)
- Any additional context (like uploaded files or retrieved information)

**The full context window** consists of all these elements combined. For example, if you're having a long conversation, each new message adds to the total token count because the model needs to "remember" the entire conversation to respond appropriately.

**Context limits:** Models have maximum context windows (like 200K tokens for Claude Sonnet). When conversations get too long, older parts may need to be truncated to fit new messages.

## Cache Tokens

**Cache tokens** are a cost optimization feature that allows frequently reused content to be stored and reused without being reprocessed as full input tokens on every request.

**How caching works:**

- When you send repetitive content (like the same system prompt, document, or conversation history), the API can cache these tokens
- Cached content gets processed once and stored temporarily
- On subsequent requests, cached tokens are retrieved instead of being processed as new input tokens

**What gets cached:**

- System prompts that don't change between requests
- Large documents or files that are referenced multiple times
- Conversation history that remains constant
- Any repetitive context that appears across multiple API calls

**Cache token pricing:**

- **Cache writes**: When content is first cached, you pay a higher rate per token (usually 25% more than regular input tokens)
- **Cache reads**: When cached content is reused, you pay a much lower rate (typically 90% less than regular input tokens)
- This creates significant savings for applications that reuse large amounts of context

**Cache benefits:**

- Dramatically reduced costs for repetitive content
- Faster response times since cached content doesn't need reprocessing
- More efficient use of context windows

## How Costs are Calculated

Before getting into discussions about cost, one important note is that costs are capped, and it's engineering management's job to review costs and usage. So have at it without worry about costs, and if your usage becomes problematic from a cost perspective management will reach out to you. That being said…

API pricing typically works on a **per-token basis** with different rates for:

**Input tokens** (what you send): Usually cheaper since the model just needs to process existing text

**Output tokens** (what the model generates): Usually more expensive since the model has to actively generate new content

**Cache tokens**: As described above, with separate pricing for cache writes vs. cache reads

**Typical pricing structure:**

- Input: $X per 1,000 or 1 million input tokens
- Output: $Y per 1,000 or 1 million output tokens (where Y > X)
- Cache write: $Z per 1,000 or 1 million tokens (where Z > X)
- Cache read: $W per 1,000 or 1 million tokens (where W << X)

**Example calculation:** If you send a 500-token prompt and get a 300-token response, with 200 tokens coming from cache:

- New input cost: 300 tokens × input rate
- Cache read cost: 200 tokens × cache read rate
- Output cost: 300 tokens × output rate
- Total cost = new input cost + cache read cost + output cost

**Factors affecting costs:**

- Longer conversations = more tokens = higher costs
- Complex prompts with lots of context = more input tokens
- Requesting detailed responses = more output tokens
- Model choice (more capable models typically cost more per token)
- Efficient use of caching can significantly reduce costs for repetitive workloads

The exact rates vary by provider and model tier, but this token-based pricing structure with caching optimizations is becoming standard across most language model APIs.

# The "CLAUDE.md" file

A `CLAUDE.md` file is a documentation file that engineering teams use to provide context and instructions specifically for AI assistants like Claude when working on their codebase. It serves as a centralized knowledge base that helps AI understand the project's structure, conventions, and requirements.

## Purpose and Usage

The `CLAUDE.md` file acts as a "README for AI assistants" - it's where engineers document information that would be helpful for an AI to understand when analyzing, modifying, or working with their code. This file is typically placed in the project root directory and is referenced when AI tools are used for code review, debugging, refactoring, or feature development.

## Best Practices for Content

**Project Overview**

- Brief description of what the application does
- High-level architecture and key components
- Tech stack and major dependencies
- Development environment setup instructions

**Code Organization and Conventions**

- Directory structure explanation
- Naming conventions for files, functions, and variables
- Code style guidelines and formatting rules
- Import/export patterns used throughout the project

**Business Logic and Domain Knowledge**

- Key business rules and constraints
- Domain-specific terminology and concepts
- Important workflows or processes
- Data models and their relationships

**Development Guidelines**

- Testing strategies and requirements
- Error handling patterns
- Performance considerations
- Security best practices specific to the project

**Context for AI Assistance**

- Areas where AI help is most valuable
- Code sections that require special attention
- Known technical debt or areas to avoid modifying
- Preferred approaches for common tasks

**Examples and Patterns**

- Code snippets showing preferred implementation patterns
- Examples of how to handle common scenarios
- Template structures for new components or modules

## Maintenance Best Practices

**Keep It Current**: Update the file when major architectural changes occur, new conventions are adopted, or significant features are added.

**Be Concise but Comprehensive**: Focus on information that genuinely helps AI understand the codebase rather than duplicating what's already clear from the code itself.

**Use Clear Structure**: Organize content with headers and sections for easy navigation and reference.

**Include Rationale**: Explain not just what conventions exist, but why they were chosen when it's not obvious.

**Version Control**: Treat the CLAUDE.md file as critical documentation and include it in code reviews to ensure it stays accurate.

The CLAUDE.md file essentially bridges the gap between human tribal knowledge and what an AI assistant can infer from code alone, making AI-assisted development more effective and aligned with team practices.

# When to use Claude Code

**Core Development Tasks** Writing and reviewing unit tests is consistently mentioned as a "killer use case" - Claude understands code context and generates comprehensive tests that cover edge cases developers often overlook. Teams report Claude can identify potential issues like null pointer exceptions in payment flows that were completely missed during manual review [Claude Code: One Month of Practical Experience — A Guide for Software Architects and Developers | by Giuseppe Trisciuoglio | Medium](https://medium.com/@giuseppetrisciuoglio/claude-code-one-month-of-practical-experience-a-guide-for-software-architects-and-developers-e52b74236d1a).

**Codebase Navigation and Understanding** Claude is "exceptionally good at navigating large codebases, searching for patterns, understanding relationships between different parts of the code, components, shared state" [How I use Claude Code (+ my best tips)](https://www.builder.io/blog/claude-code). It can "map and explain entire codebases in a few seconds" using agentic search to understand project structure and dependencies.

**Feature Development with Standard Architectures** For projects following established patterns, Claude can generate REST endpoints, service layers, and repositories that integrate perfectly with existing code [Claude Code: One Month of Practical Experience — A Guide for Software Architects and Developers | by Giuseppe Trisciuoglio | Medium](https://medium.com/@giuseppetrisciuoglio/claude-code-one-month-of-practical-experience-a-guide-for-software-architects-and-developers-e52b74236d1a). Teams report creating custom commands that automatically generate DTOs, mappers with MapStruct, and related unit tests following exact project conventions [How I Use Claude Code to Maximize Productivity | by Shivang Tripathi | Jul, 2025 | Medium](https://medium.com/@shivang.tripathii/how-i-use-claude-code-to-maximize-productivity-c853104804d6).

**Refactoring and Code Quality** Teams use Claude for "the things that would improve code quality that you previously wouldn't have time to" - like comprehensive refactoring [Claude Code Top Tips: Lessons from the First 20 Hours | by Waleed Kadous | Medium](https://waleedk.medium.com/claude-code-top-tips-lessons-from-the-first-20-hours-246032b943b4). Users report it "refactors like a monster" with "total understanding of every detail and intricacy" [Write beautiful code, ship powerful products | Claude by Anthropic \ Anthropic](https://www.anthropic.com/solutions/coding).

**Documentation and Communication** Claude excels at "crafting clear PR descriptions and meaningful commit messages" with users noting "its commit messages are better than mine because of the 'perfect memory' thing" [Claude Code Top Tips: Lessons from the First 20 Hours | by Waleed Kadous | Medium](https://waleedk.medium.com/claude-code-top-tips-lessons-from-the-first-20-hours-246032b943b4). Teams use it to consolidate scattered technical documentation across wikis and code comments into accessible formats [How Anthropic teams use Claude Code \ Anthropic](https://www.anthropic.com/news/how-anthropic-teams-use-claude-code).

The key pattern is that Claude Code works best for teams that can invest time in setting up proper context (through CLAUDE.md files and custom commands) and treat it as a collaborative partner rather than just a code completion tool.

# When not to use Claude Code

- Code for authentication systems, encryption implementations, network security configurations, or vulnerability assessments shouldn't be developed with external AI assistance due to attack surface concerns.
- Code that generates audit trails, compliance reports, or regulatory filings might need to maintain a clear chain of human accountability that AI assistance could complicate.
- When developing integrations or custom solutions for clients under strict NDAs, using Claude Code might violate contractual obligations about code confidentiality, even if Anthropic has strong privacy practices. Check with legal.

# Appendix

[This video](https://youtu.be/aueu9lm2ubo?si=zWvryQZ04DqkzWot) is a nice minimalist example of how Claude Code and other coding "Agents" work. It's worth a watch if you want to know just what Claude is doing and how is the LLM able to access my files, create new ones, run terminal commands etc (spoiler: the LLM doesn't have direct access to those things). It is a nice background to have before you start to get into Claude's more advanced features.

[Claudelytics](https://github.com/nwiizo/claudelytics) is a tool that gives you a nice view into your Claude usage data. For example:

![](https://slabstatic.com/prod/assets/sth4p95m/post/hr2l84n4/preimages/H2SxJYGGNatddJpw9iMaXxqy.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzY2Njg5MDg3LCJpYXQiOjE3NjU0Nzk0ODcsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzIwM3NmYmE3YWNtYTg0ZWNydGk1OGsyIiwibmJmIjoxNzY1NDc5NDg3LCJwYXRoIjoicHJvZC9hc3NldHMvc3RoNHA5NW0vcG9zdC9ocjJsODRuNCJ9.bJhbIPMmDAtixvYxbZzHYSMbmhN7LKD4spuq9L6rTSgpYJpZbE0qTe7n-Fp9NkvadYvQRo8iqcOAvnyUZHT2JI5U29B5Zh1cy0UQbqTSh3Ckt6HPPpWLG9TGCH0MVZIJFU_E4BPFFBFM_ccrOiqevcQ6mSoR5zjy7FKR9KHgkytxW0T4TZXSnTNcG7Ic4ms3jrw02iIAd7GYHN5BqMABSCxPlRM08xPmCIQVvEXEpP11xF_T2VYoeWKPI90EXZ7DPVSCR7y-1818QQAY2czbOI37cgpp1ruO4H86FLfZh6G8VZQBkFH7V5eSDW70Wy-k6p18pmKn0m_ZsQ0nBzlaHA)
