import React, { useRef } from "react";
import "./global.css";

const AtendNormal = () => {
  const audioRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const cpf = e.target.cpf.value;
    const dataHora = new Date().toLocaleString();

    const ultimoNumero =
      parseInt(localStorage.getItem("ultimoNumeroSenha")) || 0;

    const novaSenha = ultimoNumero + 1;

    localStorage.setItem("ultimoNumeroSenha", novaSenha);

    const chegadas = JSON.parse(localStorage.getItem("chegadas")) || [];
    chegadas.push({
      nome,
      cpf,
      dataHora,
      horarioAtendimento: "Esperando Atendimento",
      senha: novaSenha,
      tipo: "Normal",
      situacao: "espera",
    });

    localStorage.setItem("chegadas", JSON.stringify(chegadas));

    alert(`Paciente ${nome} registrado com sucesso! Sua senha é: ${novaSenha}`);

    e.target.reset();

    // Redirecionar para a página inicial
    window.location.href = "/";
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div>
      <audio id="audioretirar" ref={audioRef} src="retirarsenhavoz.mp3"></audio>
      <h1>Atendimento Normal</h1>
      <br />
      <br />
      <a href="/" className="btnvoltar">
        ↩
      </a>
      <form id="form-normal" onSubmit={handleFormSubmit}>
        <div className="campo">
          <input type="text" id="nome" name="nome" required />
          <label htmlFor="nome">Nome:</label>
          <br />
        </div>
        <div className="campo">
          <input type="text" id="cpf" name="cpf" required />
          <br />
          <br />
          <label htmlFor="cpf">CPF:</label>
          <br />
        </div>
        <button className="btn" type="submit">
          Retirar Senha
        </button>
      </form>
    </div>
  );
};

export default AtendNormal;
