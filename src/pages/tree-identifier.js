import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-bg text-white">
      {/* Tree canopy decoration */}
      <div className="w-full overflow-hidden h-12 relative">
        <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M0,48 L0,24 Q100,0 200,18 Q300,36 400,10 Q500,-8 600,16 Q700,36 800,8 Q900,-10 1000,18 Q1100,36 1200,12 L1200,48 Z"
            fill="rgba(255,255,255,0.03)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌳</span>
              <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Tree<span className="text-green-400">Identifier</span>
              </span>
            </Link>
            <p className="text-green-300 text-sm leading-relaxed">
              AI-powered tree identification tool. Upload a photo and discover the species, care tips, and ecological significance instantly.
            </p>
            <div className="flex gap-3 mt-5">
              {['🌿', '🍃', '🌱'].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-forest-800/50 flex items-center justify-center text-sm hover:scale-110 transition-transform cursor-default">
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/tree-identifier', label: 'Tree Identifier' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-green-300 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/disclaimer', label: 'Disclaimer' },
                { href: '/contact', label: 'Terms of Use' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-green-300 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">About Tool</h4>
            <p className="text-green-300 text-sm leading-relaxed mb-3">
              Using Groq AI for lightning-fast tree identification from photos.
            </p>
            <div className="flex items-center gap-2 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              AI System Online
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-green-400 text-xs">
            © {new Date().getFullYear()} TreeIdentifier. All rights reserved.
          </p>
          <p className="text-green-500 text-xs">
            Powered by Groq AI · Built for Nature Enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
