import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function Contador(){
  
  const [valor,setValor]=useState(0);
  const Decrementar=()=>{
    if (valor>0){
      setValor(valor-1)
    }
  }
  return(
    <div>
      <p>{valor}</p>
      <button onClick={()=>setValor(valor+1)}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
      <button onClick={()=>setValor(0)}>Reset</button>
    </div>
  
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TodoList/>
        <Contador/>
      </header>
    </div>
  );
}

export default App;
