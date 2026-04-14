/**
 * Utilitaire de tracking GTM / GA4 pour Jobmi.
 *
 * Utilisation :
 *   import { trackOutboundClick, trackCtaClick } from '@/lib/analytics'
 *
 * Tous les events atterrissent dans window.dataLayer et sont captés
 * par GTM (conteneur GTM-554KKC7X) puis envoyés à GA4 (G-XPZZLWLMRS).
 */

type GtmPayload = {
  event: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer: GtmPayload[];
  }
}

export function pushEvent(payload: GtmPayload): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Clic sur un lien sortant (école, partenaire, CPF, France Travail…) */
export function trackOutboundClick(
  url: string,
  label: string,
  category = 'outbound'
): void {
  pushEvent({
    event: 'outbound_click',
    link_url: url,
    link_label: label,
    link_category: category,
  });
}

/** Clic sur un CTA interne (bouton, bannière, appel à l'action) */
export function trackCtaClick(ctaName: string, location: string): void {
  pushEvent({
    event: 'cta_click',
    cta_name: ctaName,
    cta_location: location,
  });
}

/** Téléchargement d'un guide ou document */
export function trackDownload(fileName: string, fileType = 'pdf'): void {
  pushEvent({
    event: 'file_download',
    file_name: fileName,
    file_type: fileType,
  });
}

/**
 * Jalon de lecture d'un article.
 * Appeler à 25 %, 50 %, 75 % et 100 % via un IntersectionObserver.
 */
export function trackReadingMilestone(
  articleSlug: string,
  percentRead: 25 | 50 | 75 | 100
): void {
  pushEvent({
    event: 'reading_milestone',
    article_slug: articleSlug,
    percent_read: percentRead,
  });
}

/** Inscription à la newsletter / liste d'attente */
export function trackEmailSignup(source: string): void {
  pushEvent({
    event: 'email_signup',
    signup_source: source,
  });
}

/** Début du quiz d'orientation */
export function trackQuizStart(quizName = 'orientation'): void {
  pushEvent({
    event: 'quiz_start',
    quiz_name: quizName,
  });
}

/** Fin du quiz avec résultat */
export function trackQuizComplete(quizName: string, result: string): void {
  pushEvent({
    event: 'quiz_complete',
    quiz_name: quizName,
    quiz_result: result,
  });
}
