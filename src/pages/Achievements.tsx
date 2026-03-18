import { achievements } from "@/data/achievements";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Section, SectionHeader, PageWrapper } from "@/components/Section";

export default function Achievements() {
  return (
    <PageWrapper>
      <Section>
        <SectionHeader title="Achievements" subtitle="Awards, competitions, and recognition from 2017 to present" />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <StaggerItem key={i}>
              <div className="glass rounded-2xl p-6 h-full hover:shadow-glow transition-all duration-500 group">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{a.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </PageWrapper>
  );
}
