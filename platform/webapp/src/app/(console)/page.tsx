'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { DEMO_BREAKS, DEMO_DEALS } from '@/lib/demo-data';
import { SettoraStamp } from '@/components/settora/SettoraStamp';

export default function BlotterPage() {
  const overdue = DEMO_BREAKS.filter(
    (b) => b.dueAt && new Date(b.dueAt).getTime() < Date.now() + 8 * 3600_000,
  );

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-semibold">Shared blotter</h1>
          <p className="text-steel text-sm mt-1 max-w-xl">
            What&apos;s agreed, what&apos;s broken, what&apos;s awaiting finality —
            across corridors.
          </p>
        </div>
        <SettoraStamp />
      </div>

      {overdue.length > 0 && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border px-4 py-3 text-sm"
          style={{
            borderColor: 'var(--color-tungsten)',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(224,162,58,0.1)',
          }}
          role="status"
        >
          {overdue.length} break{overdue.length === 1 ? '' : 's'} approaching
          fail-to-settle deadline — open exception workspace.
        </motion.aside>
      )}

      <div className="overflow-x-auto border border-white/10 bg-panel/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-steel border-b border-white/10">
              <th className="px-3 py-2 font-medium">Deal</th>
              <th className="px-3 py-2 font-medium">Type</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Breaks</th>
              <th className="px-3 py-2 font-medium">Ref</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_DEALS.map((deal, i) => (
              <motion.tr
                key={deal.dealId}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.16 }}
                className="border-b border-white/5 hover:bg-white/[0.03]"
              >
                <td className="px-3 py-2.5">
                  <Link
                    href={`/deals/${deal.dealId}`}
                    className="font-mono text-xs text-ink hover:underline"
                  >
                    {deal.dealId}
                  </Link>
                </td>
                <td className="px-3 py-2.5 text-steel">{deal.dealType}</td>
                <td className="px-3 py-2.5">{deal.status}</td>
                <td
                  className="px-3 py-2.5 font-mono"
                  style={{
                    color:
                      deal.breakCount > 0
                        ? 'var(--color-tungsten)'
                        : 'var(--color-steel)',
                  }}
                >
                  {deal.breakCount > 0 ? (
                    <Link href={`/breaks/${DEMO_BREAKS[0]?.breakId}`}>
                      {deal.breakCount}
                    </Link>
                  ) : (
                    0
                  )}
                </td>
                <td className="px-3 py-2.5 font-mono text-xs text-steel">
                  {deal.externalRef}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
