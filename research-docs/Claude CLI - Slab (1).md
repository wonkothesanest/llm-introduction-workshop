This document covers the basics of actually using Claude code via the CLI, including basic commands and slash commands. It is intended for new users of Claude, as well as being a quick reference for any existing users who need a refresher.

# CLI reference

The following is taken directly from [Anthropic documentation](https://docs.anthropic.com/en/docs/claude-code/cli-reference), but is copied here in case that link ever breaks. If you are reading this in the future (written 08/21/2025) it's probably worth referencing that documentation directly to see if any of these commands have changed or new ones have been added. Notably, you can use Claude in two modes: interactive mode and command line mode. In interactive mode (started by simply using the `claude` command), you can interface back and forth with Claude in real time using whatever queries you'd like. If you don't want to start a session but simply run one-off tasks non interactively you can use the command line mode, doing things like `claude "query"` to run queries as needed.

I've found that the `-r` command is particularly useful: the ability to end a session and restart it as needed allows for easily maintaining context over time when real-world constraints get in the way. Anthropic also notes that the `--output-format` flag can be particularly useful for programmatically dealing with Claude's output: it can send you a json file, for example, which you can then do whatever you need with.

## CLI commands

| Command | Description | Example |
| --- | --- | --- |
| `claude` | Start interactive REPL | `claude` |
| `claude "query"` | Start REPL with initial prompt | `claude "explain this project"` |
| `claude -p "query"` | Query via SDK, then exit | `claude -p "explain this function"` |
| `cat file | claude -p "query"` | Process piped content | `cat logs.txt | claude -p "explain"` |
| `claude -c` | Continue most recent conversation | `claude -c` |
| `claude -c -p "query"` | Continue via SDK | `claude -c -p "Check for type errors"` |
| `claude -r "<session-id>" "query"` | Resume session by ID | `claude -r "abc123" "Finish this PR"` |
| `claude update` | Update to latest version | `claude update` |
| `claude mcp` | Configure Model Context Protocol (MCP) servers | See the [Claude Code MCP documentation](/en/docs/claude-code/mcp). |

## CLI flags

Customize Claude Code's behavior with these command-line flags:

| Flag | Description | Example |
| --- | --- | --- |
| `--add-dir` | Add additional working directories for Claude to access (validates each path exists as a directory) | `claude --add-dir ../apps ../lib` |
| `--allowedTools` | A list of tools that should be allowed without prompting the user for permission, in addition to [settings.json files](/en/docs/claude-code/settings) | `"Bash(git log:*)" "Bash(git diff:*)" "Read"` |
| `--disallowedTools` | A list of tools that should be disallowed without prompting the user for permission, in addition to [settings.json files](/en/docs/claude-code/settings) | `"Bash(git log:*)" "Bash(git diff:*)" "Edit"` |
| `--print`, `-p` | Print response without interactive mode (see [SDK documentation](/en/docs/claude-code/sdk) for programmatic usage details) | `claude -p "query"` |
| `--append-system-prompt` | Append to system prompt (only with `--print`) | `claude --append-system-prompt "Custom instruction"` |
| `--output-format` | Specify output format for print mode (options: `text`, `json`, `stream-json`) | `claude -p "query" --output-format json` |
| `--input-format` | Specify input format for print mode (options: `text`, `stream-json`) | `claude -p --output-format json --input-format stream-json` |
| `--verbose` | Enable verbose logging, shows full turn-by-turn output (helpful for debugging in both print and interactive modes) | `claude --verbose` |
| `--max-turns` | Limit the number of agentic turns in non-interactive mode | `claude -p --max-turns 3 "query"` |
| `--model` | Sets the model for the current session with an alias for the latest model (`sonnet` or `opus`) or a model's full name | `claude --model claude-sonnet-4-20250514` |
| `--permission-mode` | Begin in a specified [permission mode](iam#permission-modes) | `claude --permission-mode plan` |
| `--permission-prompt-tool` | Specify an MCP tool to handle permission prompts in non-interactive mode | `claude -p --permission-prompt-tool mcp_auth_tool "query"` |
| `--resume` | Resume a specific session by ID, or by choosing in interactive mode | `claude --resume abc123 "query"` |
| `--continue` | Load the most recent conversation in the current directory | `claude --continue` |
| `--dangerously-skip-permissions` | Skip permission prompts (use with caution) | `claude --dangerously-skip-permissions` |

# Slash commands

Once you have entered Claude's interactive mode, you can use slash commands to get Claude to do specific tasks. Many of these slash commands are built in, and ones like /init are particularly useful for initializing your project and making the rest of your work smoother. Refer to [Anthropic's page on slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands) (from which much of this section is taken) for more details.

## Built-in slash commands

| Command | Purpose |
| --- | --- |
| `/add-dir` | Add additional working directories |
| `/agents` | Manage custom AI subagents for specialized tasks |
| `/bug` | Report bugs (sends conversation to Anthropic) |
| `/clear` | Clear conversation history |
| `/compact [instructions]` | Compact conversation with optional focus instructions |
| `/config` | View/modify configuration |
| `/cost` | Show token usage statistics (see [cost tracking guide](/en/docs/claude-code/costs#using-the-cost-command) for subscription-specific details) |
| `/doctor` | Checks the health of your Claude Code installation |
| `/help` | Get usage help |
| `/init` | Initialize project with CLAUDE.md guide |
| `/login` | Switch Anthropic accounts |
| `/logout` | Sign out from your Anthropic account |
| `/mcp` | Manage MCP server connections and OAuth authentication |
| `/memory` | Edit CLAUDE.md memory files |
| `/model` | Select or change the AI model |
| `/permissions` | View or update [permissions](/en/docs/claude-code/iam#configuring-permissions) |
| `/pr_comments` | View pull request comments |
| `/review` | Request code review |
| `/status` | View account and system statuses |
| `/terminal-setup` | Install Shift+Enter key binding for newlines (iTerm2 and VSCode only) |
| `/vim` | Enter vim mode for alternating insert and command modes |

## Custom slash commands

Custom slash commands allow you to define frequently-used prompts as Markdown files that Claude Code can execute. Commands are organized by scope (project-specific or personal) and support namespacing through directory structures.

### Syntax

```
/<command-name> [arguments]
```

Parameters

| Parameter | Description |
| --- | --- |
| `<command-name>` | Name derived from the Markdown filename (without `.md` extension) |
| `[arguments]` | Optional arguments passed to the command |

### 

Commands can either be project level (shared by all users of a project) or personal (available only to you across all projects you work on). Project commands are written to the .claude/commands directory, while personal commands are written to ~/.claude/commands

**Project commands**

In the following example, we create the `/optimize` command:

```bash
# Create a project command
mkdir -p .claude/commands
echo "Analyze this code for performance issues and suggest optimizations:" > .claude/commands/optimize.md
```

**Personal commands**

In the following example, we create the `/security-review` command:

```bash
# Create a personal command
mkdir -p ~/.claude/commands
echo "Review this code for security vulnerabilities:" > ~/.claude/commands/security-review.md
```

# Extensions (and SuperClaude)

While this doc won't go into too much detail (it's meant to just be an intro to the topic), it's worth pointing out the power and flexibility of these customizable slash commands. With them, you can create entire coding frameworks like [SuperClaude](https://github.com/SuperClaude-Org/SuperClaude_Framework): an extension off of Claude code that provides more powerful builtin commands, token optimization, and more. Definitely worth checking out!
