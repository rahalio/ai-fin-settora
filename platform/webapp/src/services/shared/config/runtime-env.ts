export type RuntimeEnv = {
  API_BASE_URL?: string;
  SANDBOX?: boolean | string;
};

function readWindowEnv(): RuntimeEnv | null {
  if (typeof window === 'undefined') return null;
  const env = (window as unknown as { env?: RuntimeEnv }).env;
  if (!env || typeof env !== 'object') return null;
  return env;
}

export function getApiBaseUrl(): string {
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_API_URL) {
    const v = process.env.NEXT_PUBLIC_API_URL.trim();
    if (v) return v;
  }
  const fromWindow = readWindowEnv()?.API_BASE_URL;
  if (typeof fromWindow === 'string' && fromWindow.trim()) return fromWindow.trim();
  return 'http://localhost:4000';
}
