import { useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import { projects } from "@/data/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Section, SectionHeader, PageWrapper } from "@/components/Section";
import { Badge } from "@/components/ui/badge";

const allSkills = [...new Set(projects.flatMap((p) => p.skills))].sort();

export default function Projects() {
  const [filter, setFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState<string | null>(null);

  const filtered = projects.filter((p) => {
    const matchesSearch = !filter || p.title.toLowerCase().includes(filter.toLowerCase()) || p.description.toLowerCase().includes(filter.toLowerCase());
    const matchesSkill = !skillFilter || p.skills.includes(skillFilter);
    return matchesSearch && matchesSkill;
  });

  return (
    <PageWrapper>
      <Section>
        <SectionHeader title="Projects" subtitle={`${projects.length} projects spanning AI, full-stack, research, and startups`} />

        {/* Search & Filter */}
        <FadeIn>
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSkillFilter(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${!skillFilter ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              >
                All
              </button>
              {["React", "Python", "Django", "TypeScript", "AI", "C++", ".NET"].map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSkillFilter(skillFilter === skill ? null : skill)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${skillFilter === skill ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <StaggerItem key={project.title}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-glow transition-all duration-500 group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight pr-2">
                    {project.title}
                  </h3>
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0">
                      {project.link.includes("github") ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    </a>
                  )}
                </div>
                {project.association && (
                  <div className="text-xs text-primary font-medium mb-2">{project.association}</div>
                )}
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="space-y-3">
                  <div className="text-xs text-muted-foreground font-mono">{project.period}</div>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.slice(0, 5).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[10px] font-normal px-2 py-0.5">
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 5 && (
                      <Badge variant="secondary" className="text-[10px] font-normal px-2 py-0.5">
                        +{project.skills.length - 5}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No projects match your search.</div>
        )}
      </Section>
    </PageWrapper>
  );
}
