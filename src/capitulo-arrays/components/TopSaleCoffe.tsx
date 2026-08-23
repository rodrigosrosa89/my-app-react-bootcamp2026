interface Props {
  name: string;
  description: string;
}

export function TopSaleCoffe({ name, description }: Props) {
  return (
    <div className="top-sale-coffe">
      <h1>O café mais vendido é: </h1>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
