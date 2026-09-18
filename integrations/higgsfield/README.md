# Higgsfield integration

## Verification

The viral post shown by the user is partly correct but misleading. Higgsfield announced a $400M Series B at a $5.4B valuation on August 17, 2026. That financing announcement does not mean the entire Higgsfield platform or proprietary models were open-sourced.

What is public is the official Higgsfield AI Skills repository: an agent-skills/CLI integration layer published under MIT. It currently documents nine skills for generation, Soul ID, product photos, brand kits, marketplace cards, websites, explainers, YouTube thumbnails and browser games.

Official source: https://github.com/higgsfield-ai/skills

## What this adds to our agent

- Generate images, video, audio and 3D assets.
- Create reusable identity/character workflows.
- Generate product photos and marketplace cards.
- Build/edit/deploy websites.
- Create narrated explainers and YouTube thumbnails.
- Build browser games.
- Use Marketing Studio and Virality Predictor where supported.

## Setup

Install the official skills with: npx skills add higgsfield-ai/skills

Authenticate on the machine that runs the agent with: higgsfield auth login

Keep all credentials outside Git. The official Higgsfield repository is the source of truth because model names and commands can change.

## Approval

Generation can consume paid credits. Our Personal AI Agent therefore requires approval before paid generation by default. Publishing, purchases, account/security changes and destructive actions also require approval.
