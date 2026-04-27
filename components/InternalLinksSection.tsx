import Link from 'next/link';
import type { InternalLinkItem } from '../data/internalLinks';

type InternalLinksSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  links: InternalLinkItem[];
  className?: string;
  containerClassName?: string;
};

export function InternalLinksSection({
  eyebrow = 'À lire ensuite',
  title,
  description,
  links,
  className = '',
  containerClassName = 'max-w-screen-xl',
}: InternalLinksSectionProps) {
  if (!links.length) return null;

  const gridClassName =
    links.length === 1
      ? 'mx-auto max-w-xl grid-cols-1'
      : links.length === 2
        ? 'mx-auto max-w-4xl grid-cols-1 md:grid-cols-2'
        : links.length === 3
          ? 'mx-auto max-w-6xl grid-cols-1 lg:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <section className={`px-6 py-14 sm:px-10 ${className}`}>
      <div className={`mx-auto ${containerClassName}`}>
        <div className="mb-7 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6500FF]">
            {eyebrow}
          </p>
          <h2 className="font-sans text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-gray-600">
              {description}
            </p>
          ) : null}
        </div>

        <div className={`grid gap-4 ${gridClassName}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex min-h-[190px] flex-col rounded-2xl border border-[#ECE7FF] bg-white p-5 shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6500FF]/50 hover:shadow-[0_18px_45px_rgba(101,0,255,0.12)]"
            >
              {link.label ? (
                <span className="mb-4 w-fit rounded-full bg-[#F7F6FF] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#6500FF]">
                  {link.label}
                </span>
              ) : null}
              <span className="font-sans text-lg font-bold leading-snug text-[#04192F] transition-colors group-hover:text-[#6500FF]">
                {link.title}
              </span>
              <span className="mt-3 font-sans text-sm leading-relaxed text-gray-600">
                {link.description}
              </span>
              <span className="mt-auto pt-5 font-sans text-sm font-bold text-[#6500FF]">
                Lire la suite
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
