import { useState } from "react";
import { missoes } from "../Dados/dadosMissao";
import { MissaoCard } from "../Componentes/MissaoCard";
import { MissaoModal } from "../Componentes/MissaoModal";

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [refresh, setrefresh] = useState(0);

  const concluirMissao = (id) => {
    const inventario = JSON.parse(localStorage.getItem("inventario")) || [];
    const m = missoes.find((ms)=> ms.id === id);

    const figurinha = {
      id: m.id,
      nome: m.titulo || `figurinha ${m.id}`,
      imagem: m.figura || `/src/assets/sucesso.png`,
    };

    if(!inventario.some((f)=> f.id === id)){
      inventario.push(figurinha);
      localStorage.setItem("inventario", JSON.stringify(inventario))
    }

    setMissaoSelecionada(null);
    setrefresh((r)=> r + 1); 
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

        <ul className="missoes-grid" role="list">
          {missoes.map((m) => (
              <MissaoCard
                key={`${m.id} - ${refresh}`}
                role="listitem"
                aria-label={`Missão: ${m.titulo}`}
                missao={m}
                onIniciarMissao={setMissaoSelecionada}
              />
          ))}
        </ul>
      </section>

      {missaoSelecionada && (
        <MissaoModal
          missao={missaoSelecionada}
          onClose={() => setMissaoSelecionada(null)}
          onConcluir={concluirMissao}
        />
      )}
    </main>
  );
}
