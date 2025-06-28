import Navbar from "./components/Navbar";
import Card from "./components/Pesona/Card";
import Santerra from "./components/Pesona/Santerra";

const Pesona = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen">
        <section className="w-full h-screen bg-[url('https://i.pinimg.com/736x/7a/76/1d/7a761d0c69df3858fceff11ef8708f48.jpg')] bg-cover bg-center relative pt-28">
          <Card />
          <Santerra />
        </section>
      </main>
    </>
  );
};

export default Pesona;
