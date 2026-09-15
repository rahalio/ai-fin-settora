'use client';

import Link from 'next/link';
import { DEMO_BREAKS } from '@/lib/demo-data';

function hoursLeft(dueAt?: string) {
  if (!dueAt) return null;
  return Math.round((new Date(dueAt).getTime() - Date.now()) / 3600_000);
}

export default function BreaksQueuePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Break queue</h1>
        <p className="text-steel text-sm mt-1">
          Time-boxed exception workflows with named owners before fail deadlines.
        </p>
      </div>

      <div className="space-y-2">
        {DEMO_BREAKS.map((b) => {
          const hrs = hoursLeft(b.dueAt);
          const overdue = hrs !== null && hrs < 0;
          return (
            <Link
              key={b.breakId}
              href={`/breaks/${b.breakId}`}
              className="block border border-white/10 bg-panel px-4 py-3 hover:bg-white/[0.03]"
              style={{
                borderRadius: 'var(--radius-sm)',
                borderColor: overdue
                  ? 'var(--color-void-red)'
                  : 'rgba(224,162,58,0.5)',
              }}
            >
              <div className="flex justify-between gap-3">
                <div>
                  <div className="font-mono text-xs">{b.breakId}</div>
                  <div className="text-sm mt-1">
                    Deal {b.dealId.slice(0, 22)}… · {b.conflictingFields.join(', ')}
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="text-steel uppercase tracking-wider">{b.status}</div>
                  <div
                    className="mt-1 font-mono"
                    style={{
                      color: overdue
                        ? 'var(--color-void-red)'
                        : 'var(--color-tungsten)',
                    }}
                  >
                    {hrs === null
                      ? 'no deadline'
                      : overdue
                        ? `${Math.abs(hrs)}h overdue`
                        : `${hrs}h left`}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        {DEMO_BREAKS.length === 0 && (
          <p className="text-steel text-sm">Empty queue — corridor is healthy.</p>
        )}
      </div>
    </div>
  );
}
