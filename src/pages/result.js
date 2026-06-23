import Layout from '../components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const RESULT_BG = "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1920&q=80&auto=format&fit=crop";

// Parse markdown-like result into sections
function parseResult(text) {
  const sections = [];
  const lines = text.split('\n');
  let current = null;

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)/);
    if (h2Match) {
      if (current) sections.push(current);
      current = { heading: h2Match[1].trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) sections.push(current);
  return sections;
}

function renderLine(line, idx) {
  // Bold **text**
  const rendered = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  if (line.startsWith('- ') || line.startsWith('• ')) {
    return (
      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm py-1"
        dangerouslySetInnerHTML={{ __html: '🌿 ' + rendered.replace(/^[-•]\s*/, '') }} />
    );
  }
  if (line.trim() === '') return null;
  return (
    <p key={idx} className="text-gray-600 text-sm leading-relaxed mb-1"
      dangerouslySetInnerHTML={{ __html: rendered }} />
  );
}

const sectionIcons = {
  identification: '🌳',
  habitat: '📍',
  growth: '🌱',
  care: '💧',
  ecological: '🌍',
  cultural: '🏛️',
  notable: '⚠️',
  default: '📋',
};

function getSectionIcon(heading) {
  const h = heading.toLowerCase();
  if (h.includes('identif')) return sectionIcons.identification;
  if (h.includes('habitat') || h.includes('range')) return sectionIcons.habitat;
  if (h.includes('growth')) return sectionIcons.growth;
  if (h.includes('care') || h.includes('cultiv')) return sectionIcons.care;
  if (h.includes('ecolog')) return sectionIcons.ecological;
  if (h.includes('cultur') || h.includes('histor')) return sectionIcons.cultural;
  if (h.includes('notable') || h.includes('fact')) return sectionIcons.notable;
  return sectionIcons.default;
}

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [parsed, setParsed] = useState([]);

  useEffect(() => {
    const stored = sessionStorage.getItem('treeResult');
    if (stored) {
      try {
        const { result: r, imageUrl: img } = JSON.parse(stored);
        setResult(r);
        setImageUrl(img);
        setParsed(parseResult(r));
      } catch (e) {
        console.error('Failed to parse result', e);
      }
    }
  }, []);

  // Extract species name from first section for display
  const speciesName = result?.match(/\*\*Common Name:\*\*\s*([^\n]+)/)?.[1]?.trim() || 'Tree Species';
  const scientificName = result?.match(/\*\*Scientific Name:\*\*\s*([^\n]+)/)?.[1]?.trim() || '';
  const confidence = result?.match(/\*\*Confidence Level:\*\*\s*([^\n]+)/)?.[1]?.trim() || '';

  return (
    <Layout
      title={`Result: ${speciesName}`}
      description={`AI identification result for ${speciesName}. Learn about this tree's habitat, care tips, and ecological importance.`}
    >
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${RESULT_BG})` }} />
        <div className="tree-hero-bg absolute inset-0" />
        <div className="relative w-full max-w-5xl mx-auto px-4 pb-12 pt-28">
          <Link href="/tree-identifier" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm mb-4 transition-colors">
            ← Back to Identifier
          </Link>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="inline-block result-badge mb-3">AI Result</div>
              <h1 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                {result ? speciesName : 'Your Result'}
              </h1>
              {scientificName && (
                <p className="text-green-200 italic text-lg mt-1">{scientificName}</p>
              )}
            </div>
            {confidence && (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 text-right">
                <p className="text-green-300 text-xs uppercase tracking-wider">Confidence</p>
                <p className="text-white font-bold text-sm mt-0.5">{confidence.split(' — ')[0]}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Result Content */}
      <section className="py-16 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {!result ? (
            /* No result state */
            <div className="text-center py-20">
              <div className="text-6xl mb-5">🌿</div>
              <h2 className="text-2xl font-bold text-gray-700 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                No Result Found
              </h2>
              <p className="text-gray-400 mb-6">It looks like you haven't identified a tree yet.</p>
              <Link href="/tree-identifier" className="btn-forest px-8 py-3 rounded-full font-semibold inline-block">
                🌳 Identify a Tree
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Image + Actions */}
              <div className="lg:col-span-1 space-y-5">
                {imageUrl && (
                  <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-forest-100">
                    <img src={imageUrl} alt="Identified tree" className="w-full h-56 object-cover" />
                    <div className="p-4">
                      <h3 className="text-forest-800 font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{speciesName}</h3>
                      {scientificName && <p className="text-gray-400 text-xs italic mt-0.5">{scientificName}</p>}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="bg-white rounded-2xl p-5 border border-forest-100 shadow-sm">
                  <h3 className="text-forest-800 font-bold text-sm mb-4">What's Next?</h3>
                  <div className="space-y-3">
                    <Link href="/tree-identifier"
                      className="flex items-center gap-3 w-full btn-forest py-2.5 px-4 rounded-xl text-sm font-semibold justify-center">
                      🔍 Identify Another Tree
                    </Link>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-3 w-full border-2 border-forest-200 text-forest-700 py-2.5 px-4 rounded-xl text-sm font-semibold justify-center hover:border-forest-400 transition-colors"
                    >
                      🖨️ Print This Report
                    </button>
                  </div>
                </div>

                {/* Disclaimer note */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-700">
                  <p className="font-semibold mb-1">⚠️ Please Note</p>
                  <p>AI identification is for educational purposes. For professional advice, consult a certified arborist. Read our <Link href="/disclaimer" className="underline">Disclaimer</Link>.</p>
                </div>

                {/* Links */}
                <div className="text-center space-y-2 pt-2">
                  <Link href="/about" className="block text-forest-600 hover:text-forest-800 text-xs underline">About Our AI</Link>
                  <Link href="/contact" className="block text-forest-600 hover:text-forest-800 text-xs underline">Report an Issue</Link>
                </div>
              </div>

              {/* Right: Result Sections */}
              <div className="lg:col-span-2 space-y-5">
                {parsed.map((section, i) => (
                  <div key={i} className="bg-white rounded-3xl shadow-sm border border-forest-100 overflow-hidden fade-in-up"
                    style={{ animationDelay: `${i * 0.08}s` }}>
                    {/* Section header */}
                    <div className="px-6 py-4 border-b border-forest-50 flex items-center gap-3"
                      style={{ background: 'linear-gradient(to right, rgba(42,112,48,0.06), transparent)' }}>
                      <span className="text-xl">{getSectionIcon(section.heading)}</span>
                      <h2 className="text-forest-700 font-bold text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {section.heading.replace(/^[🌳📍🌱💧🌍🏛️⚠️]\s*/, '')}
                      </h2>
                    </div>
                    {/* Section body */}
                    <div className="px-6 py-5">
                      <ul className="space-y-0.5 list-none">
                        {section.lines.map((line, j) => renderLine(line, j))}
                      </ul>
                    </div>
                  </div>
                ))}

                {/* Share prompt */}
                <div className="bg-gradient-to-r from-forest-700 to-forest-500 rounded-3xl p-6 text-white text-center">
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Found a Fascinating Tree?
                  </h3>
                  <p className="text-green-200 text-sm mb-4">Share this tool with fellow nature enthusiasts</p>
                  <Link href="/tree-identifier" className="bg-white text-forest-700 font-bold px-6 py-2.5 rounded-full text-sm hover:bg-green-50 transition-colors inline-block">
                    🌳 Try Another Tree
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
