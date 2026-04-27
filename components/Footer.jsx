"use client";

import Link from 'next/link';
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const footerLinkClass =
  "relative inline-block text-sm text-gray-400 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:text-white hover:after:scale-x-100";

export const Footer = () => {
  return (
    <footer className="bg-[#04192F] text-white font-sans">

      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              Jobmi
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-[220px]">
              Trouve ta voie professionnelle. Explore, teste, et lance-toi.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <Link
                href="https://www.instagram.com/jobmifr?igsh=MXQyczl6cHlka2s2bw=="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors duration-200"
              >
                <FaInstagram className="text-sm" />
              </Link>
              <Link
                href="https://www.tiktok.com/@jobmifr?_t=8n1bHZwV2fY&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors duration-200"
              >
                <FaTiktok className="text-sm" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/jobmipro/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors duration-200"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Explorer */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">Explorer</p>
            <ul className="space-y-3">
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/tester-un-metier', label: 'Tester un métier' },
                { href: '/tester-metiers-paris', label: 'Tester des métiers à Paris' },
                { href: '/outil/temps-devant-toi', label: 'Outil temps devant toi' },
                { href: '/reconversion', label: 'Reconversion' },
                { href: '/stage-et-formation', label: 'Stages & formations' },
                { href: '/test-orientation', label: 'Test d\'orientation' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={footerLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">Légal</p>
            <ul className="space-y-3">
              {[
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
                { href: '/politique-de-confidentialite', label: 'Confidentialité' },
                { href: '/cgu', label: 'CGU' },
                { href: '/mention-legales', label: 'Mentions légales' },
                { href: 'https://drive.google.com/drive/folders/1re4tpEimaPreuEc4-qHPCnmllJSosFBo?usp=share_link', label: 'Presse', external: true },
              ].map(({ href, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={footerLinkClass}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nos outils */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">Nos outils</p>
            <ul className="space-y-3">
              {[
                { href: '/test-orientation', label: 'Test RIASEC gratuit' },
                { href: '/outil/temps-devant-toi', label: 'Calcule le temps qu\'il te reste' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={footerLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© 2026 Jobmi. Tous droits réservés.</p>
          <p className="text-xs text-gray-600">@DCParis</p>
        </div>
      </div>

    </footer>
  );
};
