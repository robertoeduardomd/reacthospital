import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AtendimentoInicial from "./AtendimentoInicial";
import AtendNormal from "./AtendNormal";
import AtendPref from "./AtendPref";
import PainelEspera from "./PainelEspera";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AtendimentoInicial />} />
        <Route path="/atendnormal" element={<AtendNormal />} />
        <Route path="/atendpref" element={<AtendPref />} />
        <Route path="/painelespera" element={<PainelEspera />} />
      </Routes>
    </Router>
  );
}

export default App;
