import Image from "next/image";

const MOTUL_ADVISOR_URL = "https://www.motul.com/es-ES/products";

const FOX_WHATSAPP_URL = `https://wa.me/59845224275?text=${encodeURIComponent(
  "Hola Schmidt Motos, quiero consultar por la colección Fox Racing."
)}`;

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BrandHighlights() {
  return (
    <div className="bg-white">
      {/* MOTUL */}
      <section
        id="lubricantes"
        className="scroll-mt-24 border-b border-slate-200 py-16 sm:py-22"
      >
        <div className="container">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_90px_rgba(16,35,62,0.10)] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-80 overflow-hidden bg-red-800">
              <Image
                src="/landin/lola.png"
                alt="Motul, lubricantes para motos y autos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black/60 to-transparent" />

              <div className="relative z-1 flex h-full flex-col justify-end p-6 text-white sm:p-8 lg:p-10">
                <span className="text-[0.7rem] font-bold tracking-[0.22em] uppercase">
                  Distribuidor oficial
                </span>

                <p className="mt-2 max-w-100 text-[0.92rem] leading-relaxed text-white/90">
                  Línea completa en stock permanente de lubricantes para motos
                  y autos.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="text-[0.72rem] font-bold tracking-[0.2em] text-[#e51d2a] uppercase">
                Lubricantes y cuidado
              </span>

              <h2 className="mt-3 max-w-155 text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-ink">
                El lubricante correcto hace la diferencia
              </h2>

              <p className="mt-5 max-w-150 text-[1rem] leading-relaxed text-slate-600">
                En Schmidt Motos encontrás la línea Motul para proteger el
                motor, mejorar el rendimiento y cuidar cada componente de tu
                vehículo.
              </p>

              <div className="mt-7 rounded-2xl border border-red-100 bg-red-50 p-5">
                <span className="block text-[0.72rem] font-bold tracking-[0.14em] text-[#c91320] uppercase">
                  Asesor de lubricante
                </span>

                <p className="mt-1 text-[0.96rem] font-semibold text-ink">
                  Encontrá el lubricante correcto para tu moto.
                </p>
              </div>

              <a
                href={MOTUL_ADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#e51d2a] px-6 py-3.5 text-[0.9rem] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c91320]"
              >
                Abrir asesor Motul
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOX RACING */}
      <section
        id="fox-racing"
        className="scroll-mt-24 py-16 sm:py-22"
      >
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-[#0b0d11] text-white shadow-[0_28px_90px_rgba(16,35,62,0.14)]">
            <div className="relative z-1 grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Contenido */}
              <div className="flex flex-col justify-center px-8 pt-12 pb-8 sm:px-12 sm:pt-16 sm:pb-10 lg:px-18 lg:py-18">
                <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-white/75 uppercase">
                  Indumentaria original
                </span>

                <div className="mt-5 text-[clamp(3.2rem,8vw,6.5rem)] font-black leading-[0.86] tracking-[-0.07em]">
                  FOX
                  <span className="block text-white/55">RACING</span>
                </div>

                <h2 className="mt-7 max-w-140 text-[clamp(1.8rem,3vw,2.7rem)] font-bold leading-tight tracking-[-0.03em]">
                  Colección completa en Colonia del Sacramento
                </h2>

                <p className="mt-4 max-w-145 text-[1rem] leading-relaxed text-white/65">
                  Indumentaria Fox Racing para acompañarte dentro y fuera de la
                  moto. Consultá modelos, talles, colores y disponibilidad.
                </p>

                <a
                  href={FOX_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[0.9rem] font-bold text-[#0b0d11] transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Consultar colección
                  <ArrowIcon />
                </a>
              </div>

              {/* Imagen Fox */}
              <div className="relative min-h-80 overflow-hidden sm:min-h-110 lg:min-h-0">
                <Image
                  src="/landin/fox11.png"
                  alt="Colección de indumentaria Fox Racing disponible en Schmidt Motos"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent lg:bg-linear-to-l lg:from-black/15 lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}