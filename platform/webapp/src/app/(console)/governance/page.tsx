'use client';

import { RulebookVoteCard } from '@/components/settora/RulebookVoteCard';
import { SettledHistoryLock } from '@/components/settora/SettledHistoryLock';

export default function GovernancePage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold">Consortium governance</h1>
        <p className="text-steel text-sm mt-1">
          Rulebook and schema changes via auditable vote — no silent edits to settled history.
        </p>
      </div>

      <SettledHistoryLock />

      <section className="space-y-2">
        <h2 className="text-sm uppercase tracking-wider text-steel">Open votes</h2>
        <RulebookVoteCard
          proposal="Schema v1.4 — freeze disputed CA entitlement fields"
          vote="for"
          voter="ptc_custodian"
          at="2026-09-15T08:22:00Z"
        />
        <RulebookVoteCard
          proposal="Admit Corridor Supervisor as observer"
          vote="abstain"
          voter="ptc_broker"
          at="2026-09-14T17:05:00Z"
        />
      </section>

      <div className="flex gap-2 text-sm">
        {['Propose change', 'Vote', 'Publish version', 'Suspend participant'].map(
          (a) => (
            <button
              key={a}
              type="button"
              className="px-3 py-2 border border-white/15 hover:bg-white/5"
              style={{ borderRadius: 'var(--radius-sm)' }}
            >
              {a}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
