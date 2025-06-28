import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const isProfilePage = location.pathname === "/profile";
  const isPesonaPage = location.pathname === "/pesona";

  const handleSectionClick = (sectionId) => {
    setShowDropdown(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const getColorLink = () => {
    if (location.pathname === "/") {
      return "text-white";
    }

    if (location.pathname !== "/") {
      return "text-black";
    }
  };

  return (
    <nav className="w-full h-20 flex justify-between items-center px-10 pt-10 bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="w-16 h-16 bg-amber-950 rounded-full flex justify-center items-center text-white">
        Logo
      </div>
      <ul className="flex items-center gap-20 pr-10">
        <li
          className={cn(
            "px-12 py-2 rounded-full font-bold",
            location.pathname === "/"
              ? "bg-amber-950 text-white"
              : getColorLink()
          )}
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className="relative"
          onClick={() => isProfilePage && setShowDropdown(!showDropdown)}
        >
          <div
            className={cn(
              "px-12 py-2 rounded-full font-bold cursor-pointer relative z-10",
              location.pathname === "/profile"
                ? "bg-amber-950 text-white"
                : getColorLink()
            )}
          >
            <Link to={"/profile"}>Profile</Link>
          </div>
          {isProfilePage && showDropdown && (
            <ul className="absolute text-center left-1/2 transform -translate-x-1/2 -mt-10 w-36 pt-10 bg-amber-900/50 backdrop-blur-sm rounded-2xl shadow-lg py-2 z-[5]">
              <li className="px-4 py-1">
                <button
                  onClick={() => handleSectionClick("perkenalan")}
                  className="text-white hover:font-semibold transition-colors cursor-pointer"
                >
                  Perkenalan
                </button>
              </li>
              <li className="px-4 py-1">
                <button
                  onClick={() => handleSectionClick("sejarah")}
                  className="text-white hover:font-semibold transition-colors cursor-pointer"
                >
                  Sejarah
                </button>
              </li>
              <li className="px-4 py-1">
                <button
                  onClick={() => handleSectionClick("organisasi")}
                  className="text-white hover:font-semibold transition-colors cursor-pointer"
                >
                  Organisasi
                </button>
              </li>
              <li className="px-4 py-1">
                <button
                  onClick={() => handleSectionClick("data-penduduk")}
                  className="text-white hover:font-semibold transition-colors cursor-pointer"
                >
                  Data Penduduk
                </button>
              </li>
            </ul>
          )}
        </li>
        <li
          className="relative"
          onClick={() => isPesonaPage && setShowDropdown(!showDropdown)}
        >
          <div
            className={cn(
              "px-12 py-2 rounded-full font-bold cursor-pointer relative z-10",
              location.pathname === "/pesona"
                ? "bg-amber-950 text-white"
                : getColorLink()
            )}
          >
            <Link to={"/pesona"}>Pesona</Link>
          </div>
          {isPesonaPage && showDropdown && (
            <ul className="absolute text-center left-1/2 transform -translate-x-1/2 -mt-10 w-36 pt-10 bg-amber-900/50 backdrop-blur-sm rounded-2xl shadow-lg py-2 z-[5]">
              <li className="px-4 py-1">
                <button
                  onClick={() => handleSectionClick("wisata")}
                  className="text-white hover:font-semibold transition-colors cursor-pointer"
                >
                  Wisata
                </button>
              </li>
              <li className="px-4 py-1">
                <button
                  onClick={() => handleSectionClick("komoditas")}
                  className="text-white hover:font-semibold transition-colors cursor-pointer"
                >
                  Komoditas
                </button>
              </li>
              <li className="px-4 py-1">
                <button
                  onClick={() => handleSectionClick("potensi")}
                  className="text-white hover:font-semibold transition-colors cursor-pointer"
                >
                  Potensi
                </button>
              </li>
            </ul>
          )}
        </li>
        <li
          className={cn(
            "px-12 py-2 rounded-full font-bold",
            location.pathname === "/cerita"
              ? "bg-amber-950 text-white"
              : getColorLink()
          )}
        >
          <Link to={"/cerita"}>Cerita</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
