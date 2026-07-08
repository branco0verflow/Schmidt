import { notFound } from "next/navigation";
import { motos } from "@/data/motos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotoDetail from "@/components/MotoDetail";
import Sugerencias from "@/components/Sugerencias";
import WhatsAppFloat from "@/components/ui/WhatsAppFloating";

export async function generateStaticParams() {
  return motos.map((moto) => ({ id: moto.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const moto = motos.find((m) => m.id === id);

  if (!moto) return {};

  return {
    title: `${moto.marca} ${moto.modelo} | Schmidt Motos`,
    description: moto.descripcion,
  };
}

export default async function MotoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const moto = motos.find((m) => m.id === id);

  if (!moto) notFound();

  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main>
        <MotoDetail moto={moto} />
        <Sugerencias moto={moto} />
      </main>
      <Footer />
    </>
  );
}
