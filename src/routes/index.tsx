import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About, Skills, Tools, Work } from "@/components/portfolio/sections";
import { Contact, Footer } from "@/components/portfolio/contact";
import { profile, about } from "@/lib/portfolio-data";

const description =
  "Portfolio of Emmanuel Nana Akyerefi Mensah, Digital Marketing and Data Analytics Specialist: Canva design, website auditing and SEO, email marketing and social media marketing.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  sameAs: [profile.linkedin],
  description: about.paragraphs[0],
  knowsAbout: [
    "Graphic Design",
    "Search Engine Optimisation",
    "Email Marketing",
    "Social Media Marketing",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emmanuel Nana Akyerefi Mensah | Digital Marketing Portfolio" },
      { name: "description", content: description },
      { property: "og:title", content: "Emmanuel Nana Akyerefi Mensah | Digital Marketing Portfolio" },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
