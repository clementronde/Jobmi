import Link from 'next/link';
import { getSupportArticleContent } from '@/data/supportArticleContent';

export function GenericSupportArticle({ slug }: { slug: string }) {
  const article = getSupportArticleContent(slug);

  if (!article) return null;

  return (
    <div className="font-sans sm:mx-10">
      <div className="mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 text-base leading-8 text-[#465160]">
        {article.intro}
      </div>

      <div className="space-y-12">
        {article.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
              {section.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-[#465160]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {article.checklist ? (
        <section className="my-12 rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]">
          <h2 className="text-2xl font-bold text-[#04192F]">
            Checklist rapide
          </h2>
          <ul className="mt-5 space-y-3">
            {article.checklist.map((item) => (
              <li key={item} className="text-base leading-7 text-[#465160]">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="my-12 rounded-2xl bg-[#04192F] p-7 text-white">
        <p className="text-sm leading-7 text-white/70">{article.cta.text}</p>
        <Link
          href={article.cta.href}
          className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
        >
          {article.cta.label}
        </Link>
      </section>
    </div>
  );
}
