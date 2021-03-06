import * as React from "react";
import Product from "./Product";
import ProductsList from "./ProductsList";
import { NavLink } from "react-router-dom";

type Header = {
  key: string;
  label: string;
};

const AllProductsPage: React.FC = () => {
  const headers: Header[] = [
    { key: "id", label: "ID" },
    { key: "product_name", label: "Product Name" },
    { key: "quantity", label: "Quantity" },
    { key: "price", label: "Price" },
  ];

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1>Product List</h1>
        <table>
          <ProductsList headers={headers} />
          <Product />
        </table>
      </div>

      <div style={{ margin: "20px" }}>
        <NavLink to="/addProduct" exact activeClassName="is-Active">
          Add Products
        </NavLink>
      </div>
    </>
  );
};

export default AllProductsPage;
