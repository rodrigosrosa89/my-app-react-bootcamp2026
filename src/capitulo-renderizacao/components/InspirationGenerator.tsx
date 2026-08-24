import { useState } from "react";
import { Button } from "../../capitulo-eventos/components/Button";
import FancyText from "./FancyText";
import inspiration from "./types/inspiration";
import Color from "./Color";

export default function InspirationGenerator({
  children,
}: React.PropsWithChildren) {
  const [indice, setIndice] = useState(0);
  const texto = inspiration[indice];

  const handleRandomInspiration = () => {
    setIndice((indice + 1) % inspiration.length);
  };

  return (
    <p>
      Sua frase motivacional é:
      {texto.type === "quote" ? (
        <FancyText text={texto.value} />
      ) : (
        <Color value={texto.value} />
      )}
      <Button
        children="Me inspire novamente"
        handleClick={handleRandomInspiration}
      />
      {children}
    </p>
  );
}
