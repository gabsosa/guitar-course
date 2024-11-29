import { GiGuitar } from "react-icons/gi";

export default function Main(){
    return (
        <main className="flex items-center pt-14 flex-col w-full">
            {/* titulo de la página */}
            <h2 className="text-4xl font-serif">Curso de Guitarra Gratuito<GiGuitar className="inline ml-4 text-black"/></h2>
            <h3 className="text-xl ml-8 font-medium font-serif">Aprende a tocar la guitarra desde la comodidad de tu hogar</h3>
            {/* descripción del curso */}
            <div className="flex mt-20 w-full justify-around flex-nowrap">
                <h3 className="text-center text-xl font-serif w-40">Aprende todos los acordes</h3>
                <h3 className="text-center text-xl font-serif w-52">Practica tus canciones favoritas</h3>
                <h4 className="text-center text-xl font-serif w-40">Aprende las mejores técnicas</h4>
            </div>
            {/* caracteristicas del curso */}
            <div className="w-full mt-20">
                <h3 className="ml-8 mt-4 font-semibold">¿Qué aprenderas en este curso?</h3>
                <ul className="ml-12 mt-4 list-decimal">
                    <li className="ml-12 mt-2">Acordes básicos y avanzados
                        <ul className="mt-2 ml-4 list-disc">
                            <li>Domina los acordes esenciales para tocar tus canciones favoritas</li>
                            <li>Aprende acordes avanzados para enriquecer tu repertorio</li>
                        </ul>
                    </li>
                    <li className="ml-12 mt-2"> Práctica de canciones
                        <ul className="mt-2 ml-4 list-disc">
                            <li>Practica con una amplia selección de canciones de diferentes géneros</li>
                            <li>Ejercicios prácticos para mejorar tu técnica y velocidad</li>
                        </ul>
                    </li>
                    <li className="ml-12 mt-2"> Técnicas de guitarra
                        <ul className="mt-2 ml-4 list-disc">
                            <li>Aprende las mejores técnicas de guitarra, desde rasgueos hasta punteos</li>
                            <li>Desarrolla habilidades como el fingerpicking, bending, y más</li>
                        </ul>
                    </li>
                </ul>
                {/* beneficios del curso */}
                <h3 className="ml-8 mt-4 font-semibold">Beneficios del curso</h3>
                <ul className="ml-12 mt-4 list-disc">
                    <li className="ml-12 mt-2">
                        <h3 className="font-semibold inline">Acceso 24/7</h3>: Aprende a tu propio ritmo en cualquier momento y lugar
                    </li>
                    <li className="ml-12 mt-2">
                        <h3 className="font-semibold inline">Materiales de apoyo</h3>: Descarga tablaturas, partiruras y video tutoriales
                    </li>
                </ul>
            </div>
            <h3 className="font-semibold mt-20 mb-12">
                ¡No esperes más para convertirte en un guitarrista experto! Comienza hoy tu viaje musical.
            </h3>
        </main>
    )
}