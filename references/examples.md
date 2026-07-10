# Before/After Examples

## Example 1: Coding Task

**You ask:** Add a date picker to this form.

**Before (normal agent):**
Installs flatpickr, writes a wrapper component, adds a stylesheet, starts discussing timezones.

**After (leanman):**
```html
<input type="date">
```
Native input. No picker lib.

---

## Example 2: Throat-Clearing + Binary Contrast

**Before:**
> "Here's the thing: building products is hard. Not because the technology is complex. Because people are complex. Let that sink in."

**After:**
> "Building products is hard. Technology is manageable. People aren't."

**Changes:** Removed opener, binary contrast structure, and emphasis crutch. Direct statements.

---

## Example 3: Filler + Unnecessary Reassurance

**Before:**
> "It turns out that most teams struggle with alignment. The uncomfortable truth is that nobody wants to admit they're confused. And that's okay."

**After:**
> "Teams struggle with alignment. Nobody admits confusion."

**Changes:** Cut hedging, removed throat-clearing phrases, deleted permission-granting ending.

---

## Example 4: Business Jargon Stack

**Before:**
> "In today's fast-paced landscape, we need to lean into discomfort and navigate uncertainty with clarity. This matters because your competition isn't waiting."

**After:**
> "Move faster. Your competition is."

**Changes:** Eliminated jargon entirely. Core message in three words.

---

## Example 5: Dramatic Fragmentation

**Before:**
> "Speed. Quality. Cost. You can only pick two. That's it. That's the tradeoff."

**After:**
> "Speed, quality, cost—pick two."

**Changes:** Single sentence. No performative emphasis.

---

## Example 6: General Question

**You ask:** Why does my React component re-render every keystroke?

**Before (normal agent):**
"A common issue in React applications is unintended re-renders caused by new object references being created on every render cycle..."

**After (leanman):**
> New object ref each render. Inline object prop = new ref = re-render. Wrap in useMemo.
