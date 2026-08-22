import "./App.css";
import { Job } from "./capitulo-componentes/components/Profile";
import Profile from "./capitulo-componentes/components/Profile";
import { List } from "./capitulo-jsx/components/List";

function App() {
  console.log("VARIAVEL VITE_API_URL:", import.meta.env.VITE_API_URL);

  return (
    <>
      <h1>Início desenvolvimento</h1>
      <Profile />
      <Job />
      <List />
    </>
  );
}

export default App;
