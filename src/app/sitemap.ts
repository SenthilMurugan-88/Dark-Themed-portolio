import type { MetadataRoute } from "next";

import { portfolioConfig } from "@/config/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = portfolioConfig.seo.url ?? "https://edith-v.github.io";

  return [
    {
      url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
