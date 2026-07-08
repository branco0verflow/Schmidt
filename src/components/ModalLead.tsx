"use client";

import { useEffect, useState } from "react";
import type { Moto } from "@/data/motos";

const PAISES = [
  { codigo: "+598", nombre: "Uruguay", bandera: "🇺🇾" },
  { codigo: "+55", nombre: "Brasil", bandera: "🇧🇷" },
  { codigo: "+54", nombre: "Argentina", bandera: "🇦🇷" },
];

const WHATSAPP_NUMERO = "59845224275";
const inputClass = "rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[0.9rem] text-ink outline-none transition-colors focus:border-blue-400 focus:ring-3 focus:ring-blue-100";
const labelClass = "text-[0.67rem] font-bold tracking-[0.14em] text-slate-500 uppercase";

export default function ModalLead({
  open,
  onClose,
  moto,
}: {
  open: boolean;
  onClose: () => void;
  moto: Moto;
}) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [paisCodigo, setPaisCodigo] = useState(PAISES[0].codigo);
  const [telefono, setTelefono] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setNombre("");
      setApellido("");
      setPaisCodigo(PAISES[0].codigo);
      setTelefono("");
      setPregunta("");
      setEnviado(false);
    }
  }, [open]);

  if (!open) return null;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const lineas = [
      `Hola Schmidt Motos, me interesa la ${moto.marca} ${moto.modelo} (${moto.version}).`,
      `Nombre: ${nombre} ${apellido}`,
      `Teléfono: ${paisCodigo} ${telefono}`,
      pregunta.trim() ? `Consulta: ${pregunta.trim()}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(lineas.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(true);
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Consultar por ${moto.marca} ${moto.modelo}`}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-110 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 shadow-[0_30px_100px_rgba(2,16,38,.35)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-gold"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {!enviado ? (
          <>
            <span className="text-[0.7rem] font-bold tracking-[0.18em] text-gold uppercase">{moto.marca} {moto.modelo}</span>
            <h2 className="mt-2 text-[1.9rem] font-extrabold leading-none tracking-[-0.03em] text-ink">Me interesa</h2>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-500">Completá tus datos y abriremos WhatsApp con la consulta preparada.</p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-nombre" className={labelClass}>Nombre</label>
                  <input id="lead-nombre" type="text" required value={nombre} onChange={(event) => setNombre(event.target.value)} className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-apellido" className={labelClass}>Apellido</label>
                  <input id="lead-apellido" type="text" required value={apellido} onChange={(event) => setApellido(event.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="lead-telefono" className={labelClass}>Teléfono celular</label>
                <div className="flex gap-2">
                  <select aria-label="Código de país" value={paisCodigo} onChange={(event) => setPaisCodigo(event.target.value)} className={`${inputClass} px-2.5`}>
                    {PAISES.map((pais) => (
                      <option key={pais.codigo} value={pais.codigo}>{pais.bandera} {pais.codigo}</option>
                    ))}
                  </select>
                  <input id="lead-telefono" type="tel" inputMode="tel" required placeholder="99 123 456" value={telefono} onChange={(event) => setTelefono(event.target.value)} className={`${inputClass} min-w-0 flex-1`} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="lead-pregunta" className={labelClass}>Tu consulta</label>
                <textarea id="lead-pregunta" rows={3} placeholder="¿Tenés alguna pregunta sobre esta moto? (opcional)" value={pregunta} onChange={(event) => setPregunta(event.target.value)} className={`${inputClass} resize-none`} />
              </div>

              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-[0.92rem] font-bold text-white transition hover:bg-gold-bright">
                Continuar por WhatsApp
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-7 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-blue-100 text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="30" height="30" aria-hidden>
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h2 className="mt-5 text-[1.9rem] font-extrabold leading-none text-ink">¡Listo!</h2>
            <p className="mt-3 text-[0.9rem] text-slate-500">Abrimos WhatsApp con tu consulta. Solo resta enviarla.</p>
            <button type="button" onClick={onClose} className="mt-6 rounded-lg border border-slate-300 bg-white px-8 py-3 text-[0.9rem] font-semibold text-ink transition hover:border-gold hover:text-gold">
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
