interface Props {
  number: number;
}

export function DoubleNumber({ number }: Props) {
  const dobro = number * 2;
  return (
    <div>
      <p>O número é: {number}</p>
      <p>O dobro é: {dobro}</p>
    </div>
  );
}
