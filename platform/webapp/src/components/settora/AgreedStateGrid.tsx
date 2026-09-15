'use client';

import { motion } from 'framer-motion';

type Props = {
  fields: Record<string, { value: string; parties: string[] }>;
  conflicting?: string[];
};

export function AgreedStateGrid({ fields, conflicting = [] }: Props) {
  return (
    <div className="grid gap-2">
      {Object.entries(fields).map(([key, field]) => {
        const broken = conflicting.includes(key);
        const agreed = field.parties.length > 1 && !broken;
        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16 }}
            className="grid grid-cols-[140px_1fr_120px] gap-3 items-center px-3 py-2 bg-panel border border-white/10"
            style={{
              borderRadius: 'var(--radius-sm)',
              borderColor: broken
                ? 'var(--color-tungsten)'
                : agreed
                  ? 'rgba(60,184,154,0.35)'
                  : undefined,
            }}
          >
            <span className="font-mono text-xs text-steel">{key}</span>
            <span className="font-mono text-sm">{field.value}</span>
            <span className="text-xs text-steel text-right">
              {broken ? 'break' : agreed ? 'agreed' : 'local-only'}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
