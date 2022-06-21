import { NavLink} from "react-router-dom";
import * as React from "react";

const ItemLink: React.FC<{ product: string }> = (props) => {

  return (
    <td>
      <NavLink to={`/product/${props.product}`} exact >
        {props.product}
      </NavLink> 
      {/* <button  onClick={onClick}>{props.product}</button> */}
      
    </td>
  );
};

export default ItemLink;
