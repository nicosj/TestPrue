import {useEffect, useState} from "react";

export const Efect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
       document.title = `Contador ${count} `;
       // alert('useEffect'+count);
        console.log('useEffect'+count);
    }, [count]);
    return (
        <div>
            <p>La cuenta esta en: {count} </p>
            <button onClick={() => setCount(count + 1 )}>Sumar</button>
            <button onClick={() => setCount(count - 1 )}>Restar</button>
        </div>
    )
}