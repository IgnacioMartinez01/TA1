import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState('Ignacio');

  return (
    <UserContext.Provider value={userName}>
      <ComponentQueMuestraElNombre />
    </UserContext.Provider>
  );
}

function ComponentQueMuestraElNombre() {
  const userName = useContext(UserContext);

  return (
    <div>
      Hola, {userName}!
    </div>
  );
}

export default App;