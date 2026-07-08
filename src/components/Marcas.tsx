"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const marcas = [
  { nombre: "Yumbo", imagen: "/images/marcas/lol/m1.png" },
  { nombre: "Baccio", imagen: "/images/marcas/lol/m2.png" },
  { nombre: "Keeway", imagen: "/images/marcas/lol/m3.png" },
  { nombre: "Benelli", imagen: "/images/marcas/lol/m4.png" },
  { nombre: "Bajaj", imagen: "/images/marcas/lol/m5.png" },
  { nombre: "Kawasaki", imagen: "/images/marcas/lol/m6.png" },
  { nombre: "Vespa", imagen: "/images/marcas/lol/m7.png" },
  { nombre: "Royal Enfield", imagen: "/images/marcas/lol/m8.png" },
  { nombre: "KTM", imagen: "/images/marcas/lol/m9.png" },
  { nombre: "Morbidelli", imagen: "/images/marcas/lol/m10.png" },
  { nombre: "Aprilia", imagen: "/images/marcas/lol/m11.png" },
  { nombre: "LS2", imagen: "/images/marcas/lol/m12.png" },
  { nombre: "Honda", imagen: "/images/marcas/lol/m13.png" },
  { nombre: "Beta", imagen: "/images/marcas/lol/m14.png" },
  { nombre: "Fox", imagen: "/images/marcas/lol/m15.png" },
];

const track = [...marcas, ...marcas];

export default function Marcas() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".marcas-wrap", {
      opacity: 0,
      y: 18,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".marcas-wrap", start: "top 90%", once: true },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="container pt-8 text-center">
        <span className="text-[0.68rem] font-bold tracking-[0.2em] text-slate-400 uppercase">Marcas disponibles</span>
      </div>
      <div className="marcas-wrap relative w-full overflow-hidden py-4 sm:py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[clamp(70px,12vw,220px)] bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.96)_35%,rgba(255,255,255,0)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[clamp(70px,12vw,220px)] bg-[linear-gradient(270deg,#fff_0%,rgba(255,255,255,.96)_35%,rgba(255,255,255,0)_100%)]" />

        <div className="flex w-max animate-marquee will-change-transform">
          {track.map((marca, index) => (
            <div
              className="group relative mx-[clamp(24px,4vw,52px)] flex h-[clamp(58px,7vw,82px)] w-[clamp(125px,15vw,185px)] shrink-0 items-center justify-center"
              key={`${marca.nombre}-${index}`}
            >
              <img
                className="relative z-1 max-h-[72%] max-w-full object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                src={marca.imagen}
                alt={marca.nombre}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
