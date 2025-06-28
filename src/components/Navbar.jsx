import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";

const Navbar = () => {
    const location = useLocation();

    const getColorLink = () => {
        if (location.pathname === "/") {
            return "text-white";
        }

        if (location.pathname !== "/") {
            return "text-black";
        }
    }

    return (
        <nav className="w-full h-20 flex justify-between items-center px-10 pt-10 bg-transparent fixed top-0 left-0 right-0 z-50">
            <div className="w-16 h-16 bg-amber-950 rounded-full flex justify-center items-center text-white">
                Logo
            </div>
            <ul className="flex items-center gap-20 pr-10">
                <li
                    className={cn(
                        "px-7 py-2 rounded-full font-bold",
                        location.pathname === "/" ? "bg-amber-950 text-white" : getColorLink()
                    )}>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li
                    className={cn(
                        "px-7 py-2 rounded-full font-bold",
                        location.pathname === "/profile" ? "bg-amber-950 text-white" : getColorLink()
                    )}>
                    <Link to={"/profile"}>
                        Profile
                    </Link>
                </li>
                <li
                    className={cn(
                        "px-7 py-2 rounded-full font-bold",
                        location.pathname === "/pesona" ? "bg-amber-950 text-white" : getColorLink()
                    )}>
                    <Link to={"/pesona"}>
                        Pesona
                    </Link>
                </li>
                <li
                    className={cn(
                        "px-7 py-2 rounded-full font-bold",
                        location.pathname === "/cerita" ? "bg-amber-950 text-white" : getColorLink()
                    )}>
                    <Link to={"/cerita"}>
                        Cerita
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;