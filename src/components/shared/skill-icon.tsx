import {
  Blocks,
  BrainCircuit,
  Braces,
  Cloud,
  Database,
  FlaskConical,
  MessageSquareCode,
  Workflow,
} from "lucide-react";
import {
  siApachekafka,
  siClickhouse,
  siDocker,
  siGit,
  siGnubash,
  siGo,
  siMongodb,
  siOpenjdk,
  siPostgresql,
  siPython,
} from "simple-icons";

import type { IconKey } from "@/types/portfolio";

interface SkillIconProps {
  icon: IconKey;
  className?: string;
}

interface BrandIcon {
  title: string;
  path: string;
  hex: string;
}

const brandIcons: Partial<Record<IconKey, BrandIcon>> = {
  java: siOpenjdk,
  python: siPython,
  go: siGo,
  kafka: siApachekafka,
  docker: siDocker,
  postgresql: siPostgresql,
  clickhouse: siClickhouse,
  mongodb: siMongodb,
  git: siGit,
  shell: siGnubash,
};

const genericIcons = {
  sql: Database,
  ai: BrainCircuit,
  mcp: Blocks,
  prompt: MessageSquareCode,
  architecture: Workflow,
  testing: FlaskConical,
  aws: Cloud,
} as const;

export function SkillIcon({ icon, className }: SkillIconProps) {
  const brand = brandIcons[icon];

  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={`${brand.title} logo`}
        className={className}
        style={{ color: `#${brand.hex}` }}
      >
        <path d={brand.path} fill="currentColor" />
      </svg>
    );
  }

  const Icon =
    genericIcons[icon as keyof typeof genericIcons] ?? Braces;
  return <Icon aria-hidden="true" className={className} />;
}
