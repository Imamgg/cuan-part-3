import { HeroSection } from "./components/hero-section";
import { CategoryHeaders } from "./components/category-headers";
import { ContentCard } from "./components/content-card";
import Image from "next/image";

export default function KomoditasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white text-center">
            Komoditas
          </h1>
        </div>
      </div>

      {/* Category Headers */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="border-b-2 border-gray-300 pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Hasil Laut</h2>
            </div>
            <div className="border-b-2 border-gray-300 pb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Hasil Pertanian
              </h2>
            </div>
            <div className="border-b-2 border-gray-300 pb-4">
              <h2 className="text-2xl font-bold text-gray-800">UMKM</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <ContentCard
              title="Hasil Laut (Ikan)"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed vestibulum nunc, eget aliquam felis. Sed nunc purus, accumsan sit amet dictum in, ornare in dui. Ut imperdiet ante eros, sed porta ex eleifend ac. Donec non porttitor leo. Nulla luctus ex lacus, ut scelerisque odio semper nec."
              imageSrc="/placeholder.svg?height=128&width=192"
              imageAlt="Fresh fish"
              buttonText="Lihat Lebih Detail Tentang Hasil Laut"
            />

            <ContentCard
              title="Hasil Laut"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed vestibulum nunc, eget aliquam felis. Sed nunc purus, accumsan sit amet dictum in, ornare in dui. Ut imperdiet ante eros, sed porta ex eleifend ac. Donec non porttitor leo. Nulla luctus ex lacus, ut scelerisque odio semper nec."
              imageSrc="/placeholder.svg?height=128&width=192"
              imageAlt="Seafood and crabs"
              buttonText="Lihat Lebih Detail Tentang Hasil Laut"
            />
          </div>

          {/* Right Image */}
          <div className="w-96 h-80 relative">
            <Image
              src="/placeholder.svg?height=320&width=384"
              alt="Market scene with seafood and vegetables"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=256&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
    </div>
  );
}
