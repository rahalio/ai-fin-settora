'use client';

import { motion } from 'framer-motion';

type Status = 'provisional' | 'final' | 'void';

const STYLES: Record<Status, { label: string; color: string }> = {
  provisional: { label: 'Provisional', color: 'var(--color-tungsten)' },
  final: { label: 'Final under law', color: 'var(--color-final-mint)' },
  void: { label: 'Void', color: 'var(--color-void-red)' },
};

export function FinalitySeal({
  status,
  jurisdiction,
  opinionVersion,
}: {
  status: Status;
  jurisdiction: string;
  opinionVersion?: string;
}) {
  const style = STYLES[status];
  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="inline-flex flex-col gap-1 border px-3 py-2"
      style={{
        borderColor: style.color,
        borderRadius: 'var(--radius-md)',
        color: style.color,
      }}
    >
      <span className="text-xs uppercase tracking-[0.16em] font-medium">
        {style.label}
      </span>
      <span className="text-[11px] text-ink/80">
        {jurisdiction}
        {opinionVersion ? ` · ${opinionVersion}` : ''}
      </span>
    </motion.div>
  );
}
