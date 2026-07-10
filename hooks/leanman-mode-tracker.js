// leanman-mode-tracker.js
// Tracks mode changes, parses /leanman slash commands with wenyan support.
const fs = require('fs');
const path = require('path');

const VALID_MODES = ['lite', 'full', 'ultra', 'wenyan-lite', 'wenyan-full', 'wenyan-ultra', 'off'];
const CONFIG_DIR = process.env.CLAUDE_PLUGIN_ROOT || __dirname;
const configPath = path.join(CONFIG_DIR, '..', '.leanman-config.json');

try {
  let config = {};
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }

  // Read stdin for slash commands (Claude Code sends JSON with prompt field)
  const stdin = fs.readFileSync(0, 'utf-8').trim();
  if (stdin) {
    try {
      const input = JSON.parse(stdin);
      const prompt = (input.prompt || input.message || '').trim();

      // Match /leanman <mode> or just /leanman (toggle to default)
      const match = prompt.match(/^\/leanman(?:\s+(\S+))?$/i);
      if (match) {
        const arg = (match[1] || '').toLowerCase();

        if (arg === 'off') {
          config.active = false;
          config.mode = 'full';
        } else if (arg === '' || arg === 'full') {
          config.active = true;
          config.mode = 'full';
        } else if (VALID_MODES.includes(arg)) {
          config.active = true;
          config.mode = arg;
        }
        // else: invalid arg, ignore

        // Emit hookSpecificOutput so model knows mode changed
        const status = config.active ? `leanman ${config.mode}` : 'leanman off';
        const output = JSON.stringify({
          hookSpecificOutput: `[leanman mode: ${status}]`
        });
        process.stdout.write(output + '\n');
      }

      // Natural-language activation
      const lower = prompt.toLowerCase();
      if (/\b(activate leanman|turn on leanman|leanman mode|talk like leanman)\b/.test(lower)) {
        config.active = true;
        config.mode = config.mode || 'full';
      } else if (/\b(stop leanman|disable leanman|normal mode|deactivate leanman)\b/.test(lower)) {
        config.active = false;
        config.mode = 'full';
      }
    } catch (e) {
      // stdin not JSON or empty — not a slash command turn, just track
    }
  }

  config.lastPrompt = Date.now();
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
} catch (e) {
  // silent fail
}
