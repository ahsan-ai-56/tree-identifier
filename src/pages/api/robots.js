import Layout from '../components/Layout';
import Link from 'next/link';
import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';

const TOOL_BG = "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80&auto=format&fit=crop";

export default function TreeIdentifierPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file (JPG, PNG, WEBP).');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Image must be under 10MB.');
      return;
    }
    setError('');
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, []);

  const onDragOver = (e) => { e.preventDefault(); setDragOver(true); };
  const onDragLeave = () => setDragOver(false);

  const handleSubmit = async () => {
    if (!selectedFile) { setError('Please select an image first.'); return; }
    setLoading(true);
    setError('');
    try {
      const base64 = preview.split(',')[1];
      const res = await fetch('/api/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64, mimeType: selectedFile.type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Identification failed');
      sessionStorage.setItem('treeResult', JSON.stringify({ result: data.result, imageUrl: preview }));
      router.push('/result');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setSelectedFile(null);
    setPreview(null);
    setError('');
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <Layout
      title="Tree Identifier Tool"
      description="Upload a tree photo to identify any tree species instantly using AI. Get species name, care tips, habitat info, and ecological significance."
      canonical="https://treeidentifier.com/tree-identifier"
    >
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${TOOL_BG})` }} />
        <div className="tree-hero-bg absolute inset-0" />
        <div className="relative w-full max-w-4xl mx-auto px-4 pb-16 pt-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-300 rounded-full px-4 py-1.5 text-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            AI Identification Tool
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Tree Identifier
          </h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Upload a clear photo of any tree and our AI will identify the species instantly — along with care tips and ecological insights.
          </p>
        </div>
      </section>

      {/* Upload Tool */}
      <section className="py-16 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Tool Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-forest-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-forest-700 to-forest-500 px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>Upload Tree Photo</h2>
                <p className="text-green-200 text-xs mt-0.5">Supported formats: JPG, PNG, WEBP · Max 10MB</p>
              </div>
              <span className="text-4xl">🌳</span>
            </div>

            <div className="p-6 sm:p-8">
              {!preview ? (
                /* Upload Zone */
                <div
                  className={`upload-zone rounded-2xl p-10 text-center cursor-pointer ${dragOver ? 'drag-over' : ''}`}
                  onClick={() => fileRef.current?.click()}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                >
                  <div className="text-6xl mb-4 leaf-float inline-block">🌿</div>
                  <h3 className="text-forest-700 font-bold text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Drop your tree photo here
                  </h3>
                  <p className="text-gray-400 text-sm mb-5">or click to browse your files</p>
                  <div className="inline-flex items-center gap-2 bg-forest-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-forest-700 transition-colors">
                    📁 Choose Photo
                  </div>
                  <p className="text-gray-300 text-xs mt-4">Best results: Clear photos of leaves, bark, fruit, or full tree</p>
                </div>
              ) : (
                /* Preview */
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-forest-100">
                    <img src={preview} alt="Selected tree" className="w-full max-h-80 object-contain" />
                    <button
                      onClick={clearImage}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 rounded-full p-2 shadow-lg transition-colors"
                      aria-label="Remove image"
                    >
                      ✕
                    </button>
                    <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                      {selectedFile?.name}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={clearImage}
                      className="flex-1 border-2 border-gray-200 text-gray-500 py-3 rounded-xl text-sm font-medium hover:border-forest-300 hover:text-forest-600 transition-colors"
                    >
                      ↩ Choose Different
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="flex-1 btn-forest py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Identifying...
                        </>
                      ) : (
                        <> 🔍 Identify Tree </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => handleFile(e.target.files[0])}
              />

              {/* Error */}
              {error && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm flex items-start gap-2">
                  <span className="text-lg">⚠️</span>
                  {error}
                </div>
              )}

              {/* Tips */}
              {!preview && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { icon: '🍃', label: 'Leaf close-up' },
                    { icon: '🪵', label: 'Bark texture' },
                    { icon: '🌰', label: 'Fruit or seed' },
                    { icon: '🌲', label: 'Full silhouette' },
                  ].map(({ icon, label }) => (
                    <div key={label} className="text-center p-3 rounded-xl bg-forest-50 border border-forest-100">
                      <div className="text-2xl mb-1">{icon}</div>
                      <p className="text-forest-700 text-xs font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: '⚡', title: 'Instant Results', desc: 'AI identifies trees in under 5 seconds' },
              { icon: '🎯', title: '98% Accurate', desc: 'Trained on millions of botanical images' },
              { icon: '🔒', title: 'Private & Secure', desc: 'Photos processed and never stored' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-4 text-center border border-forest-100 shadow-sm">
                <div className="text-2xl mb-2">{icon}</div>
                <h3 className="text-forest-800 font-bold text-sm mb-1">{title}</h3>
                <p className="text-gray-400 text-xs">{desc}</p>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">Learn more about our technology</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/about" className="text-forest-600 hover:text-forest-800 text-sm font-medium underline underline-offset-2">About TreeIdentifier</Link>
              <span className="text-gray-300">·</span>
              <Link href="/disclaimer" className="text-forest-600 hover:text-forest-800 text-sm font-medium underline underline-offset-2">Disclaimer</Link>
              <span className="text-gray-300">·</span>
              <Link href="/contact" className="text-forest-600 hover:text-forest-800 text-sm font-medium underline underline-offset-2">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works mini section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>What Makes a Great Tree Photo?</h2>
          <p className="text-gray-500 mb-10">Follow these tips for the most accurate identification results</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '☀️', title: 'Good Lighting', desc: 'Natural daylight works best. Avoid harsh shadows or flash glare.' },
              { icon: '🎯', title: 'Sharp Focus', desc: 'Make sure leaves, bark, or distinctive features are in focus.' },
              { icon: '📐', title: 'Multiple Angles', desc: 'If unsure, try leaf underside, bark close-up, and overall shape.' },
              { icon: '🚫', title: 'Avoid Blur', desc: 'Hold your camera steady or rest your hand to prevent motion blur.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-5 rounded-2xl border border-forest-100 bg-forest-50 text-left">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-forest-800 font-bold text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
