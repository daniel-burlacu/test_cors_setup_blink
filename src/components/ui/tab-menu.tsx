'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { WalletButton } from '../solana/solana-provider';
import { ClusterUiSelect } from '../cluster/cluster-ui';

export function TabMenu({ links }: { links: { label: string; path: string }[] }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 text-neutral-content shadow-lg"
      style={{
        background: 'linear-gradient(90deg, #4ADEDE, #5B7DFF, #4A94FF)',
      }}
    >
      {/* Navbar container */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        {/* Logo */}
        <Link className="btn btn-ghost normal-case text-xl flex items-center" href="/">
          <img className="h-10" alt="Logo" src="/SAFLogo.png" />
        </Link>

        {/* WalletButton and ClusterUiSelect for smaller screens */}
        <div className="flex items-center space-x-2 sm:hidden">
          <WalletButton />
          <ClusterUiSelect />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Tabs for Desktop */}
        <div className="hidden sm:flex flex-1 justify-center space-x-2">
          {links.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`tab ${
                pathname.startsWith(path) ? 'tab-active' : ''
              } text-white hover:bg-blue-400 active:bg-blue-300 hover:scale-105 active:scale-95 transition-all duration-150`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* WalletButton and ClusterUiSelect for Desktop */}
        <div className="hidden sm:flex items-center space-x-2">
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white text-blue-900 shadow-md">
          <div className="flex flex-col items-start px-4 py-2 space-y-2">
            {links.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`tab ${
                  pathname.startsWith(path) ? 'tab-active' : ''
                } text-blue-900 hover:bg-blue-100 active:bg-blue-200 hover:scale-105 active:scale-95 transition-all duration-150 w-full text-left`}
                onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
