import { NavLink, Prompt } from "react-router-dom";
import * as React from "react";

const ItemLink: React.FC<{ product: string }> = (props) => {
  const [click, setClick] = React.useState<boolean>(true);

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setClick(true);
    console.log(event.type === "click");
   
    console.log(click);
  };


  return (
    <td>
      <NavLink to={`/product/${props.product}`} exact onClick={onClick}>
        {props.product}
      </NavLink>
      {/* <button  onClick={onClick}>{props.product}</button> */}
      <Prompt key={props.product} when={click} message="test ?" />;
    </td>
  );
};

export default ItemLink;
