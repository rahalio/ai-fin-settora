'use client';

type Props = {
  fields: string[];
  localValues?: Record<string, string>;
  counterpartyValues?: Record<string, string>;
};

export function BreakFieldDiff({
  fields,
  localValues = {},
  counterpartyValues = {},
}: Props) {
  return (
    <div className="space-y-2">
      {fields.map((field) => (
        <div
          key={field}
          className="border px-3 py-2"
          style={{
            borderColor: 'var(--color-tungsten)',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(224,162,58,0.08)',
          }}
        >
          <div className="font-mono text-xs text-tungsten mb-1">{field}</div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-steel">
                Local
              </div>
              <div className="font-mono">{localValues[field] ?? '—'}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-steel">
                Counterparty
              </div>
              <div className="font-mono">
                {counterpartyValues[field] ?? '—'}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
