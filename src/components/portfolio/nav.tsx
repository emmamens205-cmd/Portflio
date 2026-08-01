import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "@/lib/portfolio-data";

function scrollTo(id: string) {
  const el = id === "top" ? document.body : document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - 76 });
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = "top";
      for (const link of navLinks) {
        if (link.id === "top") continue;
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <button
          type="button"
          onClick={() => scrollTo("top")}
          className="font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground"
        >
          E. N. A. Mensah
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => scrollTo(l.id)}
                aria-current={active === l.id ? "true" : undefined}
                className={`text-sm font-medium uppercase tracking-wide ${
                  active === l.id
                    ? "text-primary underline underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-border p-2 text-foreground"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            className="rounded-full border border-border p-2 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul className="border-t border-border bg-background px-5 py-3 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  scrollTo(l.id);
                }}
                className="block w-full py-2 text-left text-sm font-medium uppercase tracking-wide text-foreground"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
