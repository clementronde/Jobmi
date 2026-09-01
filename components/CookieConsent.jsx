"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./cookie-consent-jobmi.css";

const GTM_ID = "GTM-554KKC7X";
const GA4_ID = "G-XPZZLWLMRS";

/** Injecte GTM + GA4 uniquement après consentement analytics */
function loadAnalytics() {
  if (typeof window === "undefined" || window.__jobmiAnalyticsLoaded) return;
  window.__jobmiAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtmScript);

  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(gaScript);

  gaScript.onload = () => {
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA4_ID);
  };
}

export const CookieConsentBanner = () => {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: "_gid" },
              { name: /^_gat/ },
            ],
          },
        },
      },
      onFirstConsent: ({ cookie }) => {
        if (cookie.categories.includes("analytics")) loadAnalytics();
      },
      onConsent: ({ cookie }) => {
        if (cookie.categories.includes("analytics")) loadAnalytics();
      },
      onChange: ({ cookie, changedCategories }) => {
        if (
          changedCategories.includes("analytics") &&
          cookie.categories.includes("analytics")
        ) {
          loadAnalytics();
        }
      },
      language: {
        default: "fr",
        translations: {
          fr: {
            consentModal: {
              title: "On utilise des cookies 🍪",
              description:
                "Jobmi utilise des cookies pour mesurer l'audience du site et améliorer ton expérience. Tu peux accepter, refuser ou personnaliser tes choix à tout moment.",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              showPreferencesBtn: "Personnaliser",
              footer:
                '<a href="/politique-de-confidentialite">Politique de confidentialité</a>',
            },
            preferencesModal: {
              title: "Préférences de cookies",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              savePreferencesBtn: "Enregistrer mes choix",
              closeIconLabel: "Fermer",
              sections: [
                {
                  title: "Utilisation des cookies",
                  description:
                    "Nous utilisons des cookies pour assurer le bon fonctionnement du site et, avec ton accord, pour mesurer l'audience via Google Analytics / Google Tag Manager.",
                },
                {
                  title: "Cookies strictement nécessaires",
                  description:
                    "Indispensables au fonctionnement du site (navigation, sécurité). Ils ne peuvent pas être désactivés.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Cookies de mesure d'audience",
                  description:
                    "Google Analytics et Google Tag Manager nous aident à comprendre comment le site est utilisé, de façon anonymisée.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Plus d'informations",
                  description:
                    'Pour toute question relative à notre politique en matière de cookies, consulte notre <a href="/politique-de-confidentialite">politique de confidentialité</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
};

/** Rouvre le panneau de préférences (utilisé dans le footer) */
export function openCookiePreferences() {
  CookieConsent.showPreferences();
}
