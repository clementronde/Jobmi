import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import 'tailwindcss/tailwind.css';
import Provider from '@/components/Provider';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jobmi",
  description: "Une application pour vous trouver une voie professionnelle",
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
