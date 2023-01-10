import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { fetchOneProduct } from "../../http/productAPI";
import Star from "../../assets/images/star.png";

const ProductPage = () => {
  const [product, setProduct] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneProduct(id).then((data) => setProduct(data));
  }, []);

  return (
    <Container className="my-3">
      <Row className="my-5 justify-content-between">
        <Col md={4}>
          {product.id && (
            <Image
              width={300}
              height={300}
              src={process.env.REACT_APP_API_URL + product.img}
              alt="Poduct"
            />
          )}
        </Col>
        <Col md={6}>
          <Row>
            <h2>{product.name}</h2>
            <div className="d-flex align-items-center justify-content-start">
              <span className="fw-bold">Rating: </span>
              <div className="mx-3 ">
                {product.rating}
                <Image width={18} height={18} src={Star} />
              </div>
            </div>
            <h3 className="text-center fw-bold my-4">{product.price} $</h3>
            <Button variant={"outline-dark"}>Add to basket</Button>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Row className="d-flex flex-column">
            <h3>Characteristics</h3>
            {product.info.map((info, index) => (
              <Row key={info.id}>
                <div className="d-flex align-items-center">
                  <span className="fw-bold mx-2 my-1">{info.title}:</span>{" "}
                  {info.description}
                </div>
              </Row>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
