export class PersonalAgent {
  constructor({ tools = {}, approvalPolicy, memory, taskStore } = {}) {
    this.tools = tools;
    this.approvalPolicy = approvalPolicy;
    this.memory = memory;
    this.taskStore = taskStore;
  }

  async run(task) {
    if (!task || typeof task !== 'string' || !task.trim()) {
      throw new Error('Task must be a non-empty string.');
    }

    const normalizedTask = task.trim();
    const plan = this.plan(normalizedTask);
    const taskRecord = this.taskStore?.create({ input: normalizedTask, plan }) ?? { input: normalizedTask, plan };

    return {
      ...taskRecord,
      status: 'planned',
      message: 'Task understood and planned. Tool execution will be enabled as integrations are connected.',
    };
  }

  plan(task) {
    const lower = task.toLowerCase();
    const steps = [];

    if (/(website|web site|landing page|webapp|web app)/.test(lower)) {
      steps.push('understand website requirements', 'design structure and UX', 'generate implementation', 'test and verify', 'prepare deployment');
    } else if (/(github|repo|repository|code)/.test(lower)) {
      steps.push('inspect repository context', 'plan code changes', 'implement changes', 'run verification', 'prepare commit or pull request');
    } else if (/(email|mail|message|send)/.test(lower)) {
      steps.push('draft requested communication', 'check approval policy', 'send only after required approval');
    } else {
      steps.push('understand the goal', 'identify required tools', 'execute permitted actions', 'verify the result', 'report completion');
    }

    return { goal: task, steps };
  }
}
