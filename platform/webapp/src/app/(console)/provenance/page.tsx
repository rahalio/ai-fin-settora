'use client';

import { ProvenanceChain } from '@/components/settora/ProvenanceChain';

export default function ProvenancePage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold">Provenance query</h1>
        <p className="text-steel text-sm mt-1">
          Asset / rehypothecation chain within permissions for financing desks and risk.
        </p>
      </div>

      <label className="block text-sm">
        <span className="text-xs uppercase tracking-wider text-steel">Asset id</span>
        <input
          defaultValue="ASSET-ISIN-AE000A1XXXXX"
          className="mt-1 w-full bg-panel border border-white/15 px-3 py-2 font-mono text-sm outline-none focus:border-white/30"
          style={{ borderRadius: 'var(--radius-sm)' }}
        />
      </label>

      <ProvenanceChain
        chain={[
          {
            holderId: 'ptc_custodian',
            event: 'custody intake',
            at: '2026-08-01T10:00:00Z',
          },
          {
            holderId: 'ptc_broker',
            event: 'financing pledge',
            at: '2026-08-20T14:22:00Z',
          },
          {
            holderId: 'ptc_tfbank',
            event: 'rehypothecation (permissioned)',
            at: '2026-09-02T09:11:00Z',
          },
        ]}
      />

      <button
        type="button"
        className="px-3 py-2 border border-white/15 text-sm hover:bg-white/5"
        style={{ borderRadius: 'var(--radius-sm)' }}
      >
        Export evidence pack
      </button>
    </div>
  );
}
