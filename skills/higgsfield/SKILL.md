---
name: higgsfield
version: 0.1.0
description: Prepare prompts, shot lists and production instructions for Higgsfield. For zero-cost generation, the user generates on higgsfield.ai manually. Use automated/API surfaces only when the user explicitly chooses a credit-consuming workflow.
---

# Higgsfield Skill

This repository integrates with the official public Higgsfield Skills project rather than copying its implementation.

## Official skill families currently available

- higgsfield-generate — image/video/3D/audio generation, Marketing Studio and Virality Predictor
- higgsfield-soul-id — identity-consistent characters
- higgsfield-product-photoshoot — product imagery
- higgsfield-brandkit — brand identity and brandbook workflows
- higgsfield-marketplace-cards — marketplace/A+ product cards
- higgsfield-websites — full-stack website build/edit/deploy
- higgsfield-video-explainer — narrated explainers
- higgsfield-youtube-thumbnail — YouTube thumbnails and vertical covers
- higgsfield-game-generation — playable browser games and game assets

## Agent routing

Use the narrowest skill that matches the request. Use higgsfield-generate for generic media generation. Use specialized skills for thumbnails, explainers, websites, product photos, brand systems, games or identity.

## Important

Higgsfield is proprietary; the official platform/models are not open source. The public higgsfield-ai/skills repository is an agent-integration/skills repository.

Never store Higgsfield credentials in this repo. Free-first rule: use the Higgsfield website for free generations when available. Do not route free-generation work through MCP, CLI, plugins, Canvas, or other automated surfaces because those generations can deduct credits. Never enable paid generation unless the user explicitly asks for it.
