import type { CoffeProps } from "../interfaces/coffes";

export function Coffe(props: CoffeProps) {
  const { imageSrc, imageWidth = 250, coffe } = props;
  return (
    <>
      <img src={imageSrc} alt="Imagem X" width={imageWidth} />
      <h2 className="recipe-title">{coffe.title}</h2>
      <p className="recipe-description">{coffe.description}</p>
    </>
  );
}
