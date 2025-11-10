export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  const inventario = JSON.parse(localStorage.getItem("inventario")) || [];
  const concluidaLocal = inventario.some((f) => f.id === missao.id);

  const isConcluida = concluida !== undefined ? concluida : concluidaLocal;

  return (
    <article 
      className="missao-card"
      aria-labelledby={`titulo-${missao.id}`}
    >
      <h3 id={`titulo-${missao.id}`}>{missao.titulo}</h3>
      <p>{missao.missao}</p>
      <button
        onClick={() => onIniciarMissao(missao)}
        disabled={isConcluida}
        aria-pressed={isConcluida ? "true" : "false"}
      >
        {isConcluida ? "Missão concluída" : "Iniciar Missão"}
      </button>
    </article>
  );
}
