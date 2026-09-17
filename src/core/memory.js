export class InMemoryMemory {
  constructor() {
    this.entries = [];
  }

  remember(key, value, metadata = {}) {
    const entry = {
      key,
      value,
      metadata,
      createdAt: new Date().toISOString(),
    };
    this.entries.push(entry);
    return entry;
  }

  search(query) {
    const needle = String(query).toLowerCase();
    return this.entries.filter((entry) =>
      `${entry.key} ${entry.value}`.toLowerCase().includes(needle),
    );
  }
}
