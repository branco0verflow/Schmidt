"use client";

import { useState } from "react";
import Link from "next/link";
import type { Moto } from "@/data/motos";
import SafeImage from "./SafeImage";
import ModalLead from "./ModalLead";

export default function MotoDetail({ moto }: { moto: Moto }) {
  const galeria = Array.from(new Set([moto.imagenPrincipal, ...moto.otrasImagenes]));
  const [activeImage, setActiveImage] = useState(moto.imagenPrincipal);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const specs = [
    { label: "Motor", value: moto.especificaciones.motor },
    { label: "Chasis", value: moto.especificaciones.chasis },
    { label: "Dimensiones", value: moto.especificaciones.dimensiones },
  ];

  const placeholder = <span className="absolute inset-0 bg-slate-100" aria-hidden />;

  return (
    <section className="relative bg-[linear-gradient(180deg,#f8fbff_0%,#f3f6fa_100%)] py-8 sm:py-12">
      <div className="container">
        <Link href="/#tienda" className="mb-8 inline-flex items-center gap-2 text-[0.86rem] font-semibold text-slate-500 transition-colors hover:text-gold">
          ← Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-15">
          <div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_70px_rgba(16,35,62,0.10)]">
              <SafeImage src={activeImage} alt={`${moto.marca} ${moto.modelo}`} className="absolute inset-0 h-full w-full object-cover" fallback={placeholder} loading="eager" />
              <span className="absolute top-4 left-4 z-2 rounded-full bg-gold px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.1em] text-white uppercase">{moto.estilo}</span>
            </div>

            {galeria.length > 1 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {galeria.map((imagen) => (
                  <button
                    key={imagen}
                    type="button"
                    onClick={() => setActiveImage(imagen)}
                    className={`relative h-17 w-22 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition-colors ${activeImage === imagen ? "border-gold" : "border-slate-200 hover:border-blue-300"}`}
                  >
                    <SafeImage src={imagen} alt={`${moto.marca} ${moto.modelo}`} className="absolute inset-0 h-full w-full object-cover" fallback={placeholder} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:pt-2">
            <span className="text-[0.72rem] font-bold tracking-[0.22em] text-gold uppercase">{moto.marca}</span>
            <h1 className="mt-2 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink">{moto.modelo}</h1>
            <p className="mt-2 text-[1rem] text-slate-500">{moto.version}</p>
            <p className="mt-5 text-[2rem] font-extrabold tracking-[-0.03em] text-ink">{moto.precio}</p>
            <p className="mt-5 max-w-125 text-[1rem] leading-relaxed text-slate-600">{moto.descripcion}</p>

            {moto.colores.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-3 text-[0.7rem] font-bold tracking-[0.18em] text-slate-500 uppercase">Colores disponibles</h2>
                <div className="flex flex-wrap gap-4">
                  {moto.colores.map((color) => (
                    <button
                      key={color.nombre}
                      type="button"
                      onClick={() => { setActiveColor(color.nombre); setActiveImage(color.imagenPrincipalColor); }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <span className={`relative h-12 w-12 overflow-hidden rounded-full border-2 bg-white transition-colors ${activeColor === color.nombre ? "border-gold" : "border-slate-200 hover:border-blue-300"}`}>
                        <SafeImage src={color.imagenPrincipalColor} alt={color.nombre} className="absolute inset-0 h-full w-full object-cover" fallback={placeholder} />
                      </span>
                      <span className="text-[0.72rem] text-slate-500">{color.nombre}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-9">
              <h2 className="mb-3 text-[0.7rem] font-bold tracking-[0.18em] text-slate-500 uppercase">Especificaciones</h2>
              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex gap-6 py-3.5">
                    <dt className="w-30 shrink-0 text-[0.84rem] font-semibold text-slate-500">{spec.label}</dt>
                    <dd className="text-[0.9rem] text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <button type="button" onClick={() => setModalOpen(true)} className="mt-9 inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3.5 text-[0.92rem] font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-gold-bright">
              Me interesa
            </button>
          </div>
        </div>
      </div>

      <ModalLead open={modalOpen} onClose={() => setModalOpen(false)} moto={moto} />
    </section>
  );
}
