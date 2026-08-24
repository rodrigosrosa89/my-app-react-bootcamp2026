export function ProductItemDumb({ product }) {
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
