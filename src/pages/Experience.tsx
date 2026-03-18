import { experiences } from "@/data/experience";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { PageWrapper, Section, SectionLabel } from "@/components/Section";

export default function Experience() {
  return (
    <PageWrapper>
      <Section>
        <SectionLabel>Experience</SectionLabel>
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground mb-2">
            Professional <span className="font-serif italic font-normal text-primary">Journey</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12">From astrophysics research to enterprise AI and startups</p>
        </FadeIn>

        <StaggerContainer className="space-y-0">
          {experiences.map((exp, i) => (
            <StaggerItem key={`${exp.company}-${exp.period}`}>
              <div className="relative border-b border-border group">
                {/* Left timeline accent */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-primary transition-colors" />
                <div className="absolute left-0 top-6 w-2 h-2 -translate-x-[3.5px] border-2 border-border bg-background group-hover:border-primary transition-colors" />

                <div className="pl-8 py-6 hover:bg-card/30 transition-colors">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {exp.company} <span className="text-border mx-1">·</span> {exp.location}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-primary tracking-wider shrink-0">{exp.period}</span>
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5 mb-3">
                    {exp.description.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-border shrink-0 mt-0.5">→</span>
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-[10px] font-mono text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </PageWrapper>
  );
}
