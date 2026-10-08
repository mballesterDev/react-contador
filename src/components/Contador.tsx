import { useState } from "react";

const Contador = ({ numeroInicial }: { numeroInicial: number }) => {
  const [counter, setCounter] = useState(numeroInicial);
  return (
    <>
      <span onClick={() => setCounter(counter - 1)}>-</span>
      <div>{counter}</div>
      <span onClick={() => setCounter(counter + 1)}>+</span>
    </>
  );
};

export default Contador;
