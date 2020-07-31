import React from "react";
import Relatorio from "./componentes/Relatorio";
import Cabecalho from "./componentes/Cabecalho";

function App() {
  return (
    <div className="container">
      <Cabecalho></Cabecalho>
      <h1>Relatório das propostas PF - BITIX</h1>
      <Relatorio></Relatorio>
    </div>
  );
}

export default App;
