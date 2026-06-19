import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Open to Software Roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-5xl font-bold leading-[0.95] sm:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-lg font-semibold text-primary sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
            >
              <Mail className="size-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass grid size-11 place-items-center rounded-full transition-colors hover:text-primary"
            >
              <Github className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass grid size-11 place-items-center rounded-full transition-colors hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-card">
              <img
                src={profileImg}
                alt="Portrait of Dharun Kumar S"
                width={896}
                height={1152}
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
          <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-card">
            <p className="text-2xl font-bold text-primary">3+</p>
            <p className="text-xs text-muted-foreground">Internships</p>
          </div>
          <div className="glass absolute -right-3 top-6 rounded-2xl px-4 py-3 shadow-card">
            <p className="text-2xl font-bold text-primary">Patent</p>
            <p className="text-xs text-muted-foreground">Filed</p>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl justify-center">
        <a
          href="#about"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
        >
          <ArrowDown className="size-4 animate-bounce" /> Scroll to explore
        </a>
      </div>
    </section>
  );
}
