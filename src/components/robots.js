import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description, canonical }) {
  const siteTitle = title ? `${title} | TreeIdentifier` : 'TreeIdentifier – AI Tree Identification Tool';
  const siteDesc = description || 'Identify any tree species instantly with our AI-powered tool. Upload a photo and get accurate species name, care tips, habitat info, and ecological significance.';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TreeIdentifier" />
        <meta name="keywords" content="tree identifier, tree identification, AI tree recognition, identify trees, tree species, plant identification" />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TreeIdentifier" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDesc} />
        
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌳</text></svg>" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
