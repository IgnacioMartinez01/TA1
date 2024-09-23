import React, { useState } from 'react';
import BotonCambiarTema from './Components/BotonCambiarTema';
import ContenidoConEstilo from './Components/ContenidoConEstilo';
import TemaContext from './Components/TemaContext';

function App() {
  const [tema, setTema] = useState('claro');

  const cambiarTema = (Tema) => {
    setTema(Tema);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TemaContext.Provider value={{ tema, cambiarTema }}>
          <BotonCambiarTema />
          <ContenidoConEstilo />
        </TemaContext.Provider>
      </header>
    </div>
  );
}

export default App;