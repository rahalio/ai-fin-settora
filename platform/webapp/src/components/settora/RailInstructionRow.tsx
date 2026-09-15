type Props = {
  rail: 'csd' | 'ccp' | 'payment';
  status: string;
  instructionId: string;
};

export function RailInstructionRow({ rail, status, instructionId }: Props) {
  return (
    <div
      className="grid grid-cols-[80px_1fr_120px] gap-3 items-center px-3 py-2 bg-panel border border-white/10"
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      <span className="uppercase text-xs tracking-wider text-steel">{rail}</span>
      <span className="font-mono text-xs text-ink/90">{instructionId}</span>
      <span className="text-xs text-right text-steel">{status}</span>
    </div>
  );
}
