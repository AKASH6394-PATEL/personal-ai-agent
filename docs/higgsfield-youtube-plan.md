# Higgsfield + YouTube plan

## What is actually open source?

The Higgsfield platform and models are proprietary. Higgsfield publishes an official public `higgsfield-ai/skills` repository that teaches coding agents how to use the platform through its CLI/skills. This distinction matters: we should integrate with the official tools, not claim that the generation models themselves are open source.

## What the agent can eventually do

1. Research a niche and generate topic/title candidates.
2. Build a retention-first script.
3. Analyze an existing transcript/script for hook, re-hooks and drop-off risks.
4. Produce monetization/offer ideas.
5. Generate visual assets through Higgsfield.
6. Generate thumbnails through the dedicated thumbnail skill.
7. Create narrated explainers when appropriate.
8. Build or update a website when requested.
9. Keep all generated jobs/results in task state and ask for approval before paid generation or publishing.

## Reference prompt conversion

The five prompts shown in the user's screenshots are represented in `skills/youtube-strategy/SKILL.md`.

## Production loop

Research -> title -> script -> retention review -> media generation -> thumbnail -> final review -> human approval -> publish.

## Current limitation

The GitHub repository now contains the integration contract and strategy skills. Actual Higgsfield generation still requires the user to install the official CLI/skills and authenticate a Higgsfield account on the machine where the agent runs.
