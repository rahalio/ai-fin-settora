'use client';

import { SupervisorySubscriptionCard } from '@/components/settora/SupervisorySubscriptionCard';

export default function SupervisionPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold">Supervisory views</h1>
        <p className="text-steel text-sm mt-1">
          Authorised regulators subscribe to agreed fields without manual reconcile-then-report.
        </p>
      </div>

      <div className="space-y-3">
        <SupervisorySubscriptionCard
          id="sub_01JDEMOSUB00000000000001"
          regulator="Corridor Supervisor"
          scope="equityPostTrade.agreedFields"
          active
        />
      </div>

      <div
        className="border border-white/10 bg-panel px-4 py-3 font-mono text-xs space-y-2"
        style={{ borderRadius: 'var(--radius-sm)' }}
        aria-live="polite"
      >
        <div className="text-steel uppercase tracking-wider text-[10px]">
          Near-real-time feed
        </div>
        <div>2026-09-15T13:04:11.220Z · dea_…001 · settlementDate=2026-09-17</div>
        <div>2026-09-15T13:04:11.418Z · dea_…001 · currency=AED</div>
      </div>

      <div className="flex gap-2 text-sm">
        {['Grant subscription', 'Audit access', 'Export extract'].map((a) => (
          <button
            key={a}
            type="button"
            className="px-3 py-2 border border-white/15 hover:bg-white/5"
            style={{ borderRadius: 'var(--radius-sm)' }}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}
