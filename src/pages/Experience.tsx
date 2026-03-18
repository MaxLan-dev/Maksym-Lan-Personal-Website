import { experiences } from "@/data/experience";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Section, SectionHeader, PageWrapper } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <PageWrapper>
      <Section>
        <SectionHeader title="Professional Experience" subtitle="From astrophysics research to enterprise software and AI startups" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <StaggerContainer className="space-y-8">
            {experiences.map((exp, i) => (
              <StaggerItem key={`${exp.company}-${exp.period}`}>
                <div className={`relative flex flex-col lg:flex-row gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-glow hidden sm:block" style={{ top: "2rem" }} />

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />

                  {/* Card */}
                  <div className="flex-1 sm:pl-12 lg:pl-0">
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 group">
                      <div className="flex flex-wrap items-start gap-3 mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5" /> {exp.company}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" /> {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium font-mono whitespace-nowrap">
                          <Calendar className="w-3 h-3" /> {exp.period}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {exp.description.map((line, j) => (
                          <p key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-[10px] font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>
    </PageWrapper>
  );
}
