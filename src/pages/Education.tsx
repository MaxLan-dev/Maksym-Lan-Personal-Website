import { profile } from "@/data/profile";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Section, SectionHeader, PageWrapper } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, Award, Users, BookOpen, Trophy, Calendar } from "lucide-react";

export default function Education() {
  const { education } = profile;

  return (
    <PageWrapper>
      {/* Degree */}
      <Section>
        <SectionHeader title="Education" />
        <FadeIn>
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <Badge className="bg-primary/10 text-primary border-0 font-medium">
                  {education.period}
                </Badge>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{education.degree}</h2>
              <p className="text-muted-foreground text-lg">{education.school} · {education.location}</p>
              <div className="mt-6 flex flex-wrap gap-6">
                <div className="glass rounded-xl px-5 py-3 text-center">
                  <div className="text-2xl font-bold text-foreground">{education.gpa}</div>
                  <div className="text-xs text-muted-foreground">GPA</div>
                </div>
                <div className="glass rounded-xl px-5 py-3 text-center">
                  <div className="text-2xl font-bold text-foreground">2.5 yrs</div>
                  <div className="text-xs text-muted-foreground">Completion</div>
                </div>
                <div className="glass rounded-xl px-5 py-3 text-center">
                  <div className="text-2xl font-bold text-foreground">5×</div>
                  <div className="text-xs text-muted-foreground">Dean's List</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Coursework */}
      <Section className="bg-gradient-subtle">
        <SectionHeader title="Coursework" subtitle="Key courses across CS, Math, and Statistics" />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(education.coursework).map(([category, courses]) => (
            <StaggerItem key={category}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground">{category}</h3>
                </div>
                <ul className="space-y-1.5">
                  {courses.map((course) => (
                    <li key={course} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionHeader title="Certifications" />
        <StaggerContainer className="space-y-4">
          {education.certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="glass rounded-2xl p-6 flex items-start gap-4">
                <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer} · {cert.date}</p>
                  <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Clubs */}
      <Section className="bg-gradient-subtle">
        <SectionHeader title="Clubs & Leadership" />
        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {education.clubs.map((club) => (
            <StaggerItem key={club.name}>
              <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-primary" />
                  <Badge variant="secondary" className="text-xs font-mono">{club.period}</Badge>
                </div>
                <h3 className="font-semibold text-foreground">{club.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{club.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </PageWrapper>
  );
}
