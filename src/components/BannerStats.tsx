"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  Fuentes: cargá estas familias en tu layout (next/font o <link>):
    - Bricolage Grotesque (títulos)
    - DM Sans (cuerpo)
  Ej. con next/font/google:
    import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
*/

const items = [
  { eyebrow: "Motos", title: "Venta y asesoramiento", copy: "Encontrá el modelo que mejor se adapta a vos." },
  { eyebrow: "Motul", title: "Distribuidor oficial", copy: "Línea completa para motos y autos." },
  { eyebrow: "Fox Racing", title: "Colección completa", copy: "Indumentaria disponible en Colonia." },
  { eyebrow: "Repuestos", title: "Repuestos originales", copy: "Los conseguimos para tu moto o auto." },
];

const HEADING_FONT = "'Bricolage Grotesque', sans-serif";
const BODY_FONT = "'DM Sans', system-ui, sans-serif";

export default function BannerStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".feature-item", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      style={{
        fontFamily: BODY_FONT,
        background: "linear-gradient(135deg, #0a4a63 0%, #0d5d78 55%, #0a4a63 100%)",
        padding: "56px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="feature-item"
              style={{ position: "relative", padding: "8px 30px" }}
            >
              {i !== 0 && (
                <span
                  className="hidden lg:block"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 6,
                    width: 1,
                    height: "calc(100% - 12px)",
                    background:
                      "linear-gradient(180deg, transparent, rgba(255,255,255,0.16) 20%, rgba(255,255,255,0.16) 80%, transparent)",
                  }}
                />
              )}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  right: 18,
                  top: -14,
                  fontFamily: HEADING_FONT,
                  fontSize: "4.6rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "rgba(125,211,232,0.10)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  fontSize: "0.66rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#7fd6ec",
                }}
              >
                {item.eyebrow}
              </span>
              <h3
                style={{
                  position: "relative",
                  margin: "14px 0 0",
                  fontFamily: HEADING_FONT,
                  fontSize: "1.24rem",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#ffffff",
                  letterSpacing: "-0.015em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  position: "relative",
                  margin: "10px 0 0",
                  fontSize: "0.86rem",
                  lineHeight: 1.55,
                  color: "rgba(226,240,246,0.72)",
                  textWrap: "pretty",
                  maxWidth: "22ch",
                }}
              >
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
