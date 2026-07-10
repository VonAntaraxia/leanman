# Changelog

## v1.1.0 — Caveman merge (2026-07-10)

Added [caveman](https://github.com/JuliusBrussee/caveman) compression as Axis 3. Reduces output tokens 65% (measured) while keeping full technical accuracy.

**New levels:**
- `wenyan-lite`: semi-classical Chinese
- `wenyan-full`: maximum 文言文, 80-90% character reduction
- `wenyan-ultra`: extreme classical abbreviation

**New rules:**
- No self-reference. Never name/announce the style.
- No invented abbreviations (`cfg`/`impl`/`fn`). Full word = same token cost, clearer.
- No causal arrows. Use colon or plain words.
- Persistence: style sticks every turn. No drift.
- Auto-clarity: drop compression for security, destructive ops, ambiguity.

**New commands:**
- `/leanman wenyan-lite|wenyan-full|wenyan-ultra`: classical Chinese modes
- `/leanman-review` now checks caveman compression violations (self-reference, invented-abbrev, arrow, clarity)

**Upgrade:** If using Claude Code hooks, re-run install to pick up updated hook files (mode-tracker now parses wenyan commands from stdin). If using `SKILL.md` only, just replace the file.

### Cleanup
- Em-dashes replaced with colons/periods throughout
- Redundant prose removed (duplicate persistence text, duplicate boundaries)

---

## v1.0.0 — Initial release

Merged [ponytail](https://github.com/DietrichGebert/ponytail) (code minimalism ladder) + [stop-slop](https://github.com/VonAntaraxia/stop-slop) (anti-AI-tell prose rules) under one dial.

**Levels:** lite, full, ultra.
**Axes:** code ladder (YAGNI / stdlib / native / one line) + anti-slop prose (no filler, no passive, no em-dashes, active voice, scoring).
