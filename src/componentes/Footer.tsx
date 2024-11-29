import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


export default function Footer(){
    return (
        <footer className="flex flex-col items-center justify-center w-full h-32 bg-emerald-400">
            <h6 className="mb-2">Seguinos en nuestra redes :</h6>
            <div className="flex">
                <FaInstagramSquare className="mr-3 size-6" />
                <FaYoutubeSquare className="mr-3 size-6" />
                <FaFacebookSquare className="mr-3 size-6" />
                <AiFillTikTok className="mr-3 size-6"/>
            </div>
        </footer>
    )
}