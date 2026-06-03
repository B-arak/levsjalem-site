import type { MetadataRoute } from "next";

const SITE_URL = "https://www.levshalem.net";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout/", "/thank-you/"],
      },
    ],
    sitemap: SITE_URL + "/sitemap.xml",
    host: SITE_URL,
  };
}
