import Navbar from "./components/Navbar";
import Card from "./components/Pesona/Card";

const Pesona = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-screen bg-[url('https://i.pinimg.com/736x/7a/76/1d/7a761d0c69df3858fceff11ef8708f48.jpg')] bg-cover flex flex-col justify-center pt-20">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-6xl font-bold text-amber-950 mb-2">Wisata</h1>
          <Card />
        </div>
      </section>
    </>
  );
};

export default Pesona;
