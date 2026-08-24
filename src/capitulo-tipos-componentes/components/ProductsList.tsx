import { useEffect, useState } from "react";
import { ProductItemDumb } from "./ProdutctItemDumb";
import { API_BASE_URL } from "../../settings.ts";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}wwww.google.com.br`)
      .then(async (response) => {
        setIsLoading(true);

        if (!response.ok) {
          throw new Error("ocorreu uma falha");
        }

        const data = await response.json();
        console.log(data);

        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        alert("Ocorreu um erro ao rodar chamada!");
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Produtos</h2>
        <p>Buscando lista de produtos...</p>
      </div>
    );
  }

  return (
    <div>
      <h2></h2>
      <ul className="list-products">
        {products.map((item) => (
          <ProductItemDumb key={item.id} product={item} />
        ))}
      </ul>
    </div>
  );
}
