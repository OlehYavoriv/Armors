import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Image } from "react-bootstrap";
import { PRODUCT_ROUTE } from "../../utils/consts";
import Star from "../../assets/images/star.png";
import { BsBasketFill } from "react-icons/bs";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={4}
      className={"mt-3"}
      onClick={() => navigate(PRODUCT_ROUTE + "/" + product.id)}
    >
      <Card className="card_effect">
        <Image
          className="product_img"
          src={process.env.REACT_APP_API_URL + product.img}
        />
        <div>
          <p className="product_title">{product.name}</p>
        </div>
        <div className="d-flex align-items-center justify-content-end product_rating">
          {product.rating}
          <Image width={18} height={18} src={Star} />
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="product_price">{product.price} $</div>
          <div>
            <BsBasketFill className="basket_icon" />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
