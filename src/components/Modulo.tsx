import {useContext} from "react";
import {Saludo} from "./Context.tsx";

export const Modulo = () => {
    const [texto, setTexto ] = useContext(Saludo);

    return (
        <div>
            <h1>{texto}</h1>
            <button onClick={() => setTexto('Hola Mundo!')}>
                Saludar
            </button>
            <button onClick={() => setTexto('Adios!')}>
                Despedirse
            </button>
        </div>
    );
}