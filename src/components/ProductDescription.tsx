import * as React from "react";
import { NavLink, useParams } from "react-router-dom";

interface ProductParamType {
  productId: string;
}

const ProductDescription: React.FC = () => {
  const { productId } = useParams<ProductParamType>();
  return (
    <>
      <p>
        <span style={{ fontWeight: "bold" }}>Product Name:</span> {productId}
      </p>
      <NavLink to="/product" exact>Back</NavLink>
    </>
  );
};

export default ProductDescription;
