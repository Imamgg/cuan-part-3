import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Pesona/Card";
import KomoditasPage from "./components/Pesona/Komoditas";
import PotensiPage from "./components/Pesona/Potensi";
import Santerra from "./components/Pesona/Santerra";

const Pesona = () => {
  const destinations = [
    {
      id: 1,
      title: "Jatim Park 2",
      // image: "/sejarah.png",
      description: "description Jatim Park 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero explicabo optio minima officiis doloremque sint labore necessitatibus repudiandae facere temporibus quis nobis, veniam sunt numquam reiciendis, aut amet fugiat.",
      populerActivity: "populerActivity Jatim Park 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      facilityAndService: "facilityAndService Jatim Park 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      location: "location Jatim Park 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      images: ["/sejarah.png", "/perkenalan.png", "/home.png"]
    },
    {
      id: 2,
      title: "Santerra",
      // image: "/perkenalan.png",
      description: "description Santerra Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero explicabo optio minima officiis doloremque sint labore necessitatibus repudiandae facere temporibus quis nobis, veniam sunt numquam reiciendis, aut amet fugiat.",
      populerActivity: "populerActivity Santerra Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      facilityAndService: "facilityAndService Santerra Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      location: "location Santerra Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      images: ["/perkenalan.png", "/home.png", "/sejarah.png"]
    },
    {
      id: 3,
      title: "Selecta",
      // image: "/home.png",
      description: "Selecta Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero explicabo optio minima officiis doloremque sint labore necessitatibus repudiandae facere temporibus quis nobis, veniam sunt numquam reiciendis, aut amet fugiat.",
      populerActivity: "populerActivity Selecta Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      facilityAndService: "facilityAndService Selecta Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      location: "location Selecta Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt blanditiis, iure totam nemo nostrum esse eius sapiente repellendus dignissimos accusamus. Praesentium adipisci aperiam quasi consequatur corrupti, cum inventore maxime.",
      images: ["/home.png", "/perkenalan.png", "/sejarah.png"]
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen">
        <section className="w-full h-screen bg-[url('https://i.pinimg.com/736x/7a/76/1d/7a761d0c69df3858fceff11ef8708f48.jpg')] bg-cover bg-center relative pt-28">
          <Card currentIndex={currentIndex} destinations={destinations} setCurrentIndex={setCurrentIndex} />
          <Santerra currentIndex={currentIndex} destinations={destinations} setCurrentIndex={setCurrentIndex} />
          <KomoditasPage />
          <PotensiPage />
        </section>
      </main>
    </>
  );
};

export default Pesona;
