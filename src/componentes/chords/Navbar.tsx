import { FaMusic } from "react-icons/fa";

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
        </nav>
    )
}

export default Navbar;