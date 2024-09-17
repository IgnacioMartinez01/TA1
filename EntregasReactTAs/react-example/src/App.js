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
        <h1>Parte 1</h1>
        <Card Titulo={"Card 1"} Descripcion={'Descripcion de la card 1'}Persona={' Ignacio'} Estilo="lightcoral"/>
        <Card Titulo={"Card 2"} Descripcion={'Descripcion de la card 2'}Persona={' Martin'} Estilo="lightgrey"/>    
        <Card Titulo={"Card 3"} Descripcion={'Descripcion de la card 3'}Persona={' Agustin'} Estilo="blue"/>    
        <h1>Parte 2</h1>
        <Card Estilo="lightblue">
        <h1>Card 1</h1>
        <p>Descripción 1</p>
        <p>Asignado a: Ignacio</p>
        <p>Fecha de inicio: 01/01/2024</p>
        <p>Fecha de finalización: 12/12/2024</p>
        </Card>

        <Card Estilo="lightgreen">
        <h1>Card 2</h1>
        <p>Descripción 2</p>
        <p>Asignado a: Esteban</p>
        <p>Fecha de inicio: 02/01/2024</p>
        <p>Fecha de finalización: 12/12/2024</p>
        </Card>

        <Card Estilo="lightgrey">
        <h1>Card 3</h1>
        <p>Descripción 3</p>
        <p>Asignado a: Agustin</p>
        <p>Fecha de inicio: 01/11/2024</p>
        <p>Fecha de finalización: 02/12/2024</p>
        </Card>
      </header>
    </div>
  );
}

export default App;

