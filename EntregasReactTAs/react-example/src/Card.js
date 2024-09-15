function Card({Titulo,Descripcion,Persona,FechaI,FechaF}){
    return (
        <div className="">
            <h1>{Titulo}</h1>
            <h6>{Descripcion}</h6>
            <p>Asignado a: {Persona}</p>
            <p>{FechaI}</p>
            <p>{FechaF}</p>
        </div>
    )
}

export default Card;