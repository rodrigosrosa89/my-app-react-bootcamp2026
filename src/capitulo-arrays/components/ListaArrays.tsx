import { TopSaleCoffe } from "./TopSaleCoffe";
import { v4 as uuidv4 } from "uuid";
interface Coffes {
  id: string;
  name: string;
  description: string;
  preparationTime: number;
}

const cafeLista: Coffes[] = [
  {
    id: uuidv4(),
    name: "Café 1",
    description: "Descrição do Café 1",
    preparationTime: 3,
  },
  {
    id: uuidv4(),
    name: "Café 2",
    description: "Descrição do Café 2",
    preparationTime: 4,
  },
  {
    id: uuidv4(),
    name: "Café 3",
    description: "Descrição do Café 3",
    preparationTime: 5,
  },
  {
    id: uuidv4(),
    name: "Café 4",
    description: "Descrição do Café 4",
    preparationTime: 6,
  },
  {
    id: uuidv4(),
    name: "Café 5",
    description: "Descrição do Café 5",
    preparationTime: 7,
  },
];

export function ListaArrays() {
  const list = cafeLista.map(({ id, name, description, preparationTime }) => (
    <li key={id}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Tempo de preparo: {preparationTime} minutos</p>
    </li>
  ));

  const cafeFiltrado = cafeLista.filter((cafe) => cafe.name === "Café 1");
  console.log("Café filtrado:", cafeFiltrado);

  const cafePreparado3 = cafeLista.find((cafe) => cafe.preparationTime === 3);
  console.log("Café com tempo de preparo 3:", cafePreparado3);

  return (
    <>
      <h1>Listagem de café</h1>
      <ul className="recipe-list">{list}</ul>
      {cafeFiltrado.map((coffe) => (
        <TopSaleCoffe
          key={coffe.id}
          name={coffe.name}
          description={coffe.description}
        />
      ))}
    </>
  );
}
