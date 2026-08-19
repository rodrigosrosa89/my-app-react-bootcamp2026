import "./App.css";
import { Job } from "./components/Profile";
import Profile from "./components/Profile";

function App() {
  console.log("VARIAVEL VITE_API_URL:", import.meta.env.VITE_API_URL);

  return (
    <>
      <h1>Início desenvolvimento</h1>
      <Profile />
      <Job />
    </>
  );
}

export default App;
