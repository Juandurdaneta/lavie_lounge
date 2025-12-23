import { MetadataRoute } from "next";

/**
 * Auto-generated sitemap for SEO
 * Lists all public pages for search engine indexing
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lavielounge.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
