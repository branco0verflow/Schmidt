"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const acciones = [
  { label: "Ver motos", href: "#tienda", primary: true },
  { label: "Lubricantes Motul", href: "#lubricantes", primary: false },
  { label: "Equipamiento", href: "/equipamiento", primary: false },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 18, opacity: 0, duration: 0.55 })
        .from(".hero-title", { y: 28, opacity: 0, duration: 0.75 }, "-=0.25")
        .from(".hero-copy", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-btn", { y: 20, opacity: 0, duration: 0.55, stagger: 0.1 }, "-=0.35");
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative grid min-h-125 w-full place-items-center overflow-hidden py-20 sm:min-h-145"
    >
      <video
        className="absolute inset-0 h-full w-full bg-blue-950 object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/videos/Lola-h264.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,22,52,.86)_0%,rgba(5,61,132,.68)_48%,rgba(3,24,52,.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.2)_100%)]" />

      <div className="container relative z-2">
        <div className="max-w-190 text-left">
          <span className="hero-eyebrow inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur">
            Schmidt Motos · Colonia
          </span>
          <Image
            src="/logoo.png"
            alt="Schmidt Motos"
            width={1767}
            height={890}
            priority
            className="hero-title mt-5 h-auto w-full max-w-110 sm:max-w-140 lg:max-w-165"
          />
          <p className="hero-copy mt-5 max-w-150 text-[1rem] leading-relaxed text-white/82 sm:text-[1.15rem]">
            Motos, equipamiento, lubricantes Motul y la colección Fox Racing en un solo lugar.
          </p>

          <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
            {acciones.map((accion) => (
              <a
                key={accion.label}
                href={accion.href}
                className={
                  accion.primary
                    ? "hero-btn inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[0.92rem] font-bold text-gold shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
                    : "hero-btn inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/18"
                }
              >
                <span>{accion.label}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
