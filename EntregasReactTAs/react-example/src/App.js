import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App" >
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
        
        <Card Titulo={"Card 1"} Descripcion={'Descripcion de la card 1'}Persona={' Ignacio'} Estilo="lightcoral"/>
        <Card Titulo={"Card 2"} Descripcion={'Descripcion de la card 2'}Persona={' Martin'} Estilo="lightgrey"/>    
        <Card Titulo={"Card 3"} Descripcion={'Descripcion de la card 3'}Persona={' Agustin'} Estilo="blue"/>    
      
      </header>
    </div>
  );
}

export default App;

