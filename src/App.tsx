import "./App.css";
import { Job } from "./capitulo-componentes/components/Profile";
import Profile from "./capitulo-componentes/components/Profile";
import { List } from "./capitulo-jsx/components/List";
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
        <Recipe
          imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
          imageWidth={300}
          coffe={{
            title: "Título da imagem1",
            description: "Descrição da imagem1",
          }}
        />
        <Recipe
          imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
          imageWidth={300}
          coffe={{
            title: "Título da imagem2",
            description: "Descrição da imagem2",
          }}
        />
        <Recipe
          imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
          imageWidth={300}
          coffe={{
            title: "Título da imagem3",
            description: "Descrição da imagem3",
          }}
        />
        <Recipe
          imageSrc="https://www.w3schools.com/html/pic_trulli.jpg"
          imageWidth={300}
          coffe={{
            title: "Título da imagem4",
            description: "Descrição da imagem4",
          }}
        />
      </div>
    </>
  );
}

export default App;
