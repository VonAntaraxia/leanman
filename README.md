# Leanman

Lean code + anti-slop prose + caveman compression. One dial, three axes.

Merges [ponytail](https://github.com/DietrichGebert/ponytail)'s code minimalism ladder, [stop-slop](https://github.com/VonAntaraxia/stop-slop)'s anti-AI-tell rules, and [caveman](https://github.com/JuliusBrussee/caveman)'s output compression into a single skill. Writes minimal code, explains in terse human-sounding prose, compresses every reply.

Same answers, fewer tokens. Brain still big. Mouth small.

## Before / After

| Normal agent | Leanman |
|---|---|
| "The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object." | New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`. |
| "Sure! I'd be happy to help with that. The issue you're experiencing is most likely caused by your authentication middleware not properly validating the token expiry. Let me take a look and suggest a fix." | Bug in auth middleware. Token expiry check use `<` not `<=`. Fix: |

## Install

### Claude Code plugin

```bash
claude plugin marketplace add VonAntaraxia/leanman
```

### npx skills (Cursor, Windsurf, Cline, 40+ agents)

```bash
npx skills add VonAntaraxia/leanman
```

### Claude Code standalone hooks

```bash
# Clone the repo, then symlink hooks
git clone https://github.com/VonAntaraxia/leanman
cd leanman
# Copy hooks to Claude Code config
cp hooks/* ~/.claude/hooks/
```

### Manual

Copy `SKILL.md` to your agent's rules or skills directory. Say `/leanman` to activate.

## Levels

| Level | Code | Prose |
|-------|------|-------|
| **lite** | Prefer simple, skip YAGNI check | No filler/hedging. Keep articles + full sentences |
| **full** (default) | Ladder enforced (YAGNI → stdlib → native → one line) | Drop articles, fragments OK, short synonyms. Classic caveman |
| **ultra** | Challenge requirements, deletion first | Bare fragments. One word when one word does it |
| **wenyan-lite** | Same code ladder | Semi-classical Chinese. Drop filler, keep grammar |
| **wenyan-full** | Same code ladder | Maximum 文言文. 80-90% character reduction |
| **wenyan-ultra** | Same code ladder | Extreme classical abbreviation |

## Three axes

### Axis 1: Code ladder (from ponytail)

Stop at first rung that holds:

1. **Does this need to exist?** Speculative need = skip. (YAGNI)
2. **Already in codebase?** Reuse it.
3. **Stdlib does it?** Use it.
4. **Native platform covers it?** `<input type="date">` over picker lib.
5. **Already-installed dependency solves it?** Use it.
6. **One line?** One line.
7. Only then: minimum code that works.

### Axis 2: Anti-slop prose (from stop-slop)

No filler, no formulaic structures, no passive voice, no em-dashes, no hand-holding, no meta-joiners, no self-reference. Be specific. Active voice. Vary rhythm.

### Axis 3: Caveman compression (from caveman)

Output pattern: `[thing] [action] [reason]. [next step].` No self-reference, no invented abbreviations (`cfg`/`impl`/`fn`), no causal arrows (→). Persists every turn. Auto-clarity for security warnings, destructive ops, ambiguity.

## Commands

| Command | What it does |
|---------|-------------|
| `/leanman [lite\|full\|ultra]` | Set compression level |
| `/leanman [wenyan-lite\|wenyan-full\|wenyan-ultra]` | Classical Chinese mode |
| `/leanman-review` | Review staged changes for over-engineering + slop |
| `/leanman-review --all` | Full repo scan |
| `/leanman-help` | Quick reference |
| "stop leanman" / "normal mode" | Revert to normal |

## What's merged

| Source | What's included |
|--------|-----------------|
| [ponytail](https://github.com/DietrichGebert/ponytail) | Code minimalism ladder, YAGNI enforcement, stdlib/native preference |
| [stop-slop](https://github.com/VonAntaraxia/stop-slop) | Slop rules, phrase/structure references, delivery filter, scoring |
| [caveman](https://github.com/JuliusBrussee/caveman) | Output compression, persistence, auto-clarity, wenyan mode, no invented abbreviations |

## Scoring

Score 1-10 per dimension: Directness, Rhythm, Trust, Authenticity, Density. Under 35: revise.

## License

MIT
