import "./App.css";
import { ListaArrays } from "./capitulo-arrays/components/ListaArrays";
import Profile, { Job } from "./capitulo-componentes/components/Profile";
import { Button } from "./capitulo-eventos/components/Button";
import { DarkModeButton } from "./capitulo-eventos/components/DarkModeButton";
import { Formulario } from "./capitulo-eventos/components/Formulario";
import { Post } from "./capitulo-eventos/components/Post";
import { SwitchThemeButton } from "./capitulo-eventos/components/SwitchThemeButton";
import { DoubleNumber } from "./capitulo-funcoes/components/DoubleNumber";
import { SquareNumber } from "./capitulo-funcoes/components/SquareNumber";
import { Step } from "./capitulo-funcoes/components/Step";
import { List } from "./capitulo-jsx/components/List";
import { Coffe } from "./capitulo-props/components/Coffe";
import { Recipe } from "./capitulo-props/components/Recipe";

function App() {
  console.log("VARIAVEL VITE_API_URL:", import.meta.env.VITE_API_URL);

  const handleHoras = () => {
    alert("Agora são: " + new Date().toLocaleTimeString());
  };

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
      <DarkModeButton />
      <SwitchThemeButton theme="dark"> Escuro </SwitchThemeButton>
      <SwitchThemeButton theme="light">Claro </SwitchThemeButton>
      <Button handleClick={handleHoras}>
        Que horas são? (Clique aqui para saber)
      </Button>
      <br></br>
      <Post
        imageSource="https://images.google.com.br/images/branding/google_wordmark/v1/1x/googlelogo_color_272x92dp.png"
        alternative="xxxx"
        user="rodcruzeiro"
        text="Texto de exemplo"
        onLikePost={() => alert("Deu bom!")}
      />
      <br></br>
      <Formulario />
    </>
  );
}

export default App;
