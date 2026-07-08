import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiendaMoto from "@/components/TiendaMoto";
import WhatsAppFloat from "@/components/ui/WhatsAppFloating";

export const metadata = {
  title: "Tienda de motos",
  description: "Catálogo de motos disponibles en Schmidt Motos, Colonia.",
};

export default function TiendaPage() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main><TiendaMoto /></main>
      <Footer />
    </>
  );
}
