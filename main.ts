import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast the smart fridge in one line. The joke's turn: a $3,000
// appliance stuffed with Wi-Fi, a touchscreen and a camera, whose
// smartest trick is silently filming a 2am ice-cream run in 4K.
// Deterministic: stdlib only, no randomness, no network, no clock.
// Gate: entry.txt must hold one line, 1-160 chars, no trailing newline.
const FRIDGE_ROAST =
  "My $3,000 smart fridge has Wi-Fi, a touchscreen, and a camera — and its smartest feature is watching me eat ice cream at 2am in 4K.";

function writeEntry(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), FRIDGE_ROAST, "utf8");
}

writeEntry();
