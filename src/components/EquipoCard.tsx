import type { Equipo } from "@/data/equipo";
import SafeImage from "./SafeImage";

const WHATSAPP_URL = (equipo: Equipo) =>
  `https://wa.me/59845224275?text=${encodeURIComponent(
    `Hola Schmidt Motos, me interesa "${equipo.nombre}".`
  )}`;

export default function EquipoCard({ equipo }: { equipo: Equipo }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(16,35,62,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(16,35,62,0.14)]">
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <SafeImage
          src={equipo.imagenPrincipalEquipo}
          alt={equipo.nombre}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
          fallback={<span className="absolute inset-0 bg-slate-100" aria-hidden />}
        />

        <span className="absolute top-3 left-3 z-2 rounded-full bg-gold px-3 py-1.5 text-[0.66rem] font-bold tracking-[0.1em] text-white uppercase shadow-lg shadow-blue-950/15">
          {equipo.categoria}
        </span>

        {equipo.stock <= 5 && (
          <span className="absolute top-3 right-3 z-2 rounded-full bg-ink/85 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.06em] text-white uppercase backdrop-blur">
            Últimas unidades
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-5 pt-5 pb-5">
        <span className="text-[0.7rem] font-bold tracking-[0.18em] text-gold uppercase">{equipo.marca}</span>
        <h3 className="text-[1.25rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">{equipo.nombre}</h3>

        <div className="mt-0.5 flex items-center gap-2 text-[0.8rem] text-slate-500">
          <span>{equipo.talles.length} {equipo.talles.length === 1 ? "talle" : "talles"}</span>
          <span aria-hidden>·</span>
          <span>{equipo.colores.length} {equipo.colores.length === 1 ? "color" : "colores"}</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-[1.2rem] font-extrabold text-ink">
            {equipo.moneda} {equipo.precio.toLocaleString("es-UY")}
          </span>
          <a
            href={WHATSAPP_URL(equipo)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-[0.78rem] font-bold text-gold transition-colors hover:bg-gold hover:text-white"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
