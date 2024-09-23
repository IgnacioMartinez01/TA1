import { createContext } from 'react';

const TemaContext = createContext({
  tema: 'claro',
  cambiarTema: () => {},
});

export default TemaContext;
