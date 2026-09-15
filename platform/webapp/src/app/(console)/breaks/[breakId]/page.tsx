'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { DEMO_BREAKS } from '@/lib/demo-data';
import { BreakFieldDiff } from '@/components/settora/BreakFieldDiff';

export default function BreakWorkspacePage() {
  const params = useParams<{ breakId: string }>();
  const br =
    DEMO_BREAKS.find((b) => b.breakId === params.breakId) ?? DEMO_BREAKS[0];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <p className="text-xs uppercase tracking-wider text-steel">
          Break exception workspace
        </p>
        <h1 className="text-xl font-mono mt-1">{br.breakId}</h1>
        <p className="text-sm text-steel mt-1">
          Owner {br.ownerParticipantId ?? 'unassigned'} · due{' '}
          {br.dueAt ? new Date(br.dueAt).toLocaleString() : '—'}
        </p>
      </div>

      <BreakFieldDiff
        fields={br.conflictingFields}
        localValues={{ quantity: '250000', settlementDate: '2026-09-17' }}
        counterpartyValues={{ quantity: '249500', settlementDate: '2026-09-18' }}
      />

      <div className="flex flex-wrap gap-2 text-sm">
        {['Assign', 'Resolve', 'Escalate', 'Link evidence'].map((action) => (
          <button
            key={action}
            type="button"
            className="px-3 py-2 border border-white/15 hover:bg-white/5"
            style={{ borderRadius: 'var(--radius-sm)' }}
          >
            {action}
          </button>
        ))}
        <Link
          href={`/deals/${br.dealId}`}
          className="px-3 py-2 border border-white/15 hover:bg-white/5"
          style={{ borderRadius: 'var(--radius-sm)' }}
        >
          Back to deal
        </Link>
      </div>
    </div>
  );
}
