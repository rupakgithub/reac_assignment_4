import * as React from "react";
import "./Header.css";
import ItemLink from "./ItemLink";

type ProductType = {
  id: number;
  product_name: string;
  quantity: number;
  price: number;
};

const Product: React.FC = () => {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchProducts = React.useCallback(async (): Promise<any> => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();

    if (response.ok) {
      if (data) {
        setProducts(data);
      } else {
        return Promise.reject(new Error("No products found"));
      }
    } else {
      return Promise.reject(new Error("Error in getting products"));
    }

    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {isLoading && <h1 className="loading">Loading...</h1>}
      {!isLoading && (
        <tbody>
          {products &&
            products.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <ItemLink product={row.product_name}/>
                  <td>{row.quantity}</td>
                  <td>
                    <span>Rs </span>
                    {row.price}
                  </td>
                </tr>
              );
            })}
        </tbody>
      )}
    </>
  );
};

export default Product;
