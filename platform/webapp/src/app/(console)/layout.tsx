import { AppShell } from '@/components/settora/AppShell';

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
