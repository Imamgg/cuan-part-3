import AlbumFoto from "./components/Cerita/AlbumFoto";
import Artikel from "./components/Cerita/Artikel";
import Tentang from "./components/Cerita/Tentang";
import Navbar from "./components/Navbar";

const Cerita = () => {
    return (
        <div>
            <Navbar />
            <Artikel />
            <AlbumFoto />
            <Tentang />
        </div>
    )
}

export default Cerita;