import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center text-white text-lg shadow-lg group-hover:scale-105 transition-transform">
              🌳
            </div>
            <div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                Tree<span className="text-green-400">Identifier</span>
              </span>
              <p className="text-green-300 text-xs leading-none hidden sm:block">AI-Powered Plant Recognition</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/tree-identifier', label: 'Identifier' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-green-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/tree-identifier"
              className="ml-3 btn-forest px-5 py-2 rounded-full text-sm font-semibold"
            >
              Try Free →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {[
              { href: '/', label: '🏠 Home' },
              { href: '/tree-identifier', label: '🌳 Tree Identifier' },
              { href: '/about', label: '👥 About Us' },
              { href: '/contact', label: '📬 Contact' },
              { href: '/privacy-policy', label: '🔒 Privacy Policy' },
              { href: '/disclaimer', label: '⚖️ Disclaimer' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-green-100 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-sm font-medium transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
