import { Linkedin, Mail, Phone } from "lucide-react";
import { contact, profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-foreground">
          {contact.lead}
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <Linkedin className="size-4 text-primary" aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <Mail className="size-4 text-primary" aria-hidden="true" />
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <Phone className="size-4 text-primary" aria-hidden="true" />
              {profile.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-muted-foreground">
        {profile.name} · {profile.role}
      </div>
    </footer>
  );
}
