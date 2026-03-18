import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="pt-12 lg:pt-0 lg:pl-14 min-h-screen">
      {children}
    </main>
  );
}

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("py-12 sm:py-20 px-4 sm:px-8 lg:px-12", className)}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-[10px] font-mono font-bold text-primary tracking-[0.3em] uppercase">{children}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
