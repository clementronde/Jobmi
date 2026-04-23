import React from 'react';

const themeByCategory = {
  Orientation: {
    bg: 'from-[#6500FF] via-[#8F6BFF] to-[#D9D2FF]',
    accent: 'bg-white/18 text-white',
  },
  Reconversion: {
    bg: 'from-[#04192F] via-[#21466F] to-[#A29BFE]',
    accent: 'bg-white/18 text-white',
  },
  Formation: {
    bg: 'from-[#0F766E] via-[#14B8A6] to-[#CCFBF1]',
    accent: 'bg-white/20 text-white',
  },
  Métiers: {
    bg: 'from-[#3B0764] via-[#6500FF] to-[#F0ABFC]',
    accent: 'bg-white/18 text-white',
  },
};

export const ArticlePreviewVisual = ({ article, className = '' }) => {
  const theme = themeByCategory[article.category] || themeByCategory.Orientation;
  const tags = article.tags?.slice(0, 2) || [];

  return (
    <div
      className={`relative isolate overflow-hidden rounded-lg bg-gradient-to-br ${theme.bg} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.2),transparent_24%)]" />
      <div className="absolute inset-4 rounded-md bg-white/12 backdrop-blur-[1px]" />
      {article.imageCover && (
        <div className="absolute inset-x-6 bottom-5 top-16 overflow-hidden rounded-md bg-white/90 shadow-[0_16px_34px_rgba(4,25,47,0.16)]">
          <img
            src={article.imageCover}
            alt={article.imageAlt}
            className="h-full w-full object-contain p-3"
          />
        </div>
      )}
      <div className="relative z-10 flex h-full min-h-[190px] flex-col justify-between p-5 text-white">
        <div className="flex flex-wrap gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${theme.accent}`}>
            {article.category}
          </span>
          <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-white/90">
            {article.readingTime} min
          </span>
        </div>
        <div className="pointer-events-none opacity-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
            Jobmi guide
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 px-2.5 py-1 text-xs font-semibold text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
