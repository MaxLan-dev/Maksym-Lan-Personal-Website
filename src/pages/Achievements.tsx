import { useState } from "react";
import { achievements, type Achievement } from "@/data/achievements";
import { motion, AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/Section";
import { Trophy, Award, Star, Medal, Zap } from "lucide-react";

// Tier config — icon, accent color via tailwind classes
const tierConfig: Record<Achievement["tier"], { icon: typeof Trophy; label: string; accent: string; bg: string; text: string }> = {
  gold:   { icon: Trophy, label: "1ST", accent: "border-yellow-500", bg: "bg-yellow-500/10", text: "text-yellow-600 dark:text-yellow-400" },
  silver: { icon: Award,  label: "2ND", accent: "border-zinc-400", bg: "bg-zinc-400/10", text: "text-zinc-500 dark:text-zinc-300" },
  bronze: { icon: Medal,  label: "3RD", accent: "border-amber-700", bg: "bg-amber-700/10", text: "text-amber-700 dark:text-amber-500" },
  honor:  { icon: Star,   label: "HON", accent: "border-primary", bg: "bg-primary/10", text: "text-primary" },
  merit:  { icon: Zap,    label: "MRT", accent: "border-muted-foreground/40", bg: "bg-muted/50", text: "text-muted-foreground" },
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const displayed = activeYear != null ? grouped.filter(([y]) => y === activeYear) : grouped;
  const totalCount = achievements.length;
  const yearRange =
    years.length > 0 ? `${Math.min(...years)}–${Math.max(...years)}` : "—";

  return (
    <PageWrapper>
      <div className="min-h-screen px-4 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto">

          {/* Oversized header */}
          <div className="mb-16 relative">
            <div className="font-mono text-[10px] text-muted-foreground tracking-[0.4em] uppercase mb-4">
              // ACHIEVEMENTS.LOG
            </div>
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-bold tracking-tighter text-foreground leading-[0.85] select-none">
              {totalCount}
            </h1>
            <div className="absolute top-12 sm:top-16 left-20 sm:left-32 lg:left-48">
              <span className="font-serif italic text-2xl sm:text-4xl text-primary">awards &</span>
              <br />
              <span className="font-serif italic text-2xl sm:text-4xl text-primary">honors</span>
            </div>
          </div>

          {/* Year selector */}
          <div className="flex items-center gap-1 mb-12 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveYear(null)}
              className={`px-4 py-2 font-mono text-xs tracking-wider transition-all shrink-0 ${
                activeYear == null ? "bg-foreground text-background font-bold" : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              ALL ({totalCount})
            </button>
            {years.map((year) => {
              const count = grouped.find(([y]) => y === year)?.[1].length ?? 0;
              return (
                <button
                  key={year}
                  onClick={() => setActiveYear(activeYear === year ? null : year)}
                  className={`px-4 py-2 font-mono text-xs tracking-wider transition-all shrink-0 ${
                    activeYear === year ? "bg-primary text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {year} ({count})
                </button>
              );
            })}
          </div>

          {/* Achievements */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear ?? "all"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {displayed.map(([year, items]) => (
                <div key={year} className="mb-14">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl sm:text-6xl font-bold font-mono text-foreground/10 select-none">{String(year)}</span>
                    <div className="flex-1 h-px bg-border" />
                    <span className="font-mono text-[10px] text-muted-foreground">{items.length} ITEM{items.length > 1 ? "S" : ""}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    {items.map((a, i) => {
                      const config = tierConfig[a.tier];
                      const Icon = config.icon;
                      const isTop = a.tier === "gold";
                      const isMedal = ["gold", "silver", "bronze"].includes(a.tier);
                      const span = isTop ? "sm:col-span-8" : isMedal ? "sm:col-span-6" : i % 3 === 0 ? "sm:col-span-7" : "sm:col-span-5";
                      const globalIdx = achievements.indexOf(a);

                      return (
                        <motion.div
                          key={`achievement-${globalIdx}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.3 }}
                          className={`${span} col-span-1`}
                          onMouseEnter={() => setHoveredIdx(globalIdx)}
                          onMouseLeave={() => setHoveredIdx(null)}
                        >
                          <div
                            className={`relative border-l-2 border transition-all duration-300 overflow-hidden group cursor-default ${
                              hoveredIdx === globalIdx
                                ? `${config.accent} ${config.bg} scale-[1.01]`
                                : "border-border border-l-border hover:border-muted-foreground/30"
                            } ${isTop ? "p-6 sm:p-8" : "p-4 sm:p-5"}`}
                          >
                            {/* Ghost icon watermark */}
                            <Icon
                              className={`absolute pointer-events-none transition-opacity duration-300 ${config.text} ${
                                hoveredIdx === globalIdx ? "opacity-15" : "opacity-[0.04]"
                              } ${isTop ? "w-24 h-24 -right-3 -bottom-3" : "w-16 h-16 -right-2 -bottom-2"}`}
                            />

                            <div className="relative z-10">
                              <div className="flex items-start gap-3">
                                {/* Icon badge */}
                                <div className={`shrink-0 w-8 h-8 flex items-center justify-center border ${config.accent} ${config.bg} transition-colors duration-300`}>
                                  <Icon className={`w-4 h-4 ${config.text}`} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className={`font-mono text-[9px] font-bold tracking-widest ${config.text}`}>
                                      {config.label}
                                    </span>
                                  </div>
                                  <h3 className={`font-bold text-foreground leading-tight ${isTop ? "text-base sm:text-lg" : "text-sm"}`}>
                                    {a.title}
                                  </h3>
                                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{a.description}</p>
                                </div>
                              </div>
                            </div>

                            <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                              hoveredIdx === globalIdx ? `w-full ${config.accent.replace("border-", "bg-")}` : "w-0 bg-transparent"
                            }`} />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom summary */}
          <div className="mt-16 border-t border-border pt-6 flex flex-wrap gap-8">
            {[
              { label: "1st Places", value: achievements.filter(a => a.tier === "gold").length, icon: Trophy },
              { label: "Dean's List", value: achievements.filter(a => a.title.includes("Dean")).length, icon: Star },
              { label: "Podium Finishes", value: achievements.filter(a => ["gold","silver","bronze"].includes(a.tier)).length, icon: Medal },
              { label: "Years Active", value: yearRange, icon: Zap },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-xl font-bold font-mono text-foreground">{s.value}</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
