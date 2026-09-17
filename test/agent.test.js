import test from 'node:test';
import assert from 'node:assert/strict';
import { createAgent } from '../src/index.js';
import { approvalDecision } from '../src/core/approval-policy.js';

test('agent creates a plan for a website task', async () => {
  const agent = createAgent();
  const result = await agent.run('Build a portfolio website');
  assert.equal(result.status, 'planned');
  assert.ok(result.plan.steps.includes('generate implementation'));
});

test('sensitive actions require approval', () => {
  assert.equal(approvalDecision('send an email').allowed, false);
  assert.equal(approvalDecision('send an email', true).allowed, true);
  assert.equal(approvalDecision('research JavaScript').allowed, true);
});
