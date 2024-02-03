







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