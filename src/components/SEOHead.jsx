import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title = "Obel & Company Advocates - Premier Law Firm in Kenya | Expert Legal Services",
  description = "Leading law firm in Kenya providing expert legal services in corporate law, real estate, family law, criminal defense, employment law, and tax law. 25+ years of experience. Free consultation available.",
  keywords = "law firm Kenya, lawyers Nairobi, legal services Kenya, advocates solicitors, corporate law Kenya, real estate lawyers, family law attorneys, criminal defense Kenya, employment law, tax law Kenya, legal consultation",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterTitle,
  twitterDescription,
  twitterImage = "/twitter-image.jpg",
  structuredData,
  noIndex = false,
  noFollow = false,
}) => {
  // TODO: Update base URL when final domain is decided
  const baseUrl = "https://obeladvocates.co.ke";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  const robotsContent = `${noIndex ? "noindex" : "index"}, ${
    noFollow ? "nofollow" : "follow"
  }, max-snippet:-1, max-image-preview:large, max-video-preview:-1`;

  return (
    <Helmet>
      {/* Basic SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Obel & Company Advocates" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogTitle || title} />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@obeladvocates" />
      <meta name="twitter:creator" content="@obeladvocates" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta
        name="twitter:description"
        content={twitterDescription || ogDescription || description}
      />
      <meta name="twitter:image" content={`${baseUrl}${twitterImage}`} />
      <meta
        name="twitter:image:alt"
        content={twitterTitle || ogTitle || title}
      />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
