"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const PHONE_URL = "tel:+59845224275";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Motos", href: "/#tienda" },
  { label: "Lubricantes", href: "/#lubricantes" },
  { label: "Fox Racing", href: "/#fox-racing" },
  { label: "Equipamiento", href: "/equipamiento" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(".nav-inner > *", {
        y: -18,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.08,
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/92 shadow-[0_8px_30px_rgba(15,35,62,0.06)] backdrop-blur-xl"
    >
      <div className="nav-inner container flex h-18 items-center justify-between gap-5 lg:grid lg:grid-cols-[auto_1fr_auto]">
        <a href="/" className="flex h-full items-center" aria-label="Schmidt Motos — inicio">
          <img
            src="/schmidt-motos-logo.png"
            alt="Schmidt Motos"
            className="h-11 w-auto rounded-md object-contain sm:h-12"
          />
        </a>

        <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-8" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.78rem] font-semibold tracking-[0.08em] text-slate-600 uppercase transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[0.85rem] font-semibold text-gold transition-colors hover:border-blue-200 hover:bg-blue-100 sm:inline-flex"
            href={PHONE_URL}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>+598 4522 4275</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-ink lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-slate-200 bg-white px-5 py-4 lg:hidden"
          aria-label="Principal móvil"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[0.9rem] font-semibold tracking-[0.04em] text-slate-700 uppercase transition-colors hover:bg-blue-50 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_URL}
            className="mt-2 rounded-lg bg-gold px-4 py-3 text-center text-[0.9rem] font-bold text-white"
          >
            Llamar al +598 4522 4275
          </a>
        </nav>
      )}
    </header>
  );
}
