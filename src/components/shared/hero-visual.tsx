import Image from "next/image";

import { portfolioConfig } from "@/config/portfolio";
import type { PortfolioLens } from "@/types/portfolio";

interface HeroVisualProps {
  lens: PortfolioLens;
}

export function HeroVisual({ lens }: HeroVisualProps) {
  const avatarUrl = portfolioConfig.identity.avatarUrl;

  return (
    <div className="hero-portrait">
      <div className="hero-portrait__halo" aria-hidden="true" />
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt="Portrait of Vigneshwaran N"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="hero-avatar"
        />
      ) : (
        <span className="hero-portrait__fallback">
          VN
        </span>
      )}

      <div className="hero-portrait__grade" aria-hidden="true" />
      <div className="hero-portrait__status">
        <span className="mono flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.12em]">
          <span className="status-dot" />
          {lens === "systems" ? "Systems online" : "AI lens active"}
        </span>
      </div>
    </div>
  );
}
