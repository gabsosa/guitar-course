import { FaMusic } from "react-icons/fa";
import { NavLink } from "react-router";

function Navbar(){
    return (
        <nav className="flex w-full h-10 bg-emerald-400">
            <div className="flex w-1/2 pl-5 h-full items-center">
                <FaMusic />
                <div className="flex flex-col ml-4 w-1/4 font-semibold text-sm h-10">
                    <h3>Aprende</h3>
                    <h3 className="ml-2">Guitarra</h3>
                </div>
            </div>
            <div className="flex w-1/2 ">
                <div className="flex w-1/3 items-center justify-center">
                    <a href="#" className="hover:text-white cursor-pointer">Curso</a>
                </div>
                <div className="flex w-1/3 items-center justify-center cursor-pointer">
                    <NavLink to="/chords" className="hover:text-white cursor-pointer">Acordes</NavLink>
                </div>
                <div className="flex w-1/3 items-center justify-center cursor-pointer">
                    <a href="#" className="hover:text-white cursor-pointer">Canciones</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;