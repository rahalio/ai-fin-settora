export function SettoraStamp({ className = '' }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 border border-white/20 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-steel ${className}`}
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      <span className="text-ink">Settora</span>
      <span aria-hidden>·</span>
      <span>shared state seal</span>
    </div>
  );
}
