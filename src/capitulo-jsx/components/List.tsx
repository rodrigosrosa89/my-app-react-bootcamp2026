import { MarketImage } from "./MarketImage";

export function List() {
  const listDetalhes = {
    nome: "Rodrigo",
    day: formatarDiaSemana(new Date()),
  };

  function formatarDiaSemana(date: Date): string {
    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
    }).format(date);
  }
  return (
    <>
      <h1>Feira | Lista de compras</h1>
      <p>Cliente: {listDetalhes.nome}</p>
      <p>
        <b>Dia da feira:</b> {listDetalhes.day}{" "}
      </p>
      <ul
        style={{ color: "blue", backgroundColor: "white", textAlign: "left" }}
      >
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Macarrão</li>
        <li>Carne</li>
        <li>Frango</li>
      </ul>
      <MarketImage />
    </>
  );
}
