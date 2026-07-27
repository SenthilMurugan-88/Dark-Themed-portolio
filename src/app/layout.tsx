import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";

import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = {
  metadataBase: portfolioConfig.seo.url
    ? new URL(portfolioConfig.seo.url)
    : undefined,
  title: portfolioConfig.seo.title,
  description: portfolioConfig.seo.description,
  keywords: [
    "Vigneshwaran N",
    "Software Engineer",
    "Distributed Systems",
    "Java",
    "Kafka",
    "Agentic AI",
    "Model Context Protocol",
  ],
  authors: [{ name: portfolioConfig.identity.name }],
  creator: portfolioConfig.identity.name,
  openGraph: {
    type: "website",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070b14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioConfig.identity.name,
    jobTitle: portfolioConfig.identity.role,
    email: portfolioConfig.identity.email,
    sameAs: portfolioConfig.socials
      .filter((social) => social.kind !== "email")
      .map((social) => social.href),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: portfolioConfig.education.institution,
    },
    knowsAbout: portfolioConfig.skills.map((skill) => skill.name),
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
