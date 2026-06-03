import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const SITE_URL = "https://www.levshalem.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL + "/", lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: SITE_URL + "/about", lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: SITE_URL + "/blog", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: SITE_URL + "/checkout", lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: SITE_URL + "/contact", lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: SITE_URL + "/terms", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
