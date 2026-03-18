import { achievements } from "@/data/achievements";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { PageWrapper, Section, SectionLabel } from "@/components/Section";

export default function Achievements() {
  // Group achievements by type
  const wins = achievements.filter(a => a.icon === '🥇' || a.icon === '🥈' || a.icon === '🥉');
  const honors = achievements.filter(a => a.title.includes("Dean"));
  const others = achievements.filter(a => !wins.includes(a) && !honors.includes(a));

  return (
    <PageWrapper>
      <Section>
        <SectionLabel>Achievements</SectionLabel>
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground mb-2">
            {achievements.length} <span className="font-serif italic font-normal text-primary">recognitions</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Awards, competitions, and honors from 2017 to present</p>
        </FadeIn>

        {/* Podium wins — featured */}
        <div className="mb-12">
          <FadeIn>
            <h2 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Competition Wins</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {wins.map((a, i) => (
              <StaggerItem key={i}>
                <div className="bg-background p-5 hover:bg-card transition-colors h-full">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{a.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm leading-tight">{a.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1.5">{a.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Dean's Honour List — compact */}
        <div className="mb-12">
          <FadeIn>
            <h2 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Dean's Honour List</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-0 border border-border inline-flex">
              {honors.map((a, i) => (
                <div key={i} className={`px-4 py-3 ${i < honors.length - 1 ? "border-r border-border" : ""}`}>
                  <div className="text-lg font-bold font-mono text-foreground">{a.icon}</div>
                  <div className="text-[10px] font-mono text-muted-foreground mt-1">{a.description.split('·')[1]?.trim()}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Other */}
        <div>
          <FadeIn>
            <h2 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Other Recognition</h2>
          </FadeIn>
          <StaggerContainer>
            <div className="border-t border-border">
              {others.map((a, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3 py-3 border-b border-border hover:bg-card/30 transition-colors px-2 -mx-2">
                    <span className="text-lg shrink-0 mt-0.5">{a.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm">{a.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{a.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </Section>
    </PageWrapper>
  );
}
