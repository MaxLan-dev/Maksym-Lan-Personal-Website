import { useState } from "react";
import { achievements, type Achievement } from "@/data/achievements";
import { motion, AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/Section";

const tierLabel: Record<Achievement["tier"], string | null> = {
  gold: "1st place",
  silver: "2nd place",
  bronze: "3rd place",
  honor: "Honour",
  merit: null,
};

function groupByYear() {
  const map = new Map<number, Achievement[]>();
  achievements.forEach((a) => {
    if (!map.has(a.year)) map.set(a.year, []);
    map.get(a.year)!.push(a);
  });
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

export default function Achievements() {
  const grouped = groupByYear();
  const years = grouped.map(([y]) => y);
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const displayed = activeYear != null ? grouped.filter(([y]) => y === activeYear) : grouped;
  const totalCount = achievements.length;
  const yearRange = years.length > 0 ? `${Math.min(...years)}–${Math.max(...years)}` : "";

  const summary = [
    { label: "1st places", value: achievements.filter((a) => a.tier === "gold").length },
    { label: "Dean's List terms", value: achievements.filter((a) => a.title.includes("Dean")).length },
    { label: "Podium finishes", value: achievements.filter((a) => ["gold", "silver", "bronze"].includes(a.tier)).length },
    { label: "Years", value: yearRange },
  ];

  const yearButton = (active: boolean) =>
    `px-4 py-2 font-mono text-xs border transition-colors shrink-0 ${
      active
        ? "bg-foreground text-background border-foreground"
        : "text-muted-foreground border-border hover:text-foreground"
    }`;

  return (
    <PageWrapper>
      <div className="min-h-screen px-4 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl text-foreground">Achievements</h1>
            <p className="text-sm text-muted-foreground mt-2">
              {totalCount} awards, honours and events, {yearRange}
            </p>
          </header>

          {/* Summary */}
          <div className="border border-border inline-flex flex-wrap mb-10">
            {summary.map((s, i) => (
              <div key={s.label} className={`px-5 py-4 ${i < summary.length - 1 ? "border-r border-border" : ""}`}>
                <div className="text-xl font-medium font-mono tabular-nums text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Year selector */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2">
            <button onClick={() => setActiveYear(null)} className={yearButton(activeYear == null)}>
              All ({totalCount})
            </button>
            {years.map((year) => {
              const count = grouped.find(([y]) => y === year)?.[1].length ?? 0;
              return (
                <button
                  key={year}
                  onClick={() => setActiveYear(activeYear === year ? null : year)}
                  className={yearButton(activeYear === year)}
                >
                  {year} ({count})
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear ?? "all"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              {displayed.map(([year, items]) => (
                <section key={year} className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-mono tabular-nums text-foreground">{year}</h2>
                    <div className="flex-1 h-px bg-border" />
                    <span className="font-mono text-xs text-muted-foreground">
                      {items.length} {items.length > 1 ? "items" : "item"}
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {items.map((a) => {
                      const label = tierLabel[a.tier];
                      return (
                        <li
                          key={`${a.title}-${a.description}`}
                          className={`border border-border p-5 ${a.tier === "gold" ? "border-l-2 border-l-primary" : ""}`}
                        >
                          {label && (
                            <div className={`font-mono text-xs mb-1 ${a.tier === "gold" ? "text-primary" : "text-muted-foreground"}`}>
                              {label}
                            </div>
                          )}
                          <h3 className="font-medium text-foreground leading-snug">{a.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{a.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  );
}
