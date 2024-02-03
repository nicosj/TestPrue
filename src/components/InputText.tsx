import {useState} from "react";

export const InputText = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
       const re = /^[0-9\b]+$/;
       if (e.target.value === '' || re.test(e.target.value)) {
             setValue(e.target.value);
       }

    }
    return (
        <>
            <h1>Solo numeros positivos</h1>
            <input onChange={handleChange} value={value} type="text" />
        </>
    )
}