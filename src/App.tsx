import "./App.css";
import { ListaArrays } from "./capitulo-arrays/components/ListaArrays";
import Profile, { Job } from "./capitulo-componentes/components/Profile";
import { DoubleNumber } from "./capitulo-funcoes/components/DoubleNumber";
import { SquareNumber } from "./capitulo-funcoes/components/SquareNumber";
import { Step } from "./capitulo-funcoes/components/Step";
import { List } from "./capitulo-jsx/components/List";
import { Coffe } from "./capitulo-props/components/Coffe";
import { Recipe } from "./capitulo-props/components/Recipe";

function App() {
  console.log("VARIAVEL VITE_API_URL:", import.meta.env.VITE_API_URL);

  return (
    <>
      <h1>Início desenvolvimento</h1>
      <Profile />
      <Job />
      <List />
      <div className="recipe-list">
        <Recipe onClick={() => alert("Receita 1 selecionada!")}>
          <Coffe
            imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
            imageWidth={300}
            coffe={{
              title: "Título da imagem1",
              description: "Descrição da imagem1",
            }}
          />
        </Recipe>
        <Recipe onClick={() => alert("Receita 2 selecionada!")}>
          <Coffe
            imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
            imageWidth={300}
            coffe={{
              title: "Título da imagem2",
              description: "Descrição da imagem2",
            }}
          />
        </Recipe>
        <Recipe onClick={() => alert("Receita 3 selecionada!")}>
          <Coffe
            imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
            imageWidth={300}
            coffe={{
              title: "Título da imagem3",
              description: "Descrição da imagem3",
            }}
          />
        </Recipe>
        <Recipe onClick={() => alert("Receita 4 selecionada!")}>
          <Coffe
            imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
            imageWidth={300}
            coffe={{
              title: "Título da imagem4",
              description: "Descrição da imagem4",
            }}
          />
        </Recipe>
      </div>
      <ListaArrays />
      <DoubleNumber number={5} />
      <SquareNumber number={5} />
      <Step instruction="Rodrigo curso React" />
    </>
  );
}

export default App;
