import { useState } from "react";

export interface Props {
  id: string;
  name: string;
  check?: boolean;
  counter?: number;
}

export function IndexTernario({ name, check, counter }: Props) {
  const [isChecked, setChecked] = useState(check);
  let itemName: React.ReactNode = name;

  const handleClick = () => {
    setChecked(true);
  };

  if (isChecked) {
    itemName = <del> {name} </del>;
  }
  return (
    <div className="item" onClick={handleClick}>
      IndexTernario - {name} - {isChecked ? "RodrigoSIM" : "RodrigoNao"}
      {counter && ` (${counter})`}
      <h3>{itemName}</h3>
    </div>
  );
}
