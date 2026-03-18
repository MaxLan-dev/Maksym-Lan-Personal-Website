import { profile } from "@/data/profile";

export function Footer() {
  const text = `${profile.name} — SOFTWARE DEVELOPER — AI/ML ENGINEER — FULL STACK — WINNIPEG, MB — `;
  const repeated = text.repeat(4);

  return (
    <footer className="border-t border-border overflow-hidden py-3">
      <div className="marquee-slow whitespace-nowrap flex">
        <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase shrink-0">
          {repeated}
        </span>
        <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase shrink-0">
          {repeated}
        </span>
      </div>
    </footer>
  );
}
