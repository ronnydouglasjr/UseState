import { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0)

  const exibirContador = () => {
    setNumero(numero + 1)
  }

  return (
    <div>
      <button onClick={exibirContador}>Clique aqui</button>
      <p>Contador: {numero}</p>
    </div>
  )
};

export default Contador;
