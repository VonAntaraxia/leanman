# leanman

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![GitHub Repo stars](https://img.shields.io/github/stars/VonAntaraxia/leanman?style=flat&logo=github)

Lean code, lean words, no AI slop.

## Why Leanman?

AI assistants over-build. They add abstractions you don't need, import libs they already have, explain the obvious, qualify every claim, and write prose that sounds like a press release.

You fix output on two fronts: the code and the explanation. That's two contexts to hold, two fights per prompt. One dial that controls both costs less.

Leanman merges three existing approaches into one toggle. Code side: ponytail's ladder (YAGNI, stdlib, native, one line). Prose side: caveman's terseness + stop-slop's anti-AI tells. No dual-wielding. Set the level, both follow.

**Merges three sources:**

- **[ponytail](https://github.com/DietrichGebert/ponytail)** -- code minimalism ladder. YAGNI first, stdlib second, native third, one line over one file.
- **[caveman](https://github.com/VonAntaraxia/caveman)** -- terse prose. Fragments OK. No pleasantries. No self-reference.
- **[stop-slop](https://github.com/hvpandya/stop-slop)** -- kill AI tells. No filler, no passive, no formulaic structures, no em-dashes, no hand-holding.

---

## leanman

Controls two axes.

### Code (the ladder)

Stop at first rung that holds:

1. This need to exist? (YAGNI)
2. Already in codebase? Reuse.
3. Stdlib does it? Use it.
4. Native platform covers it? Pick that.
5. Installed dep solves it? That.
6. One line? One line.
7. Minimum code that works.

Three levels: **lite** (prefer simple), **full** (ladder enforced, default), **ultra** (deletion first).

### Prose (anti-slop)

Three layers. Level controls terseness; slop rules apply at all levels.

**Lite:** drops filler, hedging, pleasantries. Professional but tight.
**Full:** above + drops articles, fragments OK, short synonyms.
**Ultra:** bare fragments. One word if one word does it.

Slop rules all levels: no filler adverbs, no passive, no binary contrasts, no throat-clearing, no rhetorical setups, no false agency, no em-dashes, no hand-holding, no pull-quote language, no meta-joiners.

### Output

Code first. Then max 3 lines: what skipped, when add, risk.

```
[code]: skipped [X], add when [Y].
```

### Commands

- `/leanman lite|full|ultra` -- set level
- `<skill>` in agent prompt -- activate
- `stop leanman` / `normal mode` -- revert

---

## leanman-review

Two-track review. One line per finding.

**Code track:** tags `delete:`, `stdlib:`, `native:`, `dep:`, `yagni:`, `shrink:`.
**Prose track:** tag `slop:` with the tell name.

Score per file: Code Leanness 1-10 + Code Directness 1-10 + Prose Authenticity 1-10 + Prose Density 1-10 = /40. Under 28: REVISE.

Caveman mode: terse output. Optional severity prefixes: `bug:`, `risk:`, `nit:`, `q:`.

### Commands

- `/leanman-review` -- review staged/uncommitted changes
- `<skill name="leanman-review">` in agent prompt -- activate
- `leanman-review --all` -- full codebase scan

---

## Install

```json
// .mcp.json or agent config
{
  "skills": {
    "leanman": "github:VonAntaraxia/leanman"
  }
}
```

Or clone this repo into `.agents/skills/`:

```bash
npx skills add https://github.com/VonAntaraxia/leanman --skill leanman --yes
npx skills add https://github.com/VonAntaraxia/leanman --skill leanman-review --yes
```

## License

MIT
