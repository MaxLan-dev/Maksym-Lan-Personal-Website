import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="pt-12 lg:pt-0 lg:pl-14 min-h-screen">
      {children}
    </main>
  );
}

export function Section({
  children,
  className,
  fullWidth = false,
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <section className={cn("py-12 sm:py-20 px-4 sm:px-8 lg:px-12", className)}>
      <div className={cn(!fullWidth && "max-w-5xl mx-auto")}>{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-xs font-mono text-muted-foreground">{children}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
