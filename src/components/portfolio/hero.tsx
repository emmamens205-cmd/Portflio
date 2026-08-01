import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
            {profile.name}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Digital Marketing &<br className="hidden sm:block" /> Data Analytics Specialist
          </h1>
          <a
            href="#projects"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            View My Portfolio
          </a>
        </div>

        <div className="justify-self-center">
          <img
            src={profile.portrait}
            width={353}
            height={383}
            alt={`Portrait of ${profile.name}`}
            className="w-64 max-w-full sm:w-80"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
