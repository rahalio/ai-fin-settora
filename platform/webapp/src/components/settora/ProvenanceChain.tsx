type Node = { holderId: string; event: string; at: string };

export function ProvenanceChain({ chain }: { chain: Node[] }) {
  return (
    <div className="space-y-2">
      {chain.map((node, i) => (
        <div key={`${node.holderId}-${i}`} className="flex items-stretch gap-3">
          <div className="flex flex-col items-center w-4">
            <span
              className="h-3 w-3 rounded-full border"
              style={{ borderColor: 'var(--color-final-mint)' }}
            />
            {i < chain.length - 1 && (
              <span className="flex-1 w-px bg-white/20 my-1" />
            )}
          </div>
          <div className="pb-3">
            <div className="font-mono text-sm">{node.holderId}</div>
            <div className="text-xs text-steel">
              {node.event} · {node.at}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
