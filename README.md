# Personal AI Agent

A modular personal AI agent designed to plan tasks, use tools, request approvals for sensitive actions, maintain task state, and integrate with automation platforms such as n8n.

## V1 foundation

- Natural-language task intake
- Plan -> execute -> verify -> report architecture
- Tool abstraction layer
- Approval gates for sensitive actions
- Task state and lightweight memory
- GitHub-first development workflow
- n8n integration-ready architecture
- Automated CI checks

## New creative layer

### Free-first Higgsfield workflow

The agent prepares research, scripts, shot lists and ready-to-paste Higgsfield prompts. Free generation is performed on higgsfield.ai. Automated Higgsfield surfaces are not used for the free path because Higgsfield states that generations through MCP, CLI, plugins and other automated surfaces can deduct credits.

- Higgsfield official-skill integration contract
- YouTube niche/title/retention/script/monetization skill
- Visual-production handoff from YouTube strategy to Higgsfield
- Cost/approval guardrails for paid generation

## Important Higgsfield note

The official public resource is the Higgsfield AI Skills repository. It provides agent skills and CLI workflows; it is not the same thing as open-sourcing Higgsfield's entire proprietary platform or model weights.

Official source: https://github.com/higgsfield-ai/skills

## Security

Never commit API keys, tokens, passwords, or other secrets. Use environment variables and GitHub Actions secrets.

## Status

V1 foundation and Higgsfield/YouTube skill layer are under active development.
