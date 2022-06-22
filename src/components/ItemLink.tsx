import { NavLink, Prompt } from "react-router-dom";
import * as React from "react";

const ItemLink: React.FC<{ product: string }> = (props) => {
  
  return (
    <>
      <Prompt
        message={(location, action) => {
          // if (action === "POP") {
          //   console.log("Backing up...");
          // }

          return !location.pathname.startsWith("/product/")
            ? true
            : "Are you sure you want to view the details ?";
        }}
      />
      <td>
        <NavLink to={`/product/${props.product}`} exact >
          {props.product}
        </NavLink>
      </td>
    </>
  );
};

export default ItemLink;
