interface Props {
  number: number;
}

export function SquareNumber({ number }: Props) {
  const quadrado = Math.pow(number, 2);
  return (
    <div>
      <p>O número é: {number}</p>
      <p>O quadrado é: {quadrado}</p>
    </div>
  );
}
