import { spawn } from 'node:child_process';

export function createHiggsfieldCli({ command = process.env.HIGGSFIELD_CLI ?? 'higgsfield' } = {}) {
  const run = (args, { timeoutMs = 30 * 60 * 1000 } = {}) => new Promise((resolve, reject) => {
    const child = spawn(command, args, { env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => {
      child.kill('SIGTERM');
      reject(new Error('Higgsfield command timed out'));
    }, timeoutMs);

    child.stdout.on('data', (chunk) => { stdout += chunk.toString(); });
    child.stderr.on('data', (chunk) => { stderr += chunk.toString(); });
    child.on('error', (error) => { clearTimeout(timer); reject(error); });
    child.on('close', (code) => {
      clearTimeout(timer);
      if (code !== 0) {
        reject(new Error(`Higgsfield CLI exited with code ${code}: ${stderr.trim()}`));
        return;
      }
      resolve({ stdout: stdout.trim(), stderr: stderr.trim() });
    });
  });

  return {
    async generate({ model, prompt, extraArgs = [] } = {}) {
      if (!model || !prompt) throw new Error('model and prompt are required');
      return run(['generate', 'create', model, '--prompt', prompt, ...extraArgs, '--wait']);
    },
    async analyzeVirality(videoPath) {
      if (!videoPath) throw new Error('videoPath is required');
      return run(['virality', 'predict', videoPath]);
    },
    async status() {
      return run(['account', 'status'], { timeoutMs: 30_000 });
    },
  };
}
