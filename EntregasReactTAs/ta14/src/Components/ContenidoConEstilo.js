import React, { useContext } from 'react';
import TemaContext from './TemaContext';

function ContenidoConEstilo() {
  const { tema } = useContext(TemaContext);

  const estilos = {
    color: tema === 'oscuro' ? 'white' : 'black',
    backgroundColor: tema === 'oscuro' ? '#222' : '#fff',
  };

  return (
    <div style={estilos}>
      Este componente cambia de estilo según el tema.
    </div>
  );
}

export default ContenidoConEstilo;