import { useState } from "react";
import Navbar from "./components/Navbar"
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <SplashScreen onFinish={() => setShowMain(true)} />}
      {showMain && (
        <>
          <Navbar />
          <section className="w-full h-screen bg-[url('/home.png')] bg-cover flex flex-col justify-center px-20 text-white">
            <h1 className="text-5xl font-bold">Selamat Datang di</h1>
            <h1 className="text-8xl font-bold">Desa Ijo</h1>
          </section>
        </>
      )}
    </>
  )
}

export default App