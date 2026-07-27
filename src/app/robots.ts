import type { MetadataRoute } from "next";

import { portfolioConfig } from "@/config/portfolio";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const url = portfolioConfig.seo.url ?? "https://edith-v.github.io";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
