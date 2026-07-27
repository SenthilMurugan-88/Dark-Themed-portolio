export type PortfolioLens = "systems" | "ai";

export type IconKey =
  | "java"
  | "python"
  | "go"
  | "sql"
  | "kafka"
  | "docker"
  | "postgresql"
  | "clickhouse"
  | "mongodb"
  | "aws"
  | "git"
  | "shell"
  | "ai"
  | "mcp"
  | "prompt"
  | "architecture"
  | "testing";

export interface SocialLink {
  label: string;
  href: string;
  kind: "linkedin" | "github" | "email";
}

export interface LensContent {
  eyebrow: string;
  headline: string;
  summary: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillEntry {
  name: string;
  icon: IconKey;
  group: "Languages" | "Systems" | "Data & Cloud" | "AI" | "Quality";
  lenses: PortfolioLens[];
}

export interface CertificationEntry {
  title: string;
  year: string;
  category: string;
  issuer?: string;
  image?: string;
  verificationUrl?: string;
}

export interface ProjectEntry {
  title: string;
  category: string;
  description: string;
  role?: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  status: "live" | "case-study" | "coming-soon";
}

export interface PortfolioConfig {
  identity: {
    name: string;
    shortName: string;
    role: string;
    location?: string;
    email: string;
    resumeUrl: string;
    avatarUrl?: string;
  };
  seo: {
    title: string;
    description: string;
    url?: string;
  };
  lenses: Record<PortfolioLens, LensContent>;
  socials: SocialLink[];
  navigation: Array<{ label: string; href: string }>;
  impact: ImpactMetric[];
  projects: ProjectEntry[];
  experience: ExperienceEntry[];
  skills: SkillEntry[];
  certifications: CertificationEntry[];
  openSource: {
    title: string;
    description: string;
    href?: string;
  };
  education: {
    institution: string;
    degree: string;
    period: string;
    score: string;
  };
}
