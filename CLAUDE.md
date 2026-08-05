# CLAUDE.md — mg-website

This file tells AI coding assistants (Claude Code, Cursor, etc.) how to work in this repository.

## Project summary
- Repository: **mg-website**
- Goal: Mineo Games website (content + styles + front-end pages).
- Priorities: keep changes small, avoid breaking layout, keep build/deploy simple.

## Working style
- Start by scanning the repository structure:
  - Identify the framework/build system (e.g., `package.json`, static site generator config, etc.).
  - Identify the entrypoints (main HTML/layout files, build scripts, content folders).
- When implementing:
  - Update or add only the necessary files.
  - Validate changes by running the project locally when possible.
  - Provide a short explanation + exact commands used.

## Commands to try (detect first)
Before running anything, inspect `package.json` and choose the right commands. Common ones:
- Install:
  - `npm install` or `pnpm install` or `yarn`
- Dev:
  - `npm run dev`
- Build:
  - `npm run build`
- Preview:
  - `npm run preview`
- Lint / Format:
  - `npm run lint`
  - `npm run format`

If no Node tooling is present, treat it as a static site and work directly on HTML/CSS/assets.

## Code & content conventions
- Do not reformat unrelated files.
- Prefer existing CSS methodology (utility classes / BEM / custom conventions) once identified.
- Keep accessibility in mind:
  - meaningful headings
  - alt text for images
  - sufficient contrast
  - keyboard navigation for interactive elements

## Typical tasks
### 1) Add or update a page/section
- Locate the right layout/template file.
- Update navigation links if needed.
- Ensure responsive behavior (mobile + desktop).

### 2) Update styling
- Touch only the relevant CSS/SCSS file(s).
- Avoid duplicating styles; reuse existing classes when possible.

### 3) Add assets (images/icons)
- Use existing folders (e.g., `assets/`, `public/`, `resources/`) once identified.
- Prefer optimized formats (SVG for icons, WebP for photos if compatible).
- Keep filenames lowercase and predictable.

## Commit message guidance
Use simple, readable commits:
- `feat: ...` for new features
- `fix: ...` for bug fixes
- `style: ...` for purely visual changes
- `chore: ...` for tooling/maintenance

## When blocked
If you cannot confidently proceed:
- Ask for clarification, OR
- Show what you inspected and propose 2–3 options with tradeoffs.

## Safety / scope
- Do not modify CI/CD, hosting, or DNS unless explicitly asked.
- Do not introduce analytics or tracking scripts unless explicitly asked.

# Golden rules

--- 

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---