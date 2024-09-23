import React, { useContext } from 'react';
import TemaContext from './TemaContext';

function BotonCambiarTema() {
  const { tema, cambiarTema } = useContext(TemaContext);

  return (
    <button onClick={() => cambiarTema(tema === 'claro' ? 'oscuro' : 'claro')}>
      Cambiar a {tema === 'claro' ? 'oscuro' : 'claro'}
    </button>
  );
}

export default BotonCambiarTema;