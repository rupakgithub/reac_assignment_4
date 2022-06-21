import * as React from "react";

type Header = {
  key: string;
  label: string;
};

type Props = {
  headers: Header[];
};

const ProductsList: React.FC<Props> = (props) => {
  return (
    <thead>
      <tr>
        {props.headers.map((row) => (
          <td key={row.key}>{row.label}</td>
        ))}
      </tr>
    </thead>
  );
};

export default ProductsList;
