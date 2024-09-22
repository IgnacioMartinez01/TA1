import { useState } from "react"

function Counter(){
    const [valor,setValor]=useState(0);
    const [color,setColor]=useState('black');
    const handleValor = () =>{
        setValor(valor+1);
        setColor(valor%2===0 ?'blue':'red');
    }

    const resetCount=()=>{
        setValor(0);
        setColor('violet')
    }

    return (
        <div>
            <p style={{color}}>Titulo</p>
            <button onClick={handleValor}>Counter: {valor}</button>
            <button onClick={resetCount}>Reset</button>        
        </div>
    )
}

export default Counter;
