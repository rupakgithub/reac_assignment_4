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

  const fetchProducts = React.useCallback(async (): Promise<any> => {
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
  }, []);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {
        <tbody>
          {products &&
            products.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <ItemLink product={row.product_name} />
                  <td>{row.quantity}</td>
                  <td>
                    <span>Rs </span>
                    {row.price}
                  </td>
                </tr>
              );
            })}
        </tbody>
      }
    </>
  );
};

export default Product;
