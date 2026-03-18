import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Section, SectionHeader, PageWrapper } from "@/components/Section";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available for opportunities
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
                  Hi, I'm{" "}
                  <span className="text-gradient">Maksym Lan</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  {profile.subtitle}
                </p>

                {/* Stats Bar */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="glass rounded-xl px-4 py-3 text-center min-w-[90px]">
                      <div className="text-xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-glow"
                  >
                    View Projects <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/experience"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
                  >
                    Experience
                  </Link>
                  <Link
                    to="/resume"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <Section>
        <SectionHeader title="About Me" />
        <FadeIn>
          <div className="space-y-4 max-w-3xl">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Skills */}
      <Section className="bg-gradient-subtle">
        <SectionHeader title="Technical Skills" subtitle="Technologies and tools I work with" />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <StaggerItem key={category}>
              <div className="glass rounded-2xl p-6 h-full hover:shadow-glow transition-shadow duration-500">
                <h3 className="font-semibold text-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Contact */}
      <Section>
        <SectionHeader title="Get in Touch" subtitle="Let's connect and build something great" />
        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: "Location", value: profile.location },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Linkedin, label: "LinkedIn", value: "maksym-lan", href: profile.linkedin },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 group hover:shadow-glow transition-all duration-500">
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-sm font-medium text-foreground">{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </PageWrapper>
  );
}
