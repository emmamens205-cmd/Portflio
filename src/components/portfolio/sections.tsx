import { about, profile, projects, skills, tools } from "@/lib/portfolio-data";
import { SectionHeading } from "./primitives";

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[320px_1fr] md:py-20">
        <img
          src={profile.aboutPhoto}
          width={427}
          height={688}
          loading="lazy"
          alt={`${profile.name} wearing a Generation Ghana Digital Marketing Training shirt`}
          className="w-64 max-w-full justify-self-center md:w-full"
        />
        <div>
          <SectionHeading title="About Me" />
          <p className="font-semibold text-foreground">{about.opening}</p>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading title="Skills" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-2xl border border-border bg-card p-6 text-lg font-semibold text-card-foreground shadow-sm"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Tools() {
  return (
    <section id="tools" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading title="Tools" />
        <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {tools.map((t) => (
            <li key={t.name} className="flex w-24 flex-col items-center gap-3">
              <img
                src={t.src}
                width={256}
                height={256}
                loading="lazy"
                alt={`${t.name} logo`}
                className="size-16 object-contain sm:size-20"
              />
              <span className="text-sm text-muted-foreground">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="projects" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading title="Recent Projects" />
        <div className="grid items-start gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <h3 className="mb-4 font-display text-base font-bold uppercase tracking-wide text-card-foreground">
                {p.title}
              </h3>
              <div
                className={`grid gap-4 ${p.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
              >
                {p.images.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="mx-auto max-h-[560px] w-full rounded-xl border border-border object-contain"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
