# Agent Hub

Multi-agent development workspace. 4 AI agents collaborate, each with a defined role.

## Agent Roles

| Agent | Role | Use For |
|-------|------|---------|
| **Claude Code** | Architect & Reviewer | Planning, complex refactors, code review, git ops, multi-file changes |
| **Gemini** | Context & Docs | Large file analysis, full-repo Q&A, doc generation, spec review |
| **Codex** | Fast Executor | Scoped tasks: write a function, add tests, implement from spec |
| **Open Code** | Validator & Utility | Second opinions, alternative implementations, quick lookups |

## Cost Rules

Claude Code (Opus 4.6) is the most expensive agent. To manage costs:

1. **Don't use Claude for tasks another agent handles well** — simple code gen, boilerplate, test writing → Codex
2. **Keep Claude interactions focused** — come with a clear ask, not open exploration
3. **Use Claude's planning output as specs for other agents** — Claude plans, others execute
4. **Use Claude for final review** — cheaper agents draft, Claude polishes

## Workflow

```
1. PLAN    → Claude Code designs the approach
2. EXECUTE → Codex / Open Code implement scoped tasks
3. VERIFY  → Gemini reviews against full context
4. FINISH  → Claude Code reviews, tests, integrates, commits
```

## Git Rules

- Only Claude Code touches git (commits, branches, PRs)
- One agent per file at a time
- Commit after each logical unit of work
