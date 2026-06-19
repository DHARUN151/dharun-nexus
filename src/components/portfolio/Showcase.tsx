import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Award, Trophy, Cpu, CheckCircle2, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  projects,
  projectFilters,
  achievements,
  stats,
  certifications,
  whyHire,
} from "@/lib/portfolio-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(p * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="My Best Projects"
          subtitle="A selection of full-stack and IoT systems I've designed and built."
        />

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="glass group flex h-full flex-col rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {p.category}
                  </span>
                  {p.badge && (
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <Github className="size-4" /> View Code
                  <ExternalLink className="size-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const achievementIcons = [Award, Cpu, Trophy, Award];

export function Achievements() {
  return (
    <section id="achievements" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & Impact"
          subtitle="Milestones from research, innovation and leadership."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="glass rounded-3xl p-6 text-center">
                <p className="text-4xl font-bold text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            return (
              <Reveal key={a.label} delay={i * 0.05}>
                <div className="glass flex items-center gap-4 rounded-3xl p-6 transition-colors hover:border-primary/40">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <p className="font-semibold">{a.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous Learning"
          subtitle="Industry-recognized certifications across programming and data."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}>
              <div className="glass flex items-start gap-4 rounded-3xl p-6 transition-colors hover:border-primary/40">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Award className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-1 text-sm text-primary">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyHire() {
  return (
    <section className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Hire Me"
          title="The Value I Bring To Your Team"
          subtitle="Backed by real projects — a Razorpay-integrated platform, a filed patent and Scopus research."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyHire.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="glass h-full rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-base font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
