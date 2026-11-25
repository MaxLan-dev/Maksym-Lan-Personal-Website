import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { PageWrapper, Section, SectionLabel } from "@/components/Section";

const sections = [
  { label: "Experience", path: "/experience", num: "01" },
  { label: "Projects", path: "/projects", num: "02" },
  { label: "Education", path: "/education", num: "03" },
  { label: "Achievements", path: "/achievements", num: "04" },
  { label: "Resume", path: "/resume", num: "05" },
];

const socials = [
  { icon: Github, href: profile.github, label: "GitHub", external: true },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn", external: true },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email", external: false },
];

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-16 relative">
        <motion.div
          className="max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-6">
            Winnipeg, MB · Software developer
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-[-0.03em] text-foreground leading-[0.95]">
            Maksym
            <br />
            <span className="text-primary">Lan</span>
          </h1>

          <div className="mt-8 grid sm:grid-cols-2 gap-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              Software developer at CGI, CTO of Hrove and lead on the GY Tea store. I build RAG systems,
              multi-tenant enterprise platforms and whole products, from payments to wearables.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Computer Science at the University of Manitoba, finished in 2.5 years with a 3.90 GPA.
              Before code, I modelled neutron stars as a researcher in Lviv.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 border border-border inline-flex flex-wrap">
            {profile.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-5 py-4 ${i < profile.stats.length - 1 ? "border-r border-border" : ""}`}
              >
                <div className="text-2xl font-medium font-mono tabular-nums text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Sections index */}
          <div className="mt-16 border-t border-border">
            {sections.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center justify-between py-4 border-b border-border group hover:bg-card transition-colors px-2 -mx-2"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">{item.num}</span>
                  <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform]" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Social links */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {socials.map(({ icon: Icon, href, label, external }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </section>

      {/* Writing */}
      <Section className="border-t border-border">
        <SectionLabel>Writing</SectionLabel>
        {profile.writing.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-border p-6 group hover:bg-card transition-colors"
          >
            <div className="font-mono text-xs text-muted-foreground">{post.date} · LinkedIn</div>
            <h2 className="text-xl text-foreground mt-2 group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">{post.blurb}</p>
            <span className="inline-flex items-center gap-1 text-sm text-primary mt-4">
              Read the article <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </a>
        ))}
      </Section>

      {/* Skills */}
      <Section className="border-t border-border">
        <SectionLabel>Skills</SectionLabel>
        <div className="space-y-6">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <div key={category} className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 items-baseline">
              <span className="text-xs font-mono text-muted-foreground">{category}</span>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {skills.map((skill, i) => (
                  <span key={skill} className="text-sm text-foreground">
                    {skill}{i < skills.length - 1 && <span className="text-muted-foreground ml-3">·</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section className="border-t border-border">
        <SectionLabel>Contact</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Location", value: profile.location },
            { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { label: "LinkedIn", value: "/in/maksym-lan", href: profile.linkedin },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-xs font-mono text-muted-foreground mb-1">{item.label}</div>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm text-foreground hover:text-primary transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm text-foreground">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
