// leanman-activate.js
// Reads config and writes mode flag so SKILL.md rules are injected every turn.
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
  config.active = true;
  // Validate stored mode, fall back to full if invalid or missing
  config.mode = VALID_MODES.includes(config.mode) ? config.mode : 'full';
  config.lastActivated = Date.now();
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
} catch (e) {
  // silent fail
}
