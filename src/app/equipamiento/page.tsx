import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiendaEquipamiento from "@/components/TiendaEquipamiento";
import WhatsAppFloat from "@/components/ui/WhatsAppFloating";

export const metadata = {
  title: "Equipamiento",
  description: "Cascos, camperas, guantes e indumentaria para moto en Schmidt Motos.",
};

export default function EquipamientoPage() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main><TiendaEquipamiento /></main>
      <Footer />
    </>
  );
}
