# /leanman-review [--all]

Review diffs for over-engineering, AI-slop prose, and caveman compression violations.

- **no flag**: review staged/uncommitted diff
- **--all**: full repo scan

Code tags: delete, stdlib, native, dep, yagni, shrink.
Prose tags: slop (filler, passive, em-dash, formulaic, pull-quote, hand-hold).
Caveman tags: self-reference, invented-abbrev, arrow, clarity.

Caveman review rules:
- self-reference: agent names its style. Drop framing.
- invented-abbrev: cfg/impl/req/res/fn. Use full word.
- arrow: → where colon works. Replace.
- clarity: compressed prose ambiguous. Add articles or restructure.

Scoring: Code Leanness + Code Directness + Prose Authenticity + Prose Density + Caveman Compression = /50. Under 35: REVISE.
