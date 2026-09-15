'use client';

import { DEMO_PARTICIPANTS } from '@/lib/demo-data';

export default function ParticipantsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Participant directory</h1>
        <p className="text-steel text-sm mt-1">
          Assured members; need-to-know permissions; anonymous cannot instruct.
        </p>
      </div>
      <div className="overflow-x-auto border border-white/10 bg-panel/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-steel border-b border-white/10">
              <th className="px-3 py-2">Legal name</th>
              <th className="px-3 py-2">Role</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Assurance</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_PARTICIPANTS.map((p) => (
              <tr key={p.participantId} className="border-b border-white/5">
                <td className="px-3 py-2.5">
                  <div>{p.legalName}</div>
                  <div className="font-mono text-[10px] text-steel">
                    {p.participantId}
                  </div>
                </td>
                <td className="px-3 py-2.5 text-steel">{p.role}</td>
                <td
                  className="px-3 py-2.5"
                  style={{
                    color:
                      p.status === 'suspended'
                        ? 'var(--color-void-red)'
                        : undefined,
                  }}
                >
                  {p.status}
                </td>
                <td className="px-3 py-2.5 font-mono text-xs">{p.assuranceLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2 text-sm">
        {['Admit', 'Suspend', 'Adjust permissions'].map((a) => (
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
