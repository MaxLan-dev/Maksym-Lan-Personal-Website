import { useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import { projects } from "@/data/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { PageWrapper, Section, SectionLabel } from "@/components/Section";

const quickFilters = ["All", "React", "Python", "AI", "Django", "TypeScript", ".NET", "C++"];

export default function Projects() {
  const [filter, setFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const q = filter.trim().toLowerCase();
  const filtered = projects.filter((p) => {
    const haystack = [
      p.title,
      p.description,
      p.period,
      p.association ?? "",
      ...p.skills,
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = !q || haystack.includes(q);
    const matchesSkill = activeFilter === "All" || p.skills.includes(activeFilter);
    return matchesSearch && matchesSkill;
  });
  const hasActiveQuery = Boolean(q) || activeFilter !== "All";

  return (
    <PageWrapper>
      <Section>
        <SectionLabel>Projects</SectionLabel>

        <FadeIn>
          <div className="mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground">
              {hasActiveQuery ? (
                <>
                  {filtered.length}
                  <span className="font-serif italic font-normal text-primary"> of {projects.length}</span>{" "}
                  <span className="font-serif italic font-normal text-primary">shown</span>
                </>
              ) : (
                <>
                  {projects.length}{" "}
                  <span className="font-serif italic font-normal text-primary">builds</span>
                </>
              )}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">AI · Full-stack · Research · Startups</p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm font-mono bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-wrap gap-0 border border-border">
              {quickFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(activeFilter === f ? "All" : f)}
                  className={`px-3 py-2 text-[10px] font-mono uppercase tracking-wider border-r border-border last:border-r-0 transition-colors ${
                    activeFilter === f
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Project list — editorial table style */}
        <StaggerContainer animateOnMount>
          <div className="border-t border-border">
            {filtered.map((project, i) => (
              <StaggerItem key={`${project.title}-${project.period}`}>
                <div className="border-b border-border py-5 group hover:bg-card/50 transition-colors px-2 -mx-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[10px] text-muted-foreground w-6">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {project.title}
                        </h3>
                        {project.association && (
                          <span className="hidden sm:inline text-[10px] font-mono text-primary border border-primary px-2 py-0.5 shrink-0">
                            {project.association}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground ml-9 line-clamp-2">{project.description}</p>
                      <div className="flex items-center gap-2 mt-2 ml-9 flex-wrap">
                        <span className="font-mono text-[10px] text-muted-foreground">{project.period}</span>
                        <span className="text-border">|</span>
                        {project.skills.slice(0, 4).map((skill) => (
                          <span key={skill} className="text-[10px] font-mono text-muted-foreground">{skill}</span>
                        ))}
                        {project.skills.length > 4 && (
                          <span className="text-[10px] font-mono text-muted-foreground">+{project.skills.length - 4}</span>
                        )}
                      </div>
                    </div>
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors shrink-0 mt-1"
                      >
                        {project.link.includes("github") ? <Github className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {filtered.length === 0 && (
          <div className="py-16 text-center font-mono text-sm text-muted-foreground">
            No matches found.
          </div>
        )}
      </Section>
    </PageWrapper>
  );
}
