import { profile } from "@/data/profile";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { PageWrapper, Section, SectionLabel } from "@/components/Section";

export default function Education() {
  const { education } = profile;

  return (
    <PageWrapper>
      {/* Degree hero */}
      <Section>
        <SectionLabel>Education</SectionLabel>
        <FadeIn>
          <div className="border border-border p-6 sm:p-10 relative">
            <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
              {education.period}
            </div>

            <h1 className="text-3xl sm:text-4xl text-foreground leading-tight max-w-xl">
              {education.degree.split('—')[0].trim()}
            </h1>
            <p className="text-primary text-lg mt-2">with Distinction</p>
            <p className="text-sm text-muted-foreground mt-4">{education.school} · {education.location}</p>

            {/* Stats row */}
            <div className="border border-border mt-8 inline-flex">
              {[
                { label: "GPA", value: education.gpa },
                { label: "Time", value: "2.5 years" },
                { label: "Dean's List", value: "5×" },
              ].map((s, i, arr) => (
                <div key={s.label} className={`px-5 py-3 ${i < arr.length - 1 ? "border-r border-border" : ""}`}>
                  <div className="text-xl font-medium font-mono tabular-nums text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Coursework */}
      <Section className="border-t border-border">
        <SectionLabel>Coursework</SectionLabel>
        <StaggerContainer className="space-y-8">
          {Object.entries(education.coursework).map(([category, courses]) => (
            <StaggerItem key={category}>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">{category}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1.5">
                  {courses.map((course) => (
                    <div key={course} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-muted-foreground/60 shrink-0">·</span>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Certifications */}
      <Section className="border-t border-border">
        <SectionLabel>Certifications</SectionLabel>
        <StaggerContainer className="space-y-4">
          {education.certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="border-l-2 border-primary pl-5 py-2">
                <h3 className="font-medium text-foreground">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.issuer} · {cert.date}</p>
                <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Clubs */}
      <Section className="border-t border-border">
        <SectionLabel>Clubs and leadership</SectionLabel>
        <StaggerContainer>
          <div className="border border-border">
            {education.clubs.map((club, i) => (
              <StaggerItem key={club.name}>
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 ${i < education.clubs.length - 1 ? "border-b border-border" : ""}`}>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{club.name}</h3>
                    <p className="text-muted-foreground text-sm">{club.role}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{club.period}</span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Section>
    </PageWrapper>
  );
}
