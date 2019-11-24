import React, { useState, useEffect } from 'react';

const FunctionCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Valeur du compteur : ", counter);
  }, [counter]);

  return (
    <div>
        <h2>Compteur avec composant sous forme de classe :</h2>
        <p>Compteur : {counter}</p>
        <p>
          <input type="button" onClick={() => setCounter(counter + 1)} value="Incrémenter" style={{marginRight: '1em'}}/>
          <input type="button" onClick={() => setCounter(counter - 1)} value="Décrémenter"/>
        </p>
      </div>
  )
}

export default FunctionCounter;