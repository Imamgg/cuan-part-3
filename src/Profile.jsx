import Navbar from "./components/Navbar";
import DataPenduduk from "./components/Profile/DataPenduduk";
import Organisasi from "./components/Profile/Organisasi";
import Perkenalan from "./components/Profile/Perkenalan";
import Sejarah from "./components/Profile/Sejarah";

const Profile = () => {
    return (
        <>
            <Navbar />
            <Perkenalan />
            <Sejarah />
            <Organisasi />
            <DataPenduduk />
        </>
    )
};

export default Profile;