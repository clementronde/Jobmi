import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test d\'orientation',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
