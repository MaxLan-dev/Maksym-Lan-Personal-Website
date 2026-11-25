import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border lg:pl-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
        <span>
          {profile.name} · Software developer · Winnipeg, MB
        </span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
