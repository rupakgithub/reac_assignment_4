import * as React from "react";
import "./AddProduct.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type UserSubmitForm = {
  product: string;
  quantity: number;
  price: number;
};

const schema = yup.object().shape({
  product: yup
    .string()
    .min(3, "* Product must have 3 characters")
    .required("* Product is required value"),
  quantity: yup
    .number()
    .typeError("* Quantity field can't be NULL")
    .positive("* Quantity should be a positive number")
    .integer("* Quantity should be integer only")
    .required("* Quantity should be more than 0"),
  price: yup
    .number()
    .typeError("* Price field can't be NULL")
    .min(1, "* Price should be minimum 1")
    .positive("* Price should be a positive number")
    .required("* Price should be more than 1"),
});

const AddProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data: UserSubmitForm) => {
    const {price, quantity, product: product_name} = data;
    const response = await fetch("http://localhost:3004/products",{
      method: 'POST',
      body: JSON.stringify({price, quantity, product_name}),
      headers:{
        "Content-Type": "application/json"
      }
    });
    const productData = await response.json();
    console.log(productData);
  };

  return (
    <div className="product-form">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" {...register("product")} placeholder="Product" />
        <p style={{ color: "red" }}>{errors.product?.message}</p>
        <input type="number" placeholder="Quantity" {...register("quantity")} />
        <p style={{ color: "red" }}>{errors.quantity?.message}</p>
        <input type="number" {...register("price")} placeholder="Price" />
        <p style={{ color: "red" }}>{errors.price?.message}</p>
        <button className="form-btn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
