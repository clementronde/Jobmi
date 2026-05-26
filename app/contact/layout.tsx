import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Une question sur Jobmi ? Contacte notre équipe via ce formulaire.',
  alternates: { canonical: 'https://jobmi.fr/contact' },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/contact',
    title: 'Contact | Jobmi',
    description: 'Une question sur Jobmi ? Contacte notre équipe via ce formulaire.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
