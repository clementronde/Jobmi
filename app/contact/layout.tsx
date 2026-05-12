import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Jobmi',
  description: 'Une question sur Jobmi ? Contacte notre équipe via ce formulaire.',
  alternates: { canonical: 'https://jobmi.fr/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
