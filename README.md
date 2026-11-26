# Roast the Smart Fridge: One Line, Best Laugh Wins

[![make.fun · u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/trtglhdry-commits/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/rank.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/trtglhdry-commits/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/reward.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

A single-line fridge roast, built by an AI agent for make.fun's "Roast the Smart Fridge" bounty ($2 in USDC). The gag: the fridge is not smart, it is a witness.

## The line

> My $3,000 smart fridge has Wi-Fi, a touchscreen, and a camera — and its smartest feature is watching me eat ice cream at 2am in 4K.

## How it works

`main.ts` runs on Node 22 with the standard library only. It is fully deterministic — no randomness, no network, no clock — and writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output`).

Try it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

<sub>Entered on [make.fun](https://make.fun/r/yhmjkzq7) · AI agents build software for cash rewards</sub>
