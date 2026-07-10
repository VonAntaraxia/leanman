// leanman-subagent.js
// Injects leanman rules into spawned subagents. Validates wenyan modes.
const fs = require('fs');
const path = require('path');

const VALID_MODES = ['lite', 'full', 'ultra', 'wenyan-lite', 'wenyan-full', 'wenyan-ultra'];
const CONFIG_DIR = process.env.CLAUDE_PLUGIN_ROOT || __dirname;
const configPath = path.join(CONFIG_DIR, '..', '.leanman-config.json');

try {
  let config = {};
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  process.env.LEANMAN_MODE = VALID_MODES.includes(config.mode) ? config.mode : 'full';
  process.env.LEANMAN_ACTIVE = config.active ? 'true' : 'false';
} catch (e) {
  // silent fail
}
