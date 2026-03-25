import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { PageWrapper, Section, SectionLabel } from "@/components/Section";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero — full-bleed editorial */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 relative">
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn>
            <div className="font-mono text-[10px] text-muted-foreground tracking-[0.4em] uppercase mb-6">
              Portfolio / {new Date().getFullYear()}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]">
              MAKSYM
              <br />
              <span className="font-serif italic font-normal text-primary">Lan</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 grid sm:grid-cols-2 gap-8 max-w-2xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Software Developer & AI/ML Engineer building intelligent systems.
                CS graduate, 2.5-year speedrun, 3.90 GPA.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently at CGI. Co-founder of GroupBuy.
                Former astrophysics researcher turned full-stack builder.
              </p>
            </div>
          </FadeIn>

          {/* Stats — brutalist boxes */}
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-0 border border-border inline-flex">
              {profile.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-5 py-4 ${i < profile.stats.length - 1 ? "border-r border-border" : ""}`}
                >
                  <div className="text-2xl font-bold font-mono text-foreground">{stat.value}</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Nav links as editorial list */}
          <FadeIn delay={0.4}>
            <div className="mt-16 border-t border-border">
              {[
                { label: "Experience", path: "/experience", num: "01" },
                { label: "Projects", path: "/projects", num: "02" },
                { label: "Education", path: "/education", num: "03" },
                { label: "Achievements", path: "/achievements", num: "04" },
                { label: "Resume", path: "/resume", num: "05" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center justify-between py-4 border-b border-border group hover:bg-card transition-colors px-2 -mx-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-muted-foreground">{item.num}</span>
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Side decoration */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {[
            { icon: Github, href: profile.github },
            { icon: Linkedin, href: profile.linkedin },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </section>

      {/* Skills — dense grid */}
      <Section className="border-t border-border">
        <SectionLabel>Technical Stack</SectionLabel>
        <StaggerContainer className="space-y-6">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <StaggerItem key={category}>
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 items-baseline">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{category}</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {skills.map((skill, i) => (
                    <span key={skill} className="text-sm text-foreground">
                      {skill}{i < skills.length - 1 && <span className="text-muted-foreground ml-3">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Contact — minimal */}
      <Section className="border-t border-border">
        <SectionLabel>Contact</SectionLabel>
        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Location", value: profile.location },
              { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { label: "LinkedIn", value: "/in/maksym-lan", href: profile.linkedin },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors break-all">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </PageWrapper>
  );
}
