import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Cpu, Code2, Database, Layers } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  experiences,
  skillGroups,
  tools,
  concepts,
  services,
  profile,
} from "@/lib/portfolio-data";

const interests = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Layers, label: "Backend Engineering" },
  { icon: Cpu, label: "IoT Solutions" },
  { icon: Layers, label: "Software Architecture" },
  { icon: Database, label: "Database Systems" },
];

export function About() {
  return (
    <section id="about" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering Innovation Through Software"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <div className="glass rounded-3xl p-7 sm:p-9">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.summary}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I approach every challenge with a unique problem-solving methodology —
                analyzing it from multiple perspectives before engineering an efficient
                solution. Beyond code, I lead initiatives as Joint Secretary of the IETE
                Student Association, blending technical depth with leadership.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium"
                  >
                    <i.icon className="size-4 text-primary" /> {i.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-7 sm:p-9">
              <h3 className="text-xl font-bold">Education</h3>
              <div className="mt-6 border-l-2 border-primary/40 pl-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 grid size-5 place-items-center rounded-full bg-primary text-primary-foreground">
                    <GraduationCap className="size-3" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    2023 – 2027
                  </p>
                  <h4 className="mt-1 text-lg font-bold">
                    B.E. Electronics & Communication Engineering
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    M. Kumarasamy College of Engineering, Karur
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Specializing in software engineering, embedded systems and full-stack
                    development, with a passion for continuous learning.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-pad px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Built & Shipped"
          subtitle="Hands-on internships across software, embedded systems and industrial automation."
        />
        <div className="mt-14 space-y-5">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.06}>
              <div className="glass group rounded-3xl p-6 transition-all hover:border-primary/40 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <Briefcase className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold sm:text-xl">{exp.role}</h3>
                      <p className="text-sm font-medium text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="My Technical Toolkit"
          subtitle="Languages, frameworks and tools I use to build robust applications."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <div className="glass rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <div className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold">Tools & Platforms</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold">Core Concepts</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {concepts.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const serviceIcons = [Code2, Layers, Database, Cpu];

export function Services() {
  return (
    <section id="services" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build For You"
          subtitle="From idea to deployment — full-stack products, APIs, data layers and connected devices."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="glass group h-full rounded-3xl p-7 transition-all hover:border-primary/40 hover:shadow-glow sm:p-8">
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 border-t border-border pt-4 text-sm font-medium text-primary">
                    {s.value}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
