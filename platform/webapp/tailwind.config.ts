import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        slate: 'var(--color-slate)',
        panel: 'var(--color-panel)',
        tungsten: 'var(--color-tungsten)',
        'final-mint': 'var(--color-final-mint)',
        'void-red': 'var(--color-void-red)',
        steel: 'var(--color-steel)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;
