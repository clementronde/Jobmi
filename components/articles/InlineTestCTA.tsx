import Link from 'next/link';

type InlineTestCTAProps = {
  text?: string;
  ctaLabel?: string;
};

/**
 * Compact mid-article CTA banner pointing to the RIASEC test.
 * Meant to be dropped between sections of long articles, in addition to
 * the end-of-article resources block, to catch readers before they bounce.
 */
export const InlineTestCTA = ({
  text = "Tu hésites encore entre plusieurs vœux ou plusieurs voies ? Le test d'orientation gratuit t'aide à identifier 2 à 3 familles de métiers cohérentes avec ton profil, en 6 à 8 minutes.",
  ctaLabel = "Faire le test d'orientation",
}: InlineTestCTAProps) => {
  return (
    <div className="my-10 flex flex-col items-start gap-4 rounded-2xl border border-[#E9E1FF] bg-[#F8F7FF] p-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-base leading-7 text-[#04192F]">{text}</p>
      <Link
        href="/test"
        className="article-cta-link shrink-0"
      >
        {ctaLabel}
      </Link>
    </div>
  );
};

export default InlineTestCTA;
