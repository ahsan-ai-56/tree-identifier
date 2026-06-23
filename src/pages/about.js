

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --forest-deep: #0d2818;
  --forest-dark: #1e4722;
  --forest-mid: #2a7030;
  --forest-light: #3a8c3f;
  --bark-dark: #6b371c;
  --bark-mid: #a3521c;
  --bark-light: #d4842a;
  --moss: #72a84a;
  --cream: #fafaf7;
  --gold: #c8a84b;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: var(--cream);
  color: #1a2e1a;
  line-height: 1.6;
}

h1, h2, h3, h4, h5 {
  font-family: 'Playfair Display', Georgia, serif;
  line-height: 1.2;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f0f9f0;
}
::-webkit-scrollbar-thumb {
  background: var(--forest-mid);
  border-radius: 4px;
}

/* Hero tree background overlay */
.tree-hero-bg {
  background: linear-gradient(
    to bottom,
    rgba(13, 40, 24, 0.75) 0%,
    rgba(30, 71, 34, 0.65) 40%,
    rgba(42, 112, 48, 0.5) 100%
  );
}

/* Glassmorphism card */
.glass-card {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Animated leaf */
@keyframes leafFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-8px) rotate(2deg); }
  66% { transform: translateY(-4px) rotate(-1deg); }
}

.leaf-float {
  animation: leafFloat 4s ease-in-out infinite;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Upload zone */
.upload-zone {
  background: linear-gradient(135deg, rgba(58, 140, 63, 0.08) 0%, rgba(42, 112, 48, 0.05) 100%);
  border: 2px dashed rgba(58, 140, 63, 0.4);
  transition: all 0.3s ease;
}

.upload-zone:hover, .upload-zone.drag-over {
  background: linear-gradient(135deg, rgba(58, 140, 63, 0.15) 0%, rgba(42, 112, 48, 0.1) 100%);
  border-color: rgba(58, 140, 63, 0.8);
  transform: scale(1.01);
}

/* Green button */
.btn-forest {
  background: linear-gradient(135deg, #2a7030 0%, #3a8c3f 100%);
  color: white;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(42, 112, 48, 0.3);
}

.btn-forest:hover {
  background: linear-gradient(135deg, #1e4722 0%, #2a7030 100%);
  box-shadow: 0 6px 20px rgba(42, 112, 48, 0.45);
  transform: translateY(-2px);
}

/* Section divider */
.leaf-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}
.leaf-divider::before,
.leaf-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(58, 140, 63, 0.4), transparent);
}

/* Navbar */
.navbar {
  background: rgba(13, 40, 24, 0.97);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(58, 140, 63, 0.2);
}

/* Footer */
.footer-bg {
  background: linear-gradient(180deg, #0d2818 0%, #061510 100%);
}

/* Result cards */
.result-badge {
  background: linear-gradient(135deg, #2a7030, #3a8c3f);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Page hero variants */
.page-hero-about {
  background: linear-gradient(135deg, #0d2818 0%, #1e4722 60%, #235927 100%);
}
.page-hero-contact {
  background: linear-gradient(135deg, #6b371c 0%, #a3521c 60%, #d4842a 100%);
}
.page-hero-privacy {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
}
.page-hero-disclaimer {
  background: linear-gradient(135deg, #2d1b00 0%, #5c3a00 60%, #8b5a00 100%);
}

/* Prose styling */
.prose-forest h2 {
  color: var(--forest-mid);
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.prose-forest p {
  margin-bottom: 1rem;
  color: #374151;
  line-height: 1.8;
}
.prose-forest ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}
.prose-forest ul li {
  padding: 0.4rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #374151;
}
.prose-forest ul li::before {
  content: '🌿';
  position: absolute;
  left: 0;
  font-size: 0.85rem;
}
