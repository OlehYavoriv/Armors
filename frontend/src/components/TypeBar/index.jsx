import React from "react";
import { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const TypeBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <div>
      <h3>Product type</h3>
      <ListGroup>
        {product.types.map((type) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={type.id === product.selectedType.id}
            onClick={() => product.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;
