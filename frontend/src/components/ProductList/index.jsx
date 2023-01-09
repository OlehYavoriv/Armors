import React from "react";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import ProductItem from "../ProductItem";

const ProductList = observer(() => {
  const { product } = useContext(Context);
  return (
    <Row>
      {product.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Row>
  );
});

export default ProductList;
