import React, { useState, useEffect } from 'react';

function Temp() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContador(contador => contador + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>El contador es: {contador}</p>
    </div>
  );
}

export default Temp;