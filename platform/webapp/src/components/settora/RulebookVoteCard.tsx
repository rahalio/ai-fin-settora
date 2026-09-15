type Props = {
  proposal: string;
  vote: 'for' | 'against' | 'abstain';
  voter: string;
  at: string;
};

export function RulebookVoteCard({ proposal, vote, voter, at }: Props) {
  return (
    <div
      className="border border-white/10 bg-panel px-4 py-3"
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      <div className="text-sm">{proposal}</div>
      <div className="mt-2 flex gap-3 text-xs text-steel">
        <span
          style={{
            color:
              vote === 'for'
                ? 'var(--color-final-mint)'
                : vote === 'against'
                  ? 'var(--color-void-red)'
                  : undefined,
          }}
        >
          {vote}
        </span>
        <span>{voter}</span>
        <span className="font-mono">{at}</span>
      </div>
    </div>
  );
}
