'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from '../../../public/SAFLogo.png';
import { LanguageSwitcher, LanguageSwitcherMobile } from './language-switcher';

export function TabMenu({ links }: { links: { label: string; path: string }[] }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white shadow-md">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto px-3 sm:px-6 h-16">
        <Link className="shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href="/">
          <img className="w-10 h-10 object-contain" alt="ANIVERA" src={logo.src} />
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
          {links.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                isActive(path)
                  ? 'bg-white/20 text-white'
                  : 'text-emerald-50 hover:bg-white/10'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <LanguageSwitcher />
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcherMobile />
          <button
            className="flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden border-t border-white/15 bg-green-900">
          <div className="flex flex-col px-3 py-2 max-w-7xl mx-auto">
            {links.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`px-3 py-3 rounded-md text-base font-medium ${
                  isActive(path) ? 'bg-white/15 text-white' : 'text-emerald-50 hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
