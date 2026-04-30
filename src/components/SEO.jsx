import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title = "Andrew B. Limpiada Jr. | Aspiring Computer Engineer",
  description = "Portfolio of Andrew B. Limpiada Jr., an aspiring Computer Engineer from Marinduque State College.",
  type = "website",
  keywords = "Andrew B. Limpiada Jr., Computer Engineering, Marinduque State College, Portfolio, React, JavaScript, MongoDB, MySQL",
  image = "/favicon/web-app-manifest-512x512.png",
  url = "https://example.com",
  locale = "en_US",
  publishedAt,
  modifiedAt = new Date().toISOString(),
  article,
}) => {
  const { pathname } = useLocation();
  const siteUrl = url.replace(/\/$/, "");
  const canonicalUrl = `${siteUrl}${pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    name: title,
    description,
    image: imageUrl,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Andrew B. Limpiada Jr.",
      url: siteUrl,
      sameAs: [
        "https://github.com/andrewjrlimpiada34-afk",
        "https://www.linkedin.com/in/limpiada-andrew-jr-b-3299513b7",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Andrew B. Limpiada Jr. Portfolio",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon/web-app-manifest-192x192.png`,
      },
    },
    keywords: keywords.split(", "),
    mainEntityOfPage: {
      "@id": canonicalUrl,
    },
  };

  if (type === "article" && article) {
    ldJson.headline = article.headline || title;
    ldJson.articleBody = article.body || description;
    ldJson.datePublished = article.publishedTime || publishedAt;
    ldJson.dateModified = article.modifiedTime || modifiedAt;
    ldJson["@type"] = "Article";
  } else {
    if (publishedAt) {
      ldJson.datePublished = publishedAt;
    }
    if (modifiedAt) {
      ldJson.dateModified = modifiedAt;
    }
  }

  return (
    <Helmet>
      <html lang={locale.split("_")[0]} />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Andrew B. Limpiada Jr." />
      <meta name="subject" content="Personal portfolio website" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Andrew B. Limpiada Jr. Portfolio" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={description} />
      {publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={description} />

      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Andrew B. Limpiada Jr." />
      <meta name="theme-color" content="#000000" />

      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
};

export default SEO;
