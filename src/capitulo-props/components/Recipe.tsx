import type { CoffeProps } from "../interfaces/coffes";
import { Coffe } from "./Coffe";

export function Recipe(props: CoffeProps) {
  return (
    <>
      <div className="card">
        <Coffe {...props} />
        <button className="button" onClick={() => alert("Clicou no botão!")}>
          Clique aqui
        </button>
      </div>
    </>
  );
}
