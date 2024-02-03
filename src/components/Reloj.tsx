import {useState} from "react";

export const Reloj=()=>{
    setInterval (horaActual, 1000);
    const ahora = new Date().toDateString();
    const [hora, setHora] = useState(ahora);
    function horaActual() {
        setHora (new Date().toLocaleTimeString())
    }
        return(
            <div >
                <h1>{hora}</h1>
            </div>
        );
}
