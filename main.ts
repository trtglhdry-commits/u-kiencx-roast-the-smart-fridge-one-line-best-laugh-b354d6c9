import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of a smart fridge: the "smart" is all surveillance,
// no help. Exact price, concrete artifacts, turn in the second half.
// Gate: 1-160 chars, single line, no trailing newline.
const LINE =
  "My $3,000 smart fridge has Wi-Fi, a touchscreen, and a camera — and its smartest feature is watching me eat ice cream at 2am in 4K.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
