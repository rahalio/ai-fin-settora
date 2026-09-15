'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { setApiKey } from '@/services/shared/infrastructure/auth-tokens';

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          'radial-gradient(ellipse at 20% 0%, #1a2838 0%, var(--color-slate) 55%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md"
      >
        <p className="text-sm uppercase tracking-[0.22em] text-steel">Settora</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight">
          Shared state.
          <br />
          Jurisdictional finality.
        </h1>
        <p className="mt-3 text-steel text-sm max-w-sm">
          Multi-party post-trade agreement console for settlements, collateral,
          and consortium ops.
        </p>

        <button
          type="button"
          className="mt-8 w-full py-3 text-sm font-medium bg-ink text-slate hover:opacity-90 transition-opacity"
          style={{ borderRadius: 'var(--radius-sm)' }}
          onClick={() => {
            setApiKey('settora_demo_local_dev_key');
            window.location.href = '/';
          }}
        >
          Enter console
        </button>

        <p className="mt-4 text-xs text-steel">
          Demo uses local API key storage. Wire identity login when the API is up.
        </p>
        <Link href="/" className="mt-6 inline-block text-xs text-steel hover:text-ink">
          Skip to blotter →
        </Link>
      </motion.div>
    </div>
  );
}
