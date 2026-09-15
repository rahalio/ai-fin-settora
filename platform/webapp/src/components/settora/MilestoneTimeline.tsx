type Milestone = {
  id: string;
  type: string;
  status: string;
  attestedBy: string;
  at: string;
};

export function MilestoneTimeline({ items }: { items: Milestone[] }) {
  return (
    <ol className="relative border-l border-white/15 ml-2 space-y-4">
      {items.map((item) => (
        <li key={item.id} className="ml-4">
          <span
            className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full"
            style={{ background: 'var(--color-final-mint)' }}
          />
          <div className="text-xs text-steel font-mono">{item.at}</div>
          <div className="text-sm">
            {item.type} · <span className="text-steel">{item.status}</span>
          </div>
          <div className="text-xs text-steel">attested by {item.attestedBy}</div>
        </li>
      ))}
    </ol>
  );
}
