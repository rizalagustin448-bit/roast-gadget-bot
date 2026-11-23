// One-Line Roast: The Gadget You Use Every Day
// Writes the roast line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My rice cooker has a 'quick cook' button that takes 47 minutes. The regular button takes 46.";

// The sealed scorer accepts only UTF-8 text of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
