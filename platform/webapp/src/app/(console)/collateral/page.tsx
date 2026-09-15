'use client';

import { DEMO_COLLATERAL } from '@/lib/demo-data';
import { CollateralLockTable } from '@/components/settora/CollateralLockTable';

export default function CollateralPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Collateral &amp; in-flight</h1>
        <p className="text-steel text-sm mt-1">
          See what&apos;s locking margin; free when finality is achieved; early fail warning.
        </p>
      </div>
      <div className="border border-white/10 bg-panel px-4 py-2">
        <CollateralLockTable locks={DEMO_COLLATERAL} />
      </div>
      <div className="flex gap-2 text-sm">
        {['Release on finality', 'Pre-fund on fail risk', 'Export ALM'].map((a) => (
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
