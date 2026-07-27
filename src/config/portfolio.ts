import type { PortfolioConfig } from "@/types/portfolio";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const portfolioConfig: PortfolioConfig = {
  identity: {
    name: "Vigneshwaran N",
    shortName: "VN",
    role: "Software Development Engineer",
    email: "palanivig12@gmail.com",
    resumeUrl: `${publicBasePath}/resume/vigneshwaran-resume.pdf`,
    avatarUrl: `${publicBasePath}/images/avatar-vigneshwaran-integrated.jpg`,
  },
  seo: {
    title: "Vigneshwaran N - Software Engineer",
    description:
      "Software engineer building reliable distributed systems and exploring practical Agentic AI.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://edith-v.github.io",
  },
  lenses: {
    systems: {
      eyebrow: "Software Engineer / Distributed Systems",
      headline: "I build systems that stay reliable under real load.",
      summary:
        "Production-focused engineer working across Java, Kafka, APIs, databases, CI/CD, and the operational details that make distributed software dependable.",
    },
    ai: {
      eyebrow: "Software Engineer / Applied AI",
      headline: "I connect reliable systems with practical intelligence.",
      summary:
        "Exploring Agentic AI, Model Context Protocol, prompt engineering, and AI/ML integrations through the same production-first engineering lens.",
    },
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/vigneshwaran2312",
      kind: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/EDITH-v",
      kind: "github",
    },
    {
      label: "Email",
      href: "mailto:palanivig12@gmail.com",
      kind: "email",
    },
  ],
  navigation: [
    { label: "Impact", href: "#impact" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ],
  impact: [
    {
      value: "15+",
      label: "Production enhancements",
      detail: "Delivered for large-scale Java distributed systems.",
    },
    {
      value: "99.9%",
      label: "Reliable delivery",
      detail: "Designed into an event-driven notification framework.",
    },
    {
      value: "60%",
      label: "Less manual overhead",
      detail: "Through Linux-based CI/CD rolling-upgrade automation.",
    },
    {
      value: "100+",
      label: "Queues monitored",
      detail: "Across a continuous operational monitoring suite.",
    },
  ],
  projects: [
    {
      title: "Project 01",
      category: "Case study slot",
      description:
        "Project details, contribution, architecture, and outcomes will be added here.",
      technologies: [],
      status: "coming-soon",
    },
    {
      title: "Project 02",
      category: "Case study slot",
      description:
        "This space is ready for a second project, repository, and supporting media.",
      technologies: [],
      status: "coming-soon",
    },
    {
      title: "Project 03",
      category: "Case study slot",
      description:
        "A third configurable project slot is reserved for future work.",
      technologies: [],
      status: "coming-soon",
    },
  ],
  experience: [
    {
      company: "Zoho",
      role: "Software Development Engineer",
      period: "May 2024 - Present",
      summary:
        "Building and operating production infrastructure for large-scale distributed systems.",
      achievements: [
        "Engineered Kafka middleware for multithreaded streaming pipelines handling terabyte-level volumes with zero message lag.",
        "Migrated core REST APIs to standardized client-server protocols, accelerating integration for 10+ internal teams.",
        "Architected an event-driven multi-channel notification framework backed by automated testing.",
        "Designed encryption protocols and scalable data structures for a strategic ClickHouse infrastructure migration.",
      ],
      technologies: [
        "Java",
        "Kafka",
        "REST APIs",
        "Distributed Systems",
        "Linux",
        "CI/CD",
      ],
    },
    {
      company: "Zoho",
      role: "Software Development Engineer Intern",
      period: "Feb 2024 - Apr 2024",
      summary:
        "Improved concurrency, security, and repeatable operations across production services.",
      achievements: [
        "Patched a critical multithreading concurrency bug in Apache Tomcat's caching mechanism and merged the fix upstream.",
        "Migrated hardcoded secrets to an encrypted centralized decryption interface.",
        "Automated 10+ Linux and XML workflows, reducing manual operations by 8+ hours each week.",
      ],
      technologies: ["Java", "Apache Tomcat", "Linux", "Shell", "XML"],
    },
  ],
  skills: [
    { name: "Java", icon: "java", group: "Languages", lenses: ["systems"] },
    {
      name: "Python",
      icon: "python",
      group: "Languages",
      lenses: ["systems", "ai"],
    },
    { name: "Go", icon: "go", group: "Languages", lenses: ["systems"] },
    { name: "SQL", icon: "sql", group: "Languages", lenses: ["systems"] },
    {
      name: "Distributed Systems",
      icon: "architecture",
      group: "Systems",
      lenses: ["systems"],
    },
    {
      name: "Microservices",
      icon: "architecture",
      group: "Systems",
      lenses: ["systems"],
    },
    { name: "Kafka", icon: "kafka", group: "Systems", lenses: ["systems"] },
    { name: "Docker", icon: "docker", group: "Systems", lenses: ["systems"] },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      group: "Data & Cloud",
      lenses: ["systems"],
    },
    {
      name: "ClickHouse",
      icon: "clickhouse",
      group: "Data & Cloud",
      lenses: ["systems"],
    },
    {
      name: "MongoDB",
      icon: "mongodb",
      group: "Data & Cloud",
      lenses: ["systems"],
    },
    { name: "AWS", icon: "aws", group: "Data & Cloud", lenses: ["systems"] },
    {
      name: "Agentic AI",
      icon: "ai",
      group: "AI",
      lenses: ["ai"],
    },
    {
      name: "Model Context Protocol",
      icon: "mcp",
      group: "AI",
      lenses: ["ai"],
    },
    {
      name: "Prompt Engineering",
      icon: "prompt",
      group: "AI",
      lenses: ["ai"],
    },
    {
      name: "AI & ML Concepts",
      icon: "ai",
      group: "AI",
      lenses: ["ai"],
    },
    {
      name: "Test Automation",
      icon: "testing",
      group: "Quality",
      lenses: ["systems", "ai"],
    },
    {
      name: "Git",
      icon: "git",
      group: "Quality",
      lenses: ["systems", "ai"],
    },
    {
      name: "Shell Scripting",
      icon: "shell",
      group: "Quality",
      lenses: ["systems"],
    },
  ],
  certifications: [
    {
      title: "Introduction to Data Analytics",
      year: "2022",
      category: "Data",
    },
    {
      title: "Data Structures and Algorithms",
      year: "2026",
      category: "Engineering",
    },
    {
      title: "System Design Patterns",
      year: "2026",
      category: "Engineering",
    },
  ],
  openSource: {
    title: "Apache Tomcat contributor",
    description:
      "Patched a critical multithreading concurrency bug in Tomcat's caching mechanism and merged the fix into the official project.",
  },
  education: {
    institution: "Saranathan College of Engineering, Tiruchirappalli",
    degree: "B.E. Computer Science and Engineering",
    period: "May 2024",
    score: "GPA 9.13 / 10",
  },
};
