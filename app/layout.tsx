import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import 'tailwindcss/tailwind.css';
import Provider from '@/components/Provider';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const BASE_URL = 'https://jobmi.fr';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Jobmi — Orientation et Réorientation Professionnelle',
    template: '%s | Jobmi',
  },
  description:
    "Jobmi aide les 18-25 ans à trouver leur voie : tests d'orientation, guides de reconversion, métiers d'avenir et formations adaptées à ton profil.",
  keywords: [
    'orientation professionnelle',
    'reconversion professionnelle',
    'métiers d\'avenir',
    'trouver sa voie',
    'bilan de compétences',
    'formation jeunes',
    'emploi 20 ans',
    'jobmi',
  ],
  authors: [{ name: 'Jobmi', url: BASE_URL }],
  creator: 'Jobmi',
  publisher: 'Jobmi',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: BASE_URL,
    siteName: 'Jobmi',
    title: 'Jobmi — Orientation et Réorientation Professionnelle',
    description:
      "Jobmi aide les 18-25 ans à trouver leur voie : tests d'orientation, guides de reconversion et métiers d'avenir.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jobmi — Trouve ta voie professionnelle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jobmi — Orientation et Réorientation Professionnelle',
    description:
      "Jobmi aide les 18-25 ans à trouver leur voie : tests d'orientation, guides de reconversion et métiers d'avenir.",
    images: ['/og-image.png'],
    creator: '@jobmifr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    apple: { url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    other: { rel: 'mask-icon', url: '/favicons/safari-pinned-tab.svg' },
  },
  manifest: '/favicons/site.webmanifest',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://jobmi.fr/#organization',
      name: 'Jobmi',
      url: 'https://jobmi.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jobmi.fr/favicons/favicon-32x32.png',
      },
      sameAs: [
        'https://www.instagram.com/jobmifr',
        'https://www.tiktok.com/@jobmifr',
        'https://www.linkedin.com/company/jobmipro/',
      ],
      description:
        "Jobmi aide les 18-25 ans à trouver leur voie : tests d'orientation, guides de reconversion et métiers d'avenir.",
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jobmi.fr/#website',
      url: 'https://jobmi.fr',
      name: 'Jobmi',
      publisher: { '@id': 'https://jobmi.fr/#organization' },
      inLanguage: 'fr-FR',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://jobmi.fr/blog?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-554KKC7X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Provider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-554KKC7X');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Analytics 4 — charge la librairie gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XPZZLWLMRS"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XPZZLWLMRS');
          `}
        </Script>
        {/* End Google Analytics 4 */}
      </body>
    </html>
  );
}
