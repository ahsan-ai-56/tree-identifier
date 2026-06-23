import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire up email API (Resend, SendGrid, etc.)
    setSent(true);
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the TreeIdentifier team. We'd love to hear from you about tree identification questions, feedback, or partnerships."
      canonical="https://treeidentifier.com/contact"
    >
      {/* Hero — warm bark tones */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1920&q=80&auto=format&fit=crop)' }}
        />
        <div className="page-hero-contact absolute inset-0 opacity-90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center w-full">
          <div className="inline-block bg-white/10 border border-white/20 text-orange-200 rounded-full px-4 py-1.5 text-sm mb-6">
            📬 We're Listening
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact <span className="text-orange-200">Us</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            Questions, feedback, or partnership ideas — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="space-y-5">
              <h2 className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Get in Touch
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our team of botanists and engineers is ready to help. Whether you have a question about a tree identification, want to report a bug, or are interested in partnering with us — reach out!
              </p>

              {[
                { icon: '📧', title: 'Email Us', info: 'hello@treeidentifier.com', sub: 'We reply within 24 hours' },
                { icon: '🌍', title: 'Coverage', info: 'Global — all tree species', sub: 'Every continent supported' },
                { icon: '⏰', title: 'Response Time', info: 'Under 24 hours', sub: 'Mon–Fri, 9am–6pm EST' },
              ].map(({ icon, title, info, sub }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-forest-100 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-forest-50 flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                  <div>
                    <p className="text-forest-800 font-bold text-sm">{title}</p>
                    <p className="text-gray-700 text-sm font-medium">{info}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="bg-forest-50 rounded-2xl p-5 border border-forest-100">
                <h3 className="text-forest-800 font-bold text-sm mb-3">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { href: '/tree-identifier', label: '🌳 Use Tree Identifier' },
                    { href: '/about', label: '👥 About Us' },
                    { href: '/disclaimer', label: '⚖️ Read Disclaimer' },
                    { href: '/privacy-policy', label: '🔒 Privacy Policy' },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="block text-forest-600 hover:text-forest-800 text-sm transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-white rounded-3xl border border-forest-100 shadow-sm p-12 text-center">
                  <div className="text-6xl mb-5">🌿</div>
                  <h2 className="text-3xl font-black text-forest-700 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Message Sent!
                  </h2>
                  <p className="text-gray-500 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <div className="flex gap-4 justify-center">
                    <button onClick={() => setSent(false)} className="border-2 border-forest-300 text-forest-700 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-forest-50 transition-colors">
                      Send Another
                    </button>
                    <Link href="/tree-identifier" className="btn-forest px-6 py-2.5 rounded-full text-sm font-semibold">
                      Use Tool →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-forest-100 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-bark-600 to-bark-400 px-8 py-5">
                    <h2 className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>Send Us a Message</h2>
                    <p className="text-orange-100 text-sm mt-0.5">All fields required</p>
                  </div>
                  <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1.5">Your Name</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1.5">Email Address</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Subject</label>
                      <select
                        name="subject" required value={form.subject} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select a subject...</option>
                        <option>Tree Identification Question</option>
                        <option>Bug Report</option>
                        <option>Feature Request</option>
                        <option>Partnership Inquiry</option>
                        <option>General Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Message</label>
                      <textarea
                        name="message" required value={form.message} onChange={handleChange}
                        rows={6} placeholder="Tell us what's on your mind..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-forest w-full py-3.5 rounded-xl font-bold text-base">
                      Send Message 📬
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                      By submitting, you agree to our <Link href="/privacy-policy" className="text-forest-600 underline">Privacy Policy</Link>
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            Common Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 text-left">
            {[
              { q: 'How quickly will you respond?', a: 'We aim to respond to all messages within 24 hours on business days.' },
              { q: 'Can I report a wrong identification?', a: 'Yes! Use the contact form above and include the photo for review.' },
              { q: 'Do you offer API access?', a: 'Enterprise API access is available. Contact us for pricing and details.' },
              { q: 'Can I embed this tool on my website?', a: 'Partnership options are available. Reach out to discuss integration options.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-forest-50 rounded-2xl p-5 border border-forest-100">
                <h3 className="text-forest-800 font-bold text-sm mb-2">{q}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
