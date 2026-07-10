// leanman-subagent.js
// Injects leanman rules into spawned subagents.
const fs = require('fs');
const path = require('path');

const CONFIG_DIR = process.env.CLAUDE_PLUGIN_ROOT || __dirname;
const configPath = path.join(CONFIG_DIR, '..', '.leanman-config.json');

try {
  let config = {};
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  process.env.LEANMAN_MODE = config.mode || 'full';
  process.env.LEANMAN_ACTIVE = config.active ? 'true' : 'false';
} catch (e) {
  // silent fail
}
