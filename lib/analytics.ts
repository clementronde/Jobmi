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
    gtag?: (
      command: 'event',
      eventName: string,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

export function pushEvent(payload: GtmPayload): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === 'function') {
    const { event, ...params } = payload;
    window.gtag('event', event, params);
  }
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
export function trackCtaClick(
  ctaName: string,
  location: string,
  extraParams: Record<string, string | number | boolean | undefined> = {}
): void {
  pushEvent({
    event: 'cta_click',
    cta_name: ctaName,
    cta_location: location,
    ...extraParams,
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

/** Progression dans le quiz */
export function trackQuizStep(
  quizName: string,
  stepNumber: number,
  percentComplete: number
): void {
  pushEvent({
    event: 'quiz_step',
    quiz_name: quizName,
    quiz_step: stepNumber,
    percent_complete: percentComplete,
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

/** Affichage des résultats du test */
export function trackTestResultViewed(
  quizName: string,
  dominantCode: string,
  suggestedJobsCount: number
): void {
  pushEvent({
    event: 'test_result_viewed',
    quiz_name: quizName,
    quiz_result: dominantCode,
    suggested_jobs_count: suggestedJobsCount,
  });
}

/** Sauvegarde / capture d'un résultat de test */
export function trackLeadSignup(source: string, method: string): void {
  pushEvent({
    event: 'lead_signup',
    signup_source: source,
    signup_method: method,
  });
}
