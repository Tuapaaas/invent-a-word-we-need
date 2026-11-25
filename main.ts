// Invent a Word We Need — entry program.
// Coins one new English word and defines it in a single line (<=140 chars),
// written to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Miswave \u2014 to wave back at someone who was waving at the person behind you, then pretend you meant it.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
  mkdirSync(outDir, { recursive: true });
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars}`);
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
