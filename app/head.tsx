// app/head.tsx
export default function Head() {
  const siteUrl = "https://yourdomain.com"; // replace with your actual domain
  const heroImage = `${siteUrl}/images/hero-thumbnail.png`; // replace with your hero image path

  return (
    <>
      <title>Joshua Scott | Frontend Developer</title>
      <meta name="description" content="Freelance Frontend Developer — React, Next.js, WordPress, Shopify" />

      {/* Open Graph / Social Preview */}
      <meta property="og:title" content="Joshua Bob | Frontend Developer" />
      <meta property="og:description" content="I build sleek, interactive web experiences using modern frameworks and platforms." />
      <meta property="og:image" content={heroImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Joshua Bob | Frontend Developer" />
      <meta name="twitter:description" content="I build sleek, interactive web experiences using modern frameworks and platforms." />
      <meta name="twitter:image" content={heroImage} />

      {/* Optional: Favicon */}
      <link rel="icon" href="/js-logo.svg" />
    </>
  );
}
