import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import BrandBar from "../../components/BrandBar";
import Pages from "../../components/Pages";
import ProductList from "../../components/ProductList";
import TypeBar from "../../components/TypeBar";
import { fetchBrands, fetchProduct, fetchTypes } from "../../http/productAPI";

const Shop = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
    fetchProduct(null, null, 1, 2).then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product]);

  useEffect(() => {
    fetchProduct(
      product.selectedType.id,
      product.selectedBrand.id,
      product.page,
      6
    ).then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.page, product.selectedType, product.selectedBrand,product]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <ProductList />
        </Col>
        <Pages />
      </Row>
    </Container>
  );
});

export default Shop;
