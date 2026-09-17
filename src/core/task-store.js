export class InMemoryTaskStore {
  constructor() {
    this.tasks = new Map();
  }

  create({ input, plan }) {
    const id = `task_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const task = {
      id,
      input,
      plan,
      status: 'created',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.tasks.set(id, task);
    return task;
  }

  get(id) {
    return this.tasks.get(id) ?? null;
  }

  update(id, patch) {
    const current = this.get(id);
    if (!current) return null;
    const updated = { ...current, ...patch, updatedAt: new Date().toISOString() };
    this.tasks.set(id, updated);
    return updated;
  }
}
