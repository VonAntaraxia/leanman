---
name: leanman-review
description: "Two-track review: code over-engineering + prose AI-slop. One line per finding."
homepage: https://github.com/VonAntaraxia/leanman
license: MIT
---

# Leanman Review

One line per finding: location, what to cut, fix. Two tracks.

## Caveman mode

Output review comments terse. No filler, no throat-clearing, no pleasantries. Fragments OK. No self-reference. No decorative tables. Technical terms exact. Code symbols in backticks. Standard acronyms OK (DB/API/HTTP). No invented abbreviations (cfg/impl/fn).

**Drop:** "I noticed that...", "It seems like...", "You might want to consider...", restating what the line does. **Keep:** exact line numbers, concrete fix, the *why* if not obvious.

Optional severity prefix for mixed findings:
- `bug:` broken behavior
- `risk:` works but fragile
- `nit:` style, optional
- `q:` genuine question

Full clarity when: security issues, architectural disagreements, author new to codebase. Resume terse after.

## Tags

### Code
- `delete:` dead code, speculative feature. Replace: nothing.
- `stdlib:` stdlib covers it. Name the function.
- `native:` platform does it. Name the feature.
- `dep:` installed dep overkill, few lines inline replace it. Name the inline.
- `yagni:` abstraction with one impl, config nobody sets.
- `shrink:` same logic, fewer lines.

### Prose
- `slop:` AI tell (filler, passive, vague, em-dash, formulaic structure, pull-quote, narrator-from-distance, rhythm, hand-holding). Name the tell.

## Scoring

Per file: Code Leanness 1-10 + Code Directness 1-10 + Prose Authenticity 1-10 + Prose Density 1-10 = /40. Under 28: REVISE.

## Format

```
src/api.ts: 24/40 (REVISE)
  Code: • L42: yagni: IStorage, one impl. Inline.
  Prose: • L3: slop: filler "simply". Drop.
```

## Commands

- `/leanman-review` -- review staged/uncommitted changes
- `<skill name="leanman-review">` in agent prompt -- activate
- `leanman-review --all` -- full codebase scan
