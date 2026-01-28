# React Best Practices

React and Next.js performance optimization guidelines for the BitSleuth website project, designed for AI agents and code review.

## Structure

- `rules/` - Individual rule files (one per pattern)
- `metadata.json` - Skill metadata (version, stack, references)
- `SKILL.md` - Skill definition with quick reference
- `AGENTS.md` - Full compiled guide with all rules expanded

## Rule Categories

| Prefix | Category | Impact |
|--------|----------|--------|
| `async-` | Eliminating Waterfalls | CRITICAL |
| `bundle-` | Bundle Size Optimization | CRITICAL |
| `server-` | Server-Side Performance | HIGH |
| `client-` | Client-Side Data Fetching | MEDIUM-HIGH |
| `rerender-` | Re-render Optimization | MEDIUM |
| `rendering-` | Rendering Performance | MEDIUM |
| `js-` | JavaScript Performance | LOW-MEDIUM |
| `advanced-` | Advanced Patterns | LOW |

## Using the Rules

Each rule file in `rules/` contains:
- Brief explanation of the pattern
- Incorrect code example
- Correct code example
- Optional references

Example rule file structure:

```markdown
---
title: Rule Title
impact: MEDIUM
tags: tag1, tag2
---

## Rule Title

Explanation of the rule.

**Incorrect:**
```tsx
// Bad pattern
```

**Correct:**
```tsx
// Good pattern
```
```

## Impact Levels

- `CRITICAL` - Major performance gains, highest priority
- `HIGH` - Significant improvements
- `MEDIUM-HIGH` - Moderate-high gains
- `MEDIUM` - Moderate improvements
- `LOW-MEDIUM` - Low-medium gains
- `LOW` - Incremental improvements

## Project Context

- **Framework:** Next.js 16 (App Router)
- **Runtime:** React 19
- **Hosting:** Firebase App Hosting
- **Styling:** Tailwind CSS

## Adding New Rules

1. Create a new file in `rules/` with the appropriate prefix
2. Follow the frontmatter structure (title, impact, tags)
3. Include clear incorrect/correct examples
4. Update `AGENTS.md` with the new rule content
