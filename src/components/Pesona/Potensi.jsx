import SDASection from "./SDASection";
import WargaSection from "./WargaSection";

export default function PotensiPage() {

  return (
    <section id="potensi" className="min-h-screen bg-gray-50 mt-20 px-20">
      <h1 className="text-5xl font-bold text-center mb-20">Potensi</h1>
      <SDASection />
      <WargaSection />
    </section>
  );
}
