'use client';

import { SettoraStamp } from '@/components/settora/SettoraStamp';
import { RailInstructionRow } from '@/components/settora/RailInstructionRow';

export default function SettlementsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Settlement instruction desk</h1>
          <p className="text-steel text-sm mt-1">
            Instructions from agreed state to incumbent CSD / CCP / payment rails.
          </p>
        </div>
        <SettoraStamp />
      </div>

      <div className="space-y-2">
        <RailInstructionRow
          rail="csd"
          status="sent"
          instructionId="ins_01JDEMOINS0000000000001"
        />
        <RailInstructionRow
          rail="payment"
          status="created"
          instructionId="ins_01JDEMOPAY0000000000002"
        />
      </div>

      <div className="flex gap-2 text-sm">
        {['Send', 'Cancel pre-rail', 'Retry'].map((a) => (
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
