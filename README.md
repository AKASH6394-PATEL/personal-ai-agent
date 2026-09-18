# Personal AI Agent

A modular personal AI agent designed to plan tasks, use tools, request approvals for sensitive actions, maintain task state, and integrate with automation platforms such as n8n.

## V1 Goals

- Natural-language task intake
- Plan -> execute -> verify -> report loop
- Tool abstraction layer
- Approval gates for sensitive actions
- Task state and lightweight memory interfaces
- GitHub-first development workflow
- n8n integration-ready webhook/API boundary
- Automated CI checks
- Higgsfield media-generation integration contract
- YouTube strategy skills for niche, title, script, retention and monetization workflows

## Higgsfield integration

The repository includes a safe adapter and local skill map for the official Higgsfield CLI/skills. Higgsfield's platform/models are proprietary; its public skills repository is an integration layer for coding agents.

Actual generation requires a Higgsfield account and authentication on the machine running the agent. Paid generation should require approval by default.

## Security

Never commit API keys, tokens, passwords, or other secrets. Use environment variables and GitHub Actions secrets.

## Status

V1 foundation is under active development.
