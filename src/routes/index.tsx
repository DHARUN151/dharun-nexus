import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Experience, Skills, Services } from "@/components/portfolio/Sections";
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
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dharun Kumar S",
          jobTitle: "Full-Stack Developer & Software Engineer",
          email: "mailto:dharunkumars2006@gmail.com",
          url: "https://github.com/DHARUN151",
          sameAs: [
            "https://github.com/DHARUN151",
            "https://linkedin.com/in/dharunkumars151",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Karur",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
        }),
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
        <Services />
        <WhyHire />
        <Contact />
      </main>
      <FooterCTA />
    </div>
  );
}
