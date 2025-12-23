import { MetadataRoute } from "next";

/**
 * Robots.txt configuration for search engine crawlers
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: "https://lavielounge.com/sitemap.xml",
  };
}
