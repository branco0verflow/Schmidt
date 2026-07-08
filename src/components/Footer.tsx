const PHONE_URL = "tel:+59845224275";
const EMAIL_URL = "mailto:schmotos@hotmail.com";
const WHATSAPP_URL = `https://wa.me/59845224275?text=${encodeURIComponent(
  "Hola Schmidt Motos, quiero hacer una consulta."
)}`;
const DIRECCION = "Ap. Saravia 754, Colonia, Uruguay";
const MAPA_URL = `https://www.google.com/maps?q=${encodeURIComponent(DIRECCION)}&output=embed`;

const linkClass = "text-[0.9rem] text-white/72 transition-colors duration-200 hover:text-white";
const headingClass = "mb-1 text-[0.7rem] font-bold tracking-[0.2em] text-white uppercase";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="grain relative overflow-hidden bg-[linear-gradient(135deg,#063f93_0%,#075cc8_55%,#0870db_100%)] py-12 pb-7 text-white sm:py-16 lg:py-20">
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full border-[52px] border-white/7" />
      <div className="container relative z-1">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.72fr_1.25fr] lg:gap-14">
          <div className="max-w-100 sm:col-span-2 lg:col-span-1">
            <img className="mb-5 h-18 w-auto rounded-lg border border-white/20" src="/schmidt-motos-logo.png" alt="Schmidt Motos" />
            <p className="text-[0.96rem] leading-relaxed text-white/72">
              Motos, lubricantes Motul e indumentaria Fox Racing en Colonia. Atención personalizada para ayudarte a elegir lo que necesitás.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Navegación del pie">
            <h2 className={headingClass}>Secciones</h2>
            <a className={linkClass} href="/#tienda">Motos</a>
            <a className={linkClass} href="/#lubricantes">Lubricantes Motul</a>
            <a className={linkClass} href="/#fox-racing">Fox Racing</a>
            <a className={linkClass} href="/equipamiento">Equipamiento</a>
          </nav>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h2 className={headingClass}>Contacto</h2>
              <a href={PHONE_URL} className="text-[0.94rem] font-semibold text-white">+598 4522 4275</a>
              <a href={EMAIL_URL} className={linkClass}>schmotos@hotmail.com</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.82rem] font-semibold text-white transition hover:bg-white/18"
              >
                Consultar por WhatsApp
              </a>
              <span className="text-[0.9rem] leading-relaxed text-white/72">{DIRECCION}</span>
            </div>

            <div className="h-40 w-full overflow-hidden rounded-xl border border-white/20 bg-white/10">
              <iframe
                src={MAPA_URL}
                title="Ubicación de Schmidt Motos en el mapa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 border-t border-white/18 pt-6 text-[0.82rem] text-white/62 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Schmidt Motos. Todos los derechos reservados.</span>
          <span>Colonia, Uruguay</span>
        </div>
      </div>
    </footer>
  );
}
