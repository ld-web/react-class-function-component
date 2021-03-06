import React, { useState, useEffect } from "react";

const FunctionCounter = () => {
  const [counter, setMyCounter] = useState(0);

  useEffect(() => {
    console.log("Valeur du compteur : ", counter);
  }, [counter]);

  return (
    <div>
      <h2>Compteur avec composant sous forme de fonction :</h2>
      <p>Compteur : {counter}</p>
      <p>
        <input
          type="button"
          onClick={() => setMyCounter(counter + 1)}
          value="Incrémenter"
          style={{ marginRight: "1em" }}
        />
        <input
          type="button"
          onClick={() => setMyCounter(counter - 1)}
          value="Décrémenter"
        />
      </p>
    </div>
  );
};

export default FunctionCounter;
