import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  number: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  number,
}: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <div>
        <div className="section-heading__meta">
          <p className="eyebrow">{eyebrow}</p>
          <span className="mono text-xs text-[var(--muted-foreground)]">
            /{number}
          </span>
        </div>
        <h2 className="section-title text-balance">{title}</h2>
      </div>
      {description ? (
        <p className="section-heading__description">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
