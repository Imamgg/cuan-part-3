import { useState } from "react";

const AlbumFoto = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop",
  ];

  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  let dataGambar = [];
  for (let i = 1; i < imageUrls.length; i++) {
    dataGambar.push(
      <img
        key={i}
        className="block w-full h-56 object-cover rounded-3xl cursor-pointer hover:opacity-80 transition-opacity"
        src={imageUrls[i]}
        alt={`gambar ${i}`}
        onClick={() => handleImageClick(imageUrls[i])}
      />
    );
  }
  return (
    <>
      <section className="w-full h-screen px-10" id="albumFoto">
        <h1 className="text-6xl font-bold text-center pt-24 mb-8 text-amber-950">
          Album Foto
        </h1>
        <div className="flex">
          <div className="w-1/3 relative pr-10">
            <div className="w-4 aspect-square rounded-full bg-amber-950 absolute right-0 top-0"></div>
            <div className="w-[2px] bg-amber-950 h-full absolute right-[0.4rem]"></div>
            <div className="w-4 aspect-square rounded-full bg-amber-950 absolute right-0 bottom-0"></div>
            <div className="max-h-screen flex flex-col gap-4 overflow-y-scroll scrollbar-none">
              <img
                className="block w-full h-56 object-cover rounded-3xl cursor-pointer hover:opacity-80 transition-opacity"
                src={imageUrls[0]}
                alt="gambar 0"
                onClick={() => handleImageClick(imageUrls[0])}
              />
              {dataGambar.map((item) => item)}
            </div>
          </div>
          <div className="w-2/3 pl-6">
            <img
              className="w-full h-full object-cover rounded-4xl"
              src={selectedImage}
              alt="gambar utama"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumFoto;
