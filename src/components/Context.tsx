import {createContext, useState} from "react";
import {Modulo} from "./Modulo.tsx";


export const Saludo = createContext('');
export const Context = () => {
    const [texto, setTexto] = useState("");
    return (
        <Saludo.Provider value={[texto, setTexto]}>
            <Modulo/>
        </Saludo.Provider>
    )
}