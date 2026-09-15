type Lock = {
  lockId: string;
  dealId: string;
  amount: string;
  currency: string;
  status: string;
  failRisk?: string;
};

export function CollateralLockTable({ locks }: { locks: Lock[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-xs uppercase tracking-wider text-steel border-b border-white/10">
          <th className="py-2 font-medium">Lock</th>
          <th className="py-2 font-medium">Deal</th>
          <th className="py-2 font-medium">Amount</th>
          <th className="py-2 font-medium">Status</th>
          <th className="py-2 font-medium">Fail risk</th>
        </tr>
      </thead>
      <tbody>
        {locks.map((lock) => (
          <tr key={lock.lockId} className="border-b border-white/5">
            <td className="py-2 font-mono text-xs">{lock.lockId.slice(0, 18)}…</td>
            <td className="py-2 font-mono text-xs">{lock.dealId.slice(0, 18)}…</td>
            <td className="py-2 font-mono">
              {lock.amount} {lock.currency}
            </td>
            <td className="py-2 text-steel">{lock.status}</td>
            <td
              className="py-2"
              style={{
                color:
                  lock.failRisk === 'high'
                    ? 'var(--color-void-red)'
                    : lock.failRisk === 'medium'
                      ? 'var(--color-tungsten)'
                      : 'var(--color-steel)',
              }}
            >
              {lock.failRisk ?? '—'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
