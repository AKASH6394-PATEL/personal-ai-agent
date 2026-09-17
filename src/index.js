import { PersonalAgent } from './core/agent.js';
import { InMemoryMemory } from './core/memory.js';
import { InMemoryTaskStore } from './core/task-store.js';

export function createAgent(options = {}) {
  return new PersonalAgent({
    memory: options.memory ?? new InMemoryMemory(),
    taskStore: options.taskStore ?? new InMemoryTaskStore(),
    tools: options.tools ?? {},
    approvalPolicy: options.approvalPolicy,
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const task = process.argv.slice(2).join(' ') || 'Build my personal AI agent';
  const agent = createAgent();
  console.log(JSON.stringify(await agent.run(task), null, 2));
}
