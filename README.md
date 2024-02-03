# 1. Componentes Funcionales y de Clase:
## Crea un componente de clase llamado `Reloj` que muestre la hora actual y se actualice cada segundo.
 ```javascript
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
 ```

# 2. Estado y Ciclo de Vida:
## ¿Cuándo usarías el método `shouldComponentUpdate` en un componente de clase y por qué?
### Se utiliza para optimizar el rendimiento de un componente de clase, ya que permite decidir si un componente debe actualizarse o no, de este modo compara las propiedades y estados actuales con las nuevas permitiendo esto evitar actualizaciones innecesarias.  

# 3. Manejo de Eventos:
## En un componente, crea una función `manejarSubmit` que se ejecute al enviar un formulario y evite que la página se recargue.

 ```javascript
 const manejarSubmit = (e) => {
   e.preventDefault();
   console.log('Formulario enviado');
 }
```

# 4. Listas y Keys:
## Explica la diferencia entre `map` y `forEach` al trabajar con listas en React.
### `map` transformar una colección de elementos con una función y devolver un nuevo arreglo, en el caso de `forEach` no devuelve nada, solo itera sobre los elementos del arreglo.


# 5. Componentes Controlados:
## Crea un componente de entrada de texto controlado que acepte solo números enteros positivos.
```javascript
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
```

# 6. Hooks:
## ¿Qué hace la función `useEffect` en un componente funcional de React? Proporciona un ejemplo práctico.
### `useEffect` es un hook que permite realizar efectos secundarios en componentes funcionales, se ejecuta después de que el componente es renderizado, y se puede ejecutar cada vez que el componente es renderizado.
```javascript
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
```

# 7. Enrutamiento:
## Explica la diferencia entre `BrowserRouter` y `HashRouter` en `react-router-dom`.
### `BrowserRouter` utiliza la API de historial del navegador para mantener sincronizada, mientras que `HashRouter` utiliza la parte hash de la URL para mantener la UI sincronizada con la URL.

# 8. Context API:
## ¿Cuándo y por qué usarías el Context API en React? Proporciona un ejemplo de su implementación.
### Se utiliza para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, se utiliza cuando se tiene que pasar props a través de varios niveles de componentes, se puede utilizar para temas, idiomas, autenticación, etc.
```javascript
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
```
```javascript
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
```


# 9. HOC (Higher Order Component):
## ¿Qué es un HOC en React y cómo se utiliza? Proporciona un ejemplo.
### Es una técnica que se emplea para reutilizar la lógica de los componentes. Un HOC es una función que toma un componente y devuelve un nuevo componente, se utiliza para reutilizar lógica de componentes.
```javascript
 export const Hoc = () => {
    const Datos= (Comp:any) => {
        const data = 'Hola Mundo';
        return (props:any) => <Comp {...props} data={data} />;
    }

    const Saludo = (props:any) => {

        return (
            <h1>{props.data} </h1>
        );

    }
    const Saludar = Datos(Saludo);
    return (
        <Saludar/>
    );
}
 ```


# 10. Testing en React:
## Menciona al menos dos bibliotecas populares para realizar pruebas unitarias en aplicaciones React.
### Jest y Enzyme
