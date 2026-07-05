# agent-hub

Multi-agent workflow experiment: 4 AI agents (Claude Code, Gemini, Codex, Open Code)
collaborate to build a browser-based **3D model viewer**. Each agent owns specific
files and must not edit another's. Repo: `github.com/andreas-purse/agent-hub`.

## The app

Three.js viewer for `.gltf` / `.glb` / `.obj` / `.stl` — drag-drop or picker load,
orbit controls, auto-frame on load, ground grid, model info panel, reset view.
No build tools: plain HTML/CSS + ES modules, Three.js v0.162.0 via CDN importmap
(`cdn.jsdelivr.net`). No npm, no bundler, no tests.

## Run

Open `index.html` in a browser. If it loads blank (browsers block local ES modules
over `file://`), serve the folder statically, e.g. `python -m http.server`, and open
`http://localhost:8000`.

## Structure (owner in brackets)

- `index.html` — page shell: canvas, drop zone, UI panels [Gemini]
- `css/style.css` — dark theme, layout [Gemini]
- `js/app.js` — entry point, wires modules + animation loop [Claude — yours]
- `js/scene.js` — scene, camera, renderer, lights, grid [Codex]
- `js/loaders.js` — format loaders + bounding-box/vertex info [Codex]
- `js/controls.js` — orbit controls, `resetCamera` [Open Code]
- `js/ui.js` — drag-drop, file picker, info panel [Open Code]
- `prompts/` — per-agent task specs; `prompts/PROJECT.md` is the full brief
- `AGENTS.md` — task→agent routing guide + prompt-relay templates

## Claude's role

Architect, integrator, reviewer. Plan the approach, delegate scoped codegen to the
cheaper agents (Codex / Open Code), then review, test, integrate, and commit.
You own `js/app.js`; touch other agents' files only to fix integration bugs during
final review. Claude is the most expensive agent — don't spend it on boilerplate or
open-ended exploration; come with a clear ask. Full routing: `AGENTS.md`.

Workflow: **PLAN** (Claude) → **EXECUTE** (Codex / Open Code) →
**VERIFY** (Gemini, full-context review) → **FINISH** (Claude: review, test, integrate, commit).

## Git

- Only Claude Code runs git (commits, branches, PRs).
- One agent per file at a time; commit after each logical unit of work.
