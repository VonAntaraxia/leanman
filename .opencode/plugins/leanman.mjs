// Leanman OpenCode plugin
// Injects ruleset every turn at active level. Adds /leanman commands.

const plugin = {
  name: 'leanman',
  description: 'Lean code + anti-slop prose. /leanman lite|full|ultra',

  hooks: {
    beforePrompt: async ({ config }) => {
      const mode = config?.leanman?.mode || 'full';
      return { rules: [`Leanman active (${mode} mode). Follow SKILL.md rules.`] };
    }
  },

  commands: {
    leanman: {
      description: 'Set leanman level: lite|full|ultra|off',
      args: ['level'],
      handler: async (args, { config }) => {
        const level = args[0];
        if (!level || !['lite', 'full', 'ultra', 'off'].includes(level)) {
          return `Current leanman mode: ${config?.leanman?.mode || 'full'}`;
        }
        return `Leanman set to ${level}`;
      }
    }
  }
};

export default plugin;
