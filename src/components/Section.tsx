import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: Props) {
  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 bg-gradient-primary rounded-full" />
    </div>
  );
}

export function PageWrapper({ children }: Props) {
  return (
    <main className="pt-16 min-h-screen">
      {children}
    </main>
  );
}
