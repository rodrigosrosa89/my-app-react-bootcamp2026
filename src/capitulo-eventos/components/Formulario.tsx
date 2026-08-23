import { Button } from "./Button";

export function Formulario() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("O formulário foi enviado!");
      }}
    >
      <input type="text" />
      <Button
        handleClick={() => alert("Usuário criado!")}
        children="Cadastrar!"
      />
    </form>
  );
}
