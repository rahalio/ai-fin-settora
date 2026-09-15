type Props = {
  id: string;
  regulator: string;
  scope: string;
  active: boolean;
};

export function SupervisorySubscriptionCard({
  id,
  regulator,
  scope,
  active,
}: Props) {
  return (
    <div
      className="border border-white/10 bg-panel px-4 py-3"
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      <div className="flex justify-between items-start gap-3">
        <div>
          <div className="text-sm">{regulator}</div>
          <div className="text-xs text-steel mt-1">scope: {scope}</div>
          <div className="font-mono text-[10px] text-steel mt-2">{id}</div>
        </div>
        <span
          className="text-[10px] uppercase tracking-wider px-2 py-1"
          style={{
            color: active ? 'var(--color-final-mint)' : 'var(--color-steel)',
            border: `1px solid ${active ? 'var(--color-final-mint)' : 'rgba(255,255,255,0.15)'}`,
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {active ? 'active' : 'inactive'}
        </span>
      </div>
    </div>
  );
}
