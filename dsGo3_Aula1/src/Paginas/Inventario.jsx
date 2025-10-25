import { useEffect, useState } from "react";

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);

  useEffect(() => {
    const armazenado = JSON.parse(localStorage.getItem("inventario")) || [];
    setFigurinhas(armazenado);
  }, []);

  const limparInventario = () => {
    const confirmar = window.confirm("Deseja realmente limpar o inventário?");
    if (!confirmar) return;

    localStorage.removeItem("inventario");
    setFigurinhas([]);
  };

  const temFigurinhas = figurinhas.length > 0;

  return (
    <main className="conteiner">
      <section
        className="inventario"
        aria-labelledby="titulo-inventario"
      >
        <header className="inventario-header">
          <h2 id="titulo-inventario">Inventário</h2>
          <button
            className="limpar-inventario"
            onClick={limparInventario}
            aria-label="Limpar todas as figurinhas do inventário"
          >
            Limpar Inventário
          </button>
        </header>

        {temFigurinhas ? (
          <ul className="grid" role="list">
            {figurinhas.map((figurinha) => (
              <li key={figurinha.id} className="figurinha">
                <figure>
                  <img
                    src={figurinha.imagem}
                    alt={`Figurinha: ${figurinha.nome}`}
                  />
                  <figcaption>{figurinha.nome}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <p className="vazio" role="status">
            Nenhuma figurinha coletada ainda!
          </p>
        )}
      </section>
    </main>
  );
}
