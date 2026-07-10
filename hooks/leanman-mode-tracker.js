// leanman-mode-tracker.js
// Tracks mode changes between turns. Persists level to config.
const fs = require('fs');
const path = require('path');

const CONFIG_DIR = process.env.CLAUDE_PLUGIN_ROOT || __dirname;
const configPath = path.join(CONFIG_DIR, '..', '.leanman-config.json');

try {
  let config = {};
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  config.lastPrompt = Date.now();
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
} catch (e) {
  // silent fail
}
