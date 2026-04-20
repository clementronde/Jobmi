"use client";
import { useEffect, useState, useCallback, useRef } from 'react';

interface TocItem {
  id: string;
  text: string;
}

interface TocSection {
  h2: TocItem;
  h3s: TocItem[];
}

export default function ArticleTOC() {
  const [sections, setSections] = useState<TocSection[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const targetProgress = useRef(0);
  const rafId = useRef<number>(0);
  const currentProgress = useRef(0);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const container = document.getElementById('article-content');
    if (!container) return;

    // Build sections grouping h3s under their preceding h2
    const headings = Array.from(container.querySelectorAll('h2, h3'));
    const built: TocSection[] = [];
    let index = 0;

    headings.forEach((heading) => {
      const text = heading.textContent?.trim() || '';
      if (!text) return;
      const id = `toc-h-${index++}`;
      heading.setAttribute('id', id);
      const item: TocItem = { id, text };

      if (heading.tagName === 'H2') {
        built.push({ h2: item, h3s: [] });
      } else if (built.length > 0) {
        built[built.length - 1].h3s.push(item);
      }
    });

    setSections(built);

    // IntersectionObserver for active heading
    const allHeadings = Array.from(container.querySelectorAll('h2, h3')).filter((h) => h.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0% -75% 0%', threshold: 0 }
    );
    allHeadings.forEach((h) => observer.observe(h));

    // Lerp-based progress bar — smooth interpolation via rAF
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const next = lerp(currentProgress.current, targetProgress.current, 0.1);
      if (Math.abs(next - currentProgress.current) > 0.01) {
        currentProgress.current = next;
        setProgress(next);
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const total = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      targetProgress.current = Math.max(0, Math.min(100, (scrolled / total) * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Determine which h2 section is active
  const activeSection = sections.find(
    (s) => s.h2.id === activeId || s.h3s.some((h3) => h3.id === activeId)
  );

  return (
    <>
      {/* Reading progress bar — fixed at very top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-100">
        <div
          className="h-full bg-[#6500FF]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Sticky TOC sidebar */}
      {sections.length > 0 && (
        <aside className="hidden xl:block w-[220px] shrink-0 sticky top-[130px] self-start">
          <div className="font-sans">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Sommaire
            </p>
            <nav>
              <ul className="space-y-1">
                {sections.map(({ h2, h3s }) => {
                  const h2Active = activeId === h2.id;
                  const sectionActive = activeSection?.h2.id === h2.id;
                  return (
                    <li key={h2.id}>
                      {/* H2 link */}
                      <a
                        href={`#${h2.id}`}
                        onClick={(e) => { e.preventDefault(); scrollTo(h2.id); }}
                        className={`block text-sm py-1 pl-3 border-l-2 transition-all duration-200 leading-snug ${
                          h2Active
                            ? 'border-[#6500FF] text-[#6500FF] font-semibold'
                            : sectionActive
                            ? 'border-[#6500FF]/40 text-gray-700 font-medium'
                            : 'border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-400'
                        }`}
                      >
                        {h2.text}
                      </a>

                      {/* H3 links — only shown when section is active */}
                      {sectionActive && h3s.length > 0 && (
                        <ul className="mt-1 space-y-1 overflow-hidden">
                          {h3s.map((h3) => (
                            <li key={h3.id}>
                              <a
                                href={`#${h3.id}`}
                                onClick={(e) => { e.preventDefault(); scrollTo(h3.id); }}
                                className={`block text-xs py-1 pl-6 border-l-2 transition-all duration-200 leading-snug ${
                                  activeId === h3.id
                                    ? 'border-[#6500FF] text-[#6500FF] font-semibold'
                                    : 'border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400'
                                }`}
                              >
                                {h3.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
}
