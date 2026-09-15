export function SettledHistoryLock() {
  return (
    <div
      className="border px-3 py-2 text-xs text-steel"
      style={{
        borderColor: 'rgba(217,83,79,0.45)',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(217,83,79,0.06)',
      }}
    >
      Settled history is immutable. Silent operator edits are refused (BR-12).
    </div>
  );
}
