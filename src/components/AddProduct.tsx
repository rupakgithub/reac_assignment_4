import * as React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const product = React.useRef<HTMLInputElement>(null);
  const quantity = React.useRef<HTMLInputElement>(null);
  const price = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(product.current!.value);
    console.log(quantity.current!.value);
    console.log(price.current!.value);
  };

  return (
    <div className="product-form">
      <h1>Add Product</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Product</label>
        <input type="text" ref={product} />
        <label htmlFor="number">Quantity</label>
        <input type="number" min={0} ref={quantity} />
        <label htmlFor="number">Price</label>
        <input type="number" min={1} ref={price} />
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
