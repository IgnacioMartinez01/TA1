import ESTILOS from "./Card.module.css";
function Card({Titulo,Descripcion,Persona,FechaI,FechaF,Estilo}){
    return (
        <div style={{
            backgroundColor:Estilo,
            borderRadius:50,
            padding: 20,
            margin: 14,
            maxwidth: 300,
            
        }}>
            <h1>{Titulo}</h1>
            <p>{Descripcion}</p>
            <h6>Asignado a: {Persona}</h6>
            <p>{FechaI}</p>
            <p>{FechaF}</p>
        </div>
    )
}

export default Card;