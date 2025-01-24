import Navbar from './Navbar';
import Footer from '../Footer';
import { GiGuitar } from 'react-icons/gi';
import { listChord } from './types';
import { acordesMayores } from './chordsPosition';
import { chords } from './listChords';


export default function Chords(){

    return (
        <>
            <Navbar />
            <main className='flex w-full flex-col items-center pt-14 font-serif'>
                {/* titulo de la página */}
                <h2 className="text-4xl">Curso de Guitarra Gratuito<GiGuitar className="inline ml-4 text-black"/></h2>
                <h3 className="text-xl ml-8 font-medium">Aprende a tocar la guitarra desde la comodidad de tu hogar</h3>
                <h3 className='mt-8 ml-8 text-base font-bold self-start'>Encuentra todos los acordes de Guitarra</h3>
                <h3 className='mt-4 ml-8 w-4/5 text-start self-start'>
                    Bienvenido a tu recurso definitivo para aprender y practicar acordes de guitarra. Aquí encontrarás todo
                    lo que necesitas para dominar los acordes y mejorar tu técnica.
                </h3>
                {/* lista de acordes */}
                <div className='w-full grid grid-cols-5 gap-4 '>
                    {
                        chords.map((value : listChord) => {
                            return (
                                <ListOfChords {...value} /> 
                            )
                        })
                    }
                </div>
                <Chord /> 
            </main>
            <Footer />
        </>
    )
}

function ListOfChords({title, chords} : listChord){
    return (
        <div className="flex flex-col items-center pt-8 mb-8 font-serif">
            <h2 className=" font-bold text-base">{ title }</h2>
            <ul className='list-disc'>
                {
                    chords.map((value) => {
                        return (
                            <li className='cursor-pointer hover:text-blue-700'>
                                { value }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

/* Componente de Acorde Guitarra */
function Chord(){
    return (
        <svg width='90px' height='130px' className='border border-black border-soliid '>
            <svg x={15} y={15} width='60px' height='100px' className=' border-1 border-solid border-black flex items-center justify-center'>
            {
                [0, 1, 2, 3, 4, 5, 6].map((value) => {
                    return(
                        <line x1={value * 10} x2={value * 10} y1={0} y2={'100%'} stroke='black' />
                    )
                })
            }
            {
                [0, 1, 2, 3, 4, 5].map((value) => {
                    return(
                        <line x1={0} x2={'100%'} y1={value * 20} y2={value * 20} stroke='black' />   
                    )
                })
            }
                <line x1={10} x2={50} y1={30} y2={30} stroke='black' strokeWidth={5}/>
                <circle cx={50} cy={10}  r={4} />
                <circle cx={20} cy={30} r={4} />
                <circle cx={10} cy={50} r={4} />
            </svg>
            <text x={10} y={10}>6</text>
            <text x={20} y={10}>5</text>
            <text x={30} y={10}>4</text>
            <text x={40} y={10}>3</text>
            <text x={50} y={10}>2</text>
            <text x={60} y={10}>1</text>
        </svg>
    )
}