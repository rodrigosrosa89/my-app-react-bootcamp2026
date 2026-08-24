interface Props {
  product: {
    id: string;
    name: string;
    description: string;
  };
}

export function ProductItemDumb({ product }: Props) {
  return (
    <ul>
      <li>
        <p>
          {product.id} - {product.name}
        </p>
        <p className="price">
          {product.id} - {product.name}
        </p>
        <p>{product.description}</p>
      </li>
    </ul>
  );
}
