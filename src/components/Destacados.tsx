"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motos } from "@/data/motos";
import MotoCard from "./MotoCard";

gsap.registerPlugin(ScrollTrigger);

export default function Destacados() {
  const sectionRef = useRef<HTMLElement>(null);
  const destacadas = motos.filter((moto) => moto.destacado);

  useGSAP(() => {
    gsap.from(".destacados-head > *", { y: 24, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".destacados-head", start: "top 85%" } });
    gsap.utils.toArray<HTMLElement>(".destacados-item").forEach((element, index) => {
      gsap.from(element, { y: 36, opacity: 0, duration: 0.65, ease: "power3.out", delay: (index % 3) * 0.08, scrollTrigger: { trigger: element, start: "top 90%" } });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="destacados" className="relative border-t border-blue-100 bg-[linear-gradient(180deg,#eef6ff_0%,#f8fbff_100%)] py-16 sm:py-22">
      <div className="container">
        <div className="destacados-head mb-10 max-w-160">
          <span className="mb-3 inline-block text-[0.7rem] font-bold tracking-[0.22em] text-gold uppercase">Selección de la casa</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-extrabold leading-[1] tracking-[-0.045em] text-ink">Destacados</h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-gold" />
          <p className="mt-5 text-[1rem] leading-relaxed text-slate-600">Modelos seleccionados para conocer en detalle. Consultá disponibilidad y opciones de compra.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destacadas.map((moto) => <div className="destacados-item min-w-0" key={moto.id}><MotoCard moto={moto} /></div>)}
        </div>
      </div>
    </section>
  );
}
