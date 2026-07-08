import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://schmidtmotos.vercel.app"),
  title: {
    default: "Schmidt Motos | Motos, Motul y Fox Racing en Colonia",
    template: "%s | Schmidt Motos",
  },
  description:
    "Schmidt Motos en Colonia: venta de motos, distribuidor oficial Motul con línea completa y colección Fox Racing.",
  applicationName: "Schmidt Motos",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon-180x180.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Schmidt Motos | Colonia, Uruguay",
    description:
      "Motos, lubricantes Motul e indumentaria Fox Racing en Colonia del Sacramento.",
    url: "https://schmidtmotos.vercel.app",
    siteName: "Schmidt Motos",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/schmidt-motos-logo.png",
        width: 1715,
        height: 864,
        alt: "Schmidt Motos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schmidt Motos | Colonia, Uruguay",
    description:
      "Motos, lubricantes Motul e indumentaria Fox Racing en Colonia del Sacramento.",
    images: ["/schmidt-motos-logo.png"],
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MotorcycleDealer",
  name: "Schmidt Motos",
  url: "https://schmidtmotos.vercel.app",
  image: "https://schmidtmotos.vercel.app/schmidt-motos-logo.png",
  telephone: "+598 4522 4275",
  email: "schmotos@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ap. Saravia 754",
    addressLocality: "Colonia",
    addressCountry: "UY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
