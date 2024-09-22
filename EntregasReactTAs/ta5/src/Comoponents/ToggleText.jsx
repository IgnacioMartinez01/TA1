import React, { useState, useEffect } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect para ejecutar alguna acción cuando isVisible cambia
  useEffect(() => {}, [isVisible]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {isVisible && <p>Este texto aparece y desaparece</p>}
    </div>
  );
}

export default ToggleText;