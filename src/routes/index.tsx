import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Experience, Skills } from "@/components/portfolio/Sections";
import {
  Projects,
  Achievements,
  Certifications,
  WhyHire,
} from "@/components/portfolio/Showcase";
import { Contact, FooterCTA } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dharun Kumar S — Full-Stack Developer & Software Engineer" },
      {
        name: "description",
        content:
          "Dharun Kumar S — Full-Stack Developer, Software Engineer and IoT Innovator. Explore projects, experience, skills and achievements. Available for software roles.",
      },
      { property: "og:title", content: "Dharun Kumar S — Full-Stack Developer & Software Engineer" },
      {
        property: "og:description",
        content:
          "Building scalable software solutions through innovation and engineering excellence.",
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-V9EGJ6KZW8",
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V9EGJ6KZW8');
        `,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dharunkumars2006.github.io/",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <WhyHire />
        <Contact />
      </main>
      <FooterCTA />
    </div>
  );
}
