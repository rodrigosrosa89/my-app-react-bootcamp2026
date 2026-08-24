import { useState } from "react";

const ComponentFuncionalCounter = ({ message }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <h2>Contador: {count}</h2>
      <button onClick={increase} className="button-count">
        Adicionar
      </button>
    </div>
  );
};

export default ComponentFuncionalCounter;
