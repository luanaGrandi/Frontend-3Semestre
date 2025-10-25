import { useState } from "react";
import { missoes } from "../Dados/dadosMissao";
import { MissaoCard } from "../Componentes/MissaoCard";
import { MissaoModal } from "../Componentes/MissaoModal";

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [missoesConcluidas, setMissoesConcluidas] = useState([]);

  const concluirMissao = (id) => {
    setMissoesConcluidas((prev) => [...prev, id]);
    setMissaoSelecionada(null);
  };

  const handleFecharModal = () => setMissaoSelecionada(null);

  return (
    <main className="conteiner">
      <section
        className="missoes"
        aria-labelledby="titulo-missoes"
      >
        <header>
          <h2 id="titulo-missoes">Missões</h2>
        </header>

        {/* Aqui usamos <ul> e <li> corretamente para resolver o aviso do Lighthouse */}
        <ul className="missoes-grid" role="list">
          {missoes.map((missao) => (
            <li
              key={missao.id}
              role="listitem"
              aria-label={`Missão: ${missao.titulo}`}
            >
              <MissaoCard
                missao={missao}
                onIniciarMissao={setMissaoSelecionada}
                concluida={missoesConcluidas.includes(missao.id)}
              />
            </li>
          ))}
        </ul>
      </section>

      {missaoSelecionada && (
        <MissaoModal
          missao={missaoSelecionada}
          onClose={handleFecharModal}
          onConcluir={() => concluirMissao(missaoSelecionada.id)}
        />
      )}
    </main>
  );
}
