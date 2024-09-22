
import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const UserContext = createContext();

// Componente que muestra el nombre
function MostrarNombre() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      Hola, {userName}!
    </div>
  );
}

function InputNombre() {
  const { userName, setUserName } = useContext(UserContext);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <input type="text" value={userName} onChange={handleChange} />
  );
}


function App() {
  const [userName, setUserName] = useState('John Doe');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <InputNombre />
      <MostrarNombre />
    </UserContext.Provider>
  );
}

export default App;