export function DarkModeButton() {
  // Uma alternativa é usar uma function
  //   function handleClick() {
  //     alert("Modo escuro ativado!");
  //   }

  // Melhor prática é criar uma const
  const handleClick = () => {
    alert("Modo escuro ativado!");
  };

  return (
    <button className="button-event" onClick={handleClick}>
      Lua
    </button>
  );
}
