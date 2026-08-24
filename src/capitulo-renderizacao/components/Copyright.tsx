interface Props {
  year: string;
}
export default function Copyright({ year }: Props) {
  return <p>© {year} </p>;
}
