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
    .min(3,"* Product must have 3 characters")
    .required("Product is required value & should have 3 characters"),
  quantity: yup
    .number()
    .positive()
    .integer()
    .required("Quantity should be more than 0"),
  price: yup.number().positive().required("Price should be more than 1"),
});

const AddProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: UserSubmitForm) => {};

  return (
    <div className="product-form">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(submitForm)}>

        <input type="text" {...register("product")} placeholder="product" />
        
        <p style={{color:'red'}}>{errors.product?.message}</p>
        <input
          type="number"
          placeholder="quantity"
          {...register("quantity")}
        />
        <p>{errors.quantity?.message}</p>
        <input
          type="number"
          {...register("price")}
          placeholder="price"
        />
        <p>{errors.price?.message}</p>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
