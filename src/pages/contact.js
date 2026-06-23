import Layout from '../components/Layout';
import Link from 'next/link';

const ABOUT_BG = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80&auto=format&fit=crop";

const team = [
  { name: 'Dr. Elena Forest', role: 'Chief Botanist', emoji: '👩‍🔬', bio: 'PhD in Dendrology with 15 years of field research across 6 continents.' },
  { name: 'Marcus Chen', role: 'AI Engineer', emoji: '👨‍💻', bio: 'Specialist in computer vision and botanical classification neural networks.' },
  { name: 'Sofia Verde', role: 'Ecologist', emoji: '🌿', bio: 'Conservation biologist focused on forest ecosystem dynamics and biodiversity.' },
];

const values = [
  { icon: '🌳', title: 'Accessibility', desc: 'Nature knowledge should be free and accessible to everyone — not locked behind expensive apps or paywalls.' },
  { icon: '🔬', title: 'Accuracy', desc: 'We combine AI power with botanical expertise to deliver identifications you can trust.' },
  { icon: '🌍', title: 'Conservation', desc: 'By connecting people to trees, we foster the understanding that drives conservation efforts.' },
  { icon: '⚡', title: 'Innovation', desc: 'We continuously improve our AI models and database to stay at the cutting edge of plant identification.' },
];

export default function AboutPage() {
  return (
    <Layout
      title="About Us"
      description="Learn about TreeIdentifier — our mission, team, and technology behind the world's most accurate AI tree identification tool."
      canonical="https://treeidentifier.com/about"
    >
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ABOUT_BG})` }} />
        <div className="page-hero-about absolute inset-0 opacity-90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center w-full">
          <div className="inline-block bg-white/10 border border-white/20 text-green-300 rounded-full px-4 py-1.5 text-sm mb-6">
            🌿 Our Story
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            About<br /><span className="text-green-300">TreeIdentifier</span>
          </h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Born from a passion for forests and powered by modern AI, we're making tree knowledge available to everyone.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forest-600 text-sm font-semibold uppercase tracking-wider bg-forest-50 px-3 py-1 rounded-full">Our Mission</span>
              <h2 className="text-4xl font-black text-gray-900 mt-4 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Connecting Humanity<br /><span className="text-forest-600">to the World of Trees</span>
              </h2>
              <div className="prose-forest">
                <p>TreeIdentifier was founded on a simple belief: that every person who can identify and appreciate the trees around them becomes a potential protector of those trees. Knowledge is the first step toward conservation.</p>
                <p>We've built the world's most accessible and accurate AI-powered tree identification tool, combining the latest advances in computer vision and natural language AI with deep botanical expertise. Our system is trained on millions of verified botanical images spanning over 10,000 species from every ecosystem on Earth.</p>
                <p>Whether you're a forest ranger, a schoolchild on a nature walk, a gardener planning your landscape, or simply someone who looked up at a tree and wondered — TreeIdentifier is here for you, free of charge, without barriers.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/tree-identifier" className="btn-forest px-6 py-3 rounded-full font-semibold">
                  Try the Tool →
                </Link>
                <Link href="/contact" className="border-2 border-forest-300 text-forest-700 px-6 py-3 rounded-full font-semibold hover:bg-forest-50 transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Visual stat block */}
            <div className="space-y-4">
              {[
                { stat: '10,000+', label: 'Tree species in our database', icon: '🌲' },
                { stat: '98%', label: 'Average identification accuracy', icon: '🎯' },
                { stat: '<5 sec', label: 'Time to complete identification', icon: '⚡' },
                { stat: 'Free', label: 'Forever — no account required', icon: '🎁' },
              ].map(({ stat, label, icon }) => (
                <div key={stat} className="bg-white rounded-2xl p-5 border border-forest-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center text-2xl flex-shrink-0">{icon}</div>
                  <div>
                    <div className="text-2xl font-black text-forest-700" style={{ fontFamily: 'Playfair Display, serif' }}>{stat}</div>
                    <div className="text-gray-500 text-sm">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f0f9f0 0%, #dcf0dc 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Drives Us
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-12">Four core values guide every decision we make</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-7 border border-forest-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-forest-800 font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Technology Stack
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Built on industry-leading AI infrastructure for unmatched speed and accuracy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', name: 'Groq AI', desc: 'Ultra-fast inference engine delivering sub-5-second responses, even for complex image analysis.' },
              { icon: '👁️', name: 'Computer Vision', desc: 'Advanced multi-scale image analysis examining leaf morphology, bark texture, branching patterns, and more.' },
              { icon: '🧠', name: 'Botanical Database', desc: 'Curated dataset of 10,000+ species with verified botanical data, range maps, and ecological information.' },
            ].map(({ icon, name, desc }) => (
              <div key={name} className="rounded-3xl p-7 border-2 border-forest-100 hover:border-forest-400 transition-colors bg-forest-50">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-forest-800 font-bold text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-forest-950" style={{ background: 'linear-gradient(135deg, #0d2818, #1e4722)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Meet the Team</h2>
          <p className="text-green-300 mb-12">Botanists, engineers, and ecologists united by a love of trees</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map(({ name, role, emoji, bio }) => (
              <div key={name} className="glass-card rounded-3xl p-7 text-left">
                <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center text-4xl mb-5">{emoji}</div>
                <h3 className="text-forest-800 font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{name}</h3>
                <p className="text-forest-600 text-xs font-semibold uppercase tracking-wider mb-3">{role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Discover Trees Around You?
          </h2>
          <p className="text-gray-500 mb-8">Use our free AI tool to identify any tree in seconds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tree-identifier" className="btn-forest px-8 py-4 rounded-full font-bold text-lg">🌳 Start Identifying</Link>
            <Link href="/contact" className="border-2 border-forest-400 text-forest-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-forest-50 transition-colors">✉️ Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
