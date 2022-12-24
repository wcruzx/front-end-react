import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const [transferencias, setTransferencia] = useState([]);

  useEffect(() => {
      obterDados();
  })

  const obterDados = async () => {

    const dados = await fetch('http://localhost:8080/transferencia');
    const converter = await dados.json();
    setTransferencia(converter);
  }

  return (
    <div>
      <Formulario />
      <Tabela vetor={transferencias}/>
    </div>
  );
}

export default App;
