import { useState, type FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/lib/portfolio-data";

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "EwwoyWn8VOScS2X2c";
const EMAILJS_SERVICE_ID = "service_u4e4v19";
const EMAILJS_TEMPLATE_ID = "template_6g0vqeh";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const templateParams = {
      to_email: profile.email,
      from_name: data.get("name"),
      from_email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      setSent(true);
      setLoading(false);
      form.reset();
      // Reset success message after 3 seconds
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      setLoading(false);
      console.error("EmailJS error:", err);
    }
  };

  return (
    <section id="contact" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have an opportunity or a project in mind? I'd love to hear from you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass flex h-full flex-col rounded-3xl p-7 sm:p-8">
              <h3 className="text-xl font-bold">Get in touch</h3>
              <div className="mt-6 space-y-4">
                {contactItems.map((c) => {
                  const inner = (
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                        <c.icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="truncate font-medium">{c.value}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block hover:text-primary">
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid size-11 place-items-center rounded-xl border border-border bg-secondary transition-colors hover:text-primary"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-11 place-items-center rounded-xl border border-border bg-secondary transition-colors hover:text-primary"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Download className="size-4" /> Download Resume
              </a>

              <div className="mt-4 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Karur, Tamil Nadu, India"
                  src="https://www.google.com/maps?q=Karur,Tamil%20Nadu,India&output=embed"
                  className="h-48 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 sm:p-8">
              {error && (
                <div className="mb-5 flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-600">
                  <AlertCircle className="size-4 shrink-0" />
                  {error}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" label="Your Name" placeholder="Jane Doe" />
                <Field name="email" label="Email" type="email" placeholder="jane@company.com" />
              </div>
              <div className="mt-5">
                <Field name="subject" label="Subject" placeholder="Job opportunity" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the role or project..."
                  className="w-full resize-none rounded-2xl border border-input bg-secondary px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="size-4" /> Message sent successfully!
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-input bg-secondary px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  );
}

export function FooterCTA() {
  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-primary-foreground/10 blur-2xl" />
            <h2 className="relative mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              Let's Build Something Impactful Together
            </h2>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                <Download className="size-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                <Send className="size-4" /> Contact Me
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
