import React, { useState, useEffect } from "react";

function PainelEspera() {
  const [chegadas, setChegadas] = useState(
    JSON.parse(localStorage.getItem("chegadas")) || []
  );
  const [pacientesTriados, setPacientesTriados] = useState(
    JSON.parse(localStorage.getItem("pacientestriados")) || []
  );

  useEffect(() => {
    setChegadas(JSON.parse(localStorage.getItem("chegadas")) || []);
    setPacientesTriados(
      JSON.parse(localStorage.getItem("pacientestriados")) || []
    );
  }, []);

  return (
    <div>
      <h1>Painel de Espera</h1>
      <div className="brolagem">
        <table border="1">
          <thead>
            <tr>
              <th>Situação</th>
              <th>Nome</th>
              <th>Data e Horário (Chegada)</th>
              <th>Data e Horário (Atendimento)</th>
              <th>Senha</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {chegadas.map((chegada, index) => {
              const tipoIcone =
                chegada.tipo === "Preferencial"
                  ? "👨‍🦽"
                  : chegada.tipo === "Virtual"
                  ? "💻"
                  : "👤";

              return (
                <tr
                  key={index}
                  style={{
                    background:
                      chegada.situacao === "espera"
                        ? "linear-gradient(black, orange)"
                        : chegada.situacao === "atendido"
                        ? "linear-gradient(green, #047fff)"
                        : "linear-gradient(black, red)",
                    color: chegada.situacao === "espera" ? "white" : "black",
                  }}
                >
                  <td>{chegada.situacao}</td>
                  <td>{chegada.nome}</td>
                  <td>{chegada.dataHora}</td>
                  <td>{chegada.horarioAtendimento || "-"}</td>
                  <td>{chegada.senha}</td>
                  <td>
                    {tipoIcone} {chegada.tipo}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h1>Painel de Atendimento Médico</h1>
      <div className="brolagem">
        <table border="2">
          <thead>
            <tr>
              <th>Classe de Risco</th>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Pressão Arterial</th>
              <th>Temperatura Corporal</th>
              <th>Sinais Vitais</th>
              <th>Horário de Chegada</th>
            </tr>
          </thead>
          <tbody>
            {pacientesTriados.map((paciente, index) => {
              const classeUrgencia = {
                nao_urgente: "rgba(0, 128, 0, 0.3)",
                pouco_urgente: "rgba(255, 165, 0, 0.3)",
                urgente: "rgba(255, 69, 0, 0.3)",
                muito_urgente: "rgba(255, 0, 0, 0.3)",
                emergencia: "rgba(128, 0, 0, 0.6)",
              };

              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: classeUrgencia[paciente.risco],
                  }}
                >
                  <td>{paciente.risco}</td>
                  <td>{paciente.tipo}</td>
                  <td>{paciente.nome}</td>
                  <td>{paciente.pressao}</td>
                  <td>{paciente.temperatura} °C</td>
                  <td>{paciente.sinais}</td>
                  <td>{paciente.horario}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PainelEspera;
