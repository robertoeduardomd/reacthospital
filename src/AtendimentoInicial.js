import React from "react";
import { Link } from "react-router-dom";

const AtendimentoInicial = () => {
  return (
    <div className="App">
      {/* Imagem de fundo */}
      <img
        className="imgfnd"
        width="100%"
        height="100%"
        src="hospitalimgestetoscopio.jpg"
        alt="Imagem de fundo do hospital"
      />

      {/* Áudios */}
      <audio id="audioNormal" src="atendimentonormalvoz.mp3"></audio>
      <audio
        id="audioPreferencial"
        src="atendimentopreferencialvoz.mp3"
      ></audio>

      {/* Títulos */}
      <h1>Atendimento Hospitalar</h1>
      <h2>Retirar senha</h2>
      <br />
      <br />

      {/* Botões com Links para as rotas */}
      <Link to="/atendnormal">
        <button className="btn normal" type="button">
          Atendimento Normal
        </button>
      </Link>
      <br />
      <br />
      <Link to="/atendpref">
        <button className="btn pref" type="button">
          Atendimento Preferencial
        </button>
      </Link>
      <br />
      <br />

      {/* Link para o Painel de Espera */}
      <a className="linkpainel" href="/painelEspera">
        Painel de espera
      </a>
    </div>
  );
};

export default AtendimentoInicial;
