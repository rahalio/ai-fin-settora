'use client';

import { DEMO_FINALITY } from '@/lib/demo-data';
import { FinalitySeal } from '@/components/settora/FinalitySeal';

export default function FinalityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Finality attestation registry</h1>
        <p className="text-steel text-sm mt-1">
          Provisional / final under named law / void — legal meaning beside technical events.
        </p>
      </div>

      <div className="space-y-4">
        {DEMO_FINALITY.map((a) => (
          <div
            key={a.attestationId}
            className="border border-white/10 bg-panel px-4 py-4 flex flex-wrap items-center justify-between gap-4"
            style={{ borderRadius: 'var(--radius-sm)' }}
          >
            <div>
              <div className="font-mono text-xs text-steel">{a.attestationId}</div>
              <div className="text-sm mt-1">
                Instruction {a.instructionId.slice(0, 20)}…
              </div>
              <div className="text-xs text-steel mt-1 font-mono">
                {new Date(a.recordedAt).toISOString()}
              </div>
            </div>
            <FinalitySeal
              status={a.status}
              jurisdiction={a.jurisdiction}
              opinionVersion={a.opinionVersion}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
