"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Moto } from "@/data/motos";

export default function MotoCard({ moto }: { moto: Moto }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setBroken(true);
  }, []);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(16,35,62,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(16,35,62,0.14)]">
      <Link href={`/motos/${moto.id}`} className="flex h-full flex-col">
        <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
          {!broken ? (
            <img
              ref={imgRef}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
              src={moto.imagenPrincipal}
              alt={`${moto.marca} ${moto.modelo}`}
              loading="lazy"
              onError={() => setBroken(true)}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-[0.78rem] font-semibold text-slate-400">Imagen no disponible</div>
          )}

          <span className="absolute top-3 left-3 z-2 rounded-full bg-gold px-3 py-1.5 text-[0.66rem] font-bold tracking-[0.1em] text-white uppercase shadow-lg shadow-blue-950/15">
            {moto.estilo}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 px-5 pt-5 pb-5">
          <span className="text-[0.7rem] font-bold tracking-[0.18em] text-gold uppercase">{moto.marca}</span>
          <h3 className="text-[1.55rem] font-extrabold leading-tight tracking-[-0.025em] text-ink">{moto.modelo}</h3>
          <div className="mt-0.5 text-[0.82rem] text-slate-500">{moto.version}</div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <span className="text-[1.25rem] font-extrabold tracking-[-0.02em] text-ink">{moto.precio}</span>
            <span className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-[0.78rem] font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-white">
              Ver ficha
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
