import React, { useState } from "react";

const AtendPref = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [comprovante, setComprovante] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataHora = new Date().toLocaleString();
    const ultimoNumero =
      parseInt(localStorage.getItem("ultimoNumeroSenha")) || 0;
    const novaSenha = ultimoNumero + 1;

    // Atualizar localStorage
    localStorage.setItem("ultimoNumeroSenha", novaSenha);

    const chegadas = JSON.parse(localStorage.getItem("chegadas")) || [];
    chegadas.push({
      nome,
      cpf,
      dataHora,
      comprovante,
      horarioAtendimento: "Esperando atendimento",
      senha: novaSenha,
      tipo: "Preferencial",
      situacao: "espera",
    });
    localStorage.setItem("chegadas", JSON.stringify(chegadas));

    alert(`Paciente ${nome} registrado com sucesso! Sua senha é: ${novaSenha}`);
    setNome("");
    setCpf("");
    setComprovante(null);
  };

  const handleFileChange = (e) => {
    setComprovante(e.target.files[0]?.name || null);
  };

  const playAudio = (tipoaudio) => {
    const audio = document.getElementById(
      tipoaudio === "rs" ? "audioretirar" : null
    );
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <div>
      {/* Áudio para feedback */}
      <audio id="audioretirar" src="retirarsenhavoz.mp3"></audio>

      <h1>Atendimento Preferencial</h1>
      <br />
      <br />
      <a href="/" className="btnvoltar">
        ↩
      </a>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <label htmlFor="nome">Nome:</label>
        </div>
        <div className="campo">
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <label htmlFor="cpf">CPF:</label>
        </div>
        <div className="campo">
          <p>Comprovante (PCD/Idoso)</p>
          <input type="file" id="comprovante" onChange={handleFileChange} />
        </div>
        <br />
        <button
          className="btn"
          type="submit"
          onMouseOver={() => playAudio("rs")}
        >
          Retirar Senha
        </button>
      </form>
    </div>
  );
};

export default AtendPref;
