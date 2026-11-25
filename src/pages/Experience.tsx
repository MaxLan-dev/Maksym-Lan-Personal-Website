import { experiences } from "@/data/experience";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { PageWrapper, Section } from "@/components/Section";

export default function Experience() {
  return (
    <PageWrapper>
      <Section>
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl text-foreground mb-2">Experience</h1>
          <p className="text-sm text-muted-foreground mb-12">From astrophysics research in Lviv to enterprise platforms at CGI and startups</p>
        </FadeIn>

        <StaggerContainer className="space-y-0">
          {experiences.map((exp) => (
            <StaggerItem key={`${exp.company}-${exp.period}`}>
              <div className="relative border-b border-border">
                {/* Left timeline accent */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                <div className={`absolute left-0 top-7 w-2 h-2 -translate-x-1 border-2 bg-background ${exp.period.includes("Present") ? "border-primary" : "border-border"}`} />

                <div className="pl-8 py-6">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {exp.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline-offset-4 hover:underline">{exp.company}</a>
                        ) : exp.company} <span className="mx-1">·</span> {exp.location}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{exp.period}</span>
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5 mb-3">
                    {exp.description.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-muted-foreground/60 shrink-0">–</span>
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-xs font-mono text-muted-foreground">{skill}</span>
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
