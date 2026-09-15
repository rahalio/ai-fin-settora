'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NAV = [
  { href: '/', label: 'Shared blotter' },
  { href: '/breaks', label: 'Breaks' },
  { href: '/settlements', label: 'Instructions' },
  { href: '/finality', label: 'Finality' },
  { href: '/collateral', label: 'Collateral' },
  { href: '/participants', label: 'Participants' },
  { href: '/governance', label: 'Governance' },
  { href: '/supervision', label: 'Supervisory' },
  { href: '/provenance', label: 'Provenance' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-slate text-ink">
      <header className="border-b border-white/10 px-6 py-3 flex items-center justify-between bg-panel/80 backdrop-blur">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-display tracking-[0.18em] uppercase text-sm text-ink">
            Settora
          </Link>
          <span className="text-steel text-xs hidden md:inline">
            Shared state · Jurisdictional finality
          </span>
        </div>
        <Link
          href="/login"
          className="text-xs text-steel hover:text-ink transition-colors"
        >
          Session
        </Link>
      </header>
      <div className="flex flex-1 min-h-0">
        <nav className="w-52 shrink-0 border-r border-white/10 bg-panel/40 p-3 space-y-0.5">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'block px-3 py-2 text-sm rounded-[var(--radius-sm)] transition-colors',
                  active
                    ? 'bg-white/10 text-ink'
                    : 'text-steel hover:text-ink hover:bg-white/5',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
