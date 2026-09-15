'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  DEMO_AGREED_FIELDS,
  DEMO_BREAKS,
  DEMO_DEALS,
} from '@/lib/demo-data';
import { AgreedStateGrid } from '@/components/settora/AgreedStateGrid';
import { MilestoneTimeline } from '@/components/settora/MilestoneTimeline';
import { SettoraStamp } from '@/components/settora/SettoraStamp';
import { SettledHistoryLock } from '@/components/settora/SettledHistoryLock';

export default function DealPage() {
  const params = useParams<{ dealId: string }>();
  const deal =
    DEMO_DEALS.find((d) => d.dealId === params.dealId) ?? DEMO_DEALS[0];
  const relatedBreak = DEMO_BREAKS.find((b) => b.dealId === deal.dealId);
  const conflicting = relatedBreak?.conflictingFields ?? [];

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-steel">Deal shared state</p>
          <h1 className="text-xl font-mono mt-1">{deal.dealId}</h1>
          <p className="text-sm text-steel mt-1">
            {deal.dealType} · {deal.status} · {deal.externalRef}
          </p>
        </div>
        <SettoraStamp />
      </div>

      <SettledHistoryLock />

      <section>
        <h2 className="text-sm uppercase tracking-wider text-steel mb-3">
          Agreed field grid
        </h2>
        <AgreedStateGrid fields={DEMO_AGREED_FIELDS} conflicting={conflicting} />
      </section>

      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href={`/settlements?dealId=${deal.dealId}`}
          className="px-3 py-2 border border-white/15 hover:bg-white/5"
          style={{ borderRadius: 'var(--radius-sm)' }}
        >
          Generate instruction
        </Link>
        {relatedBreak && (
          <Link
            href={`/breaks/${relatedBreak.breakId}`}
            className="px-3 py-2 border"
            style={{
              borderColor: 'var(--color-tungsten)',
              color: 'var(--color-tungsten)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Open break
          </Link>
        )}
        <Link
          href={`/finality?dealId=${deal.dealId}`}
          className="px-3 py-2 border border-white/15 hover:bg-white/5"
          style={{ borderRadius: 'var(--radius-sm)' }}
        >
          Finality
        </Link>
      </div>

      <section>
        <h2 className="text-sm uppercase tracking-wider text-steel mb-3">
          CA / TF milestones
        </h2>
        <MilestoneTimeline
          items={
            deal.dealType === 'tradeFinance'
              ? [
                  {
                    id: 'm1',
                    type: 'presentment',
                    status: 'attested',
                    attestedBy: 'ptc_tfbank',
                    at: '2026-09-14T09:12:00Z',
                  },
                  {
                    id: 'm2',
                    type: 'acceptance',
                    status: 'attested',
                    attestedBy: 'ptc_csd',
                    at: '2026-09-15T11:40:00Z',
                  },
                ]
              : [
                  {
                    id: 'ca1',
                    type: 'entitlement',
                    status: 'attested',
                    attestedBy: 'ptc_custodian',
                    at: '2026-09-13T16:00:00Z',
                  },
                ]
          }
        />
      </section>
    </div>
  );
}
