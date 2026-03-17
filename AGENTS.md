# Agent Routing Guide

Quick reference: which agent should I use for this task?

## Route to Claude Code ($$$$)
- "Design the architecture for X"
- "Plan how to implement X"
- "Review this code for correctness and security"
- "Refactor across multiple files"
- "Debug this complex issue"
- "Create the PR / commit"
- Anything requiring deep reasoning or multi-step orchestration

## Route to Gemini ($)
- "What does this large file/module do?"
- "Find inconsistencies across the codebase"
- "Summarize this spec/doc"
- "How does feature X work end-to-end?"
- Anything requiring huge context windows (paste entire files/repos)

## Route to Codex ($$)
- "Write function X that does Y"
- "Add unit tests for Z"
- "Implement this interface/spec"
- "Convert this code from A to B"
- Well-defined, scoped implementation tasks

## Route to Open Code ($)
- "Give me an alternative way to do X"
- "What do you think of this approach?"
- "Quick: what's the syntax for X?"
- Second opinions, validation, quick utilities

## Prompt Relay Templates

### Claude → Codex handoff
```
Implement the following from this plan:

[paste Claude's plan output]

Scope: only modify [specific files]
Requirements: [specific acceptance criteria]
```

### Any Agent → Claude review handoff
```
Review this implementation for correctness, security, and edge cases:

[paste code or diff]

Original plan: [paste plan]
```

### Claude → Gemini context check
```
Given the full codebase context, does this change introduce
any conflicts or inconsistencies?

[paste proposed changes]
```
