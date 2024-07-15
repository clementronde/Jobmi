import type { Metadata } from "next";
import "./globals.css";
import 'tailwindcss/tailwind.css';
import Provider from '@/components/Provider';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";



export const metadata: Metadata = {
  title: "Jobmi",
  description: "Une application pour vous trouver une voie professionnelle",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-554KKC7X');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XPZZLWLMRS');
            `,
          }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>



      <body>


        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-554KKC7X" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}


        <Provider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
