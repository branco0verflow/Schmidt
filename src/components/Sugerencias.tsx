"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motos, type Moto } from "@/data/motos";
import MotoCard from "./MotoCard";

gsap.registerPlugin(ScrollTrigger);

const CANTIDAD = 6;

function elegirSugerencias(actual: Moto): Moto[] {
  const resto = motos.filter((moto) => moto.id !== actual.id);
  const mismoEstilo = resto.filter((moto) => moto.estilo === actual.estilo);
  const mismaMarca = resto.filter((moto) => moto.marca === actual.marca && moto.estilo !== actual.estilo);
  const otras = resto.filter((moto) => moto.marca !== actual.marca && moto.estilo !== actual.estilo);
  return [...mismoEstilo, ...mismaMarca, ...otras].slice(0, CANTIDAD);
}

export default function Sugerencias({ moto }: { moto: Moto }) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const sugeridas = elegirSugerencias(moto);

  function actualizarFlechas() {
    const element = scrollRef.current;
    if (!element) return;
    setCanLeft(element.scrollLeft > 4);
    setCanRight(element.scrollLeft + element.clientWidth < element.scrollWidth - 4);
  }

  useEffect(() => { actualizarFlechas(); }, [sugeridas.length]);

  function desplazar(direction: 1 | -1) {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollBy({ left: direction * element.clientWidth * 0.8, behavior: "smooth" });
  }

  useGSAP(() => {
    gsap.from(".sugerencias-head > *", { y: 22, opacity: 0, duration: 0.65, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".sugerencias-head", start: "top 88%" } });
  }, { scope: sectionRef });

  if (sugeridas.length === 0) return null;

  const arrowClass = "absolute top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-lg transition-colors hover:border-gold hover:text-gold sm:grid";

  return (
    <section ref={sectionRef} className="relative border-t border-slate-200 bg-white py-14 sm:py-18">
      <div className="container">
        <div className="sugerencias-head mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">Te puede interesar</h2>
          <a href="/#tienda" className="text-[0.86rem] font-semibold text-gold hover:underline">Ver todo el catálogo →</a>
        </div>

        <div className="relative">
          <div ref={scrollRef} onScroll={actualizarFlechas} className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {sugeridas.map((sugerida) => <div key={sugerida.id} className="w-70 shrink-0 snap-start sm:w-76"><MotoCard moto={sugerida} /></div>)}
          </div>

          {canLeft && <button type="button" onClick={() => desplazar(-1)} aria-label="Ver anteriores" className={`${arrowClass} left-2`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>}
          {canRight && <button type="button" onClick={() => desplazar(1)} aria-label="Ver siguientes" className={`${arrowClass} right-2`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>}
        </div>
      </div>
    </section>
  );
}
