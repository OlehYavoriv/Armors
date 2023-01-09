import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateProduct from "../../components/modals/CreateProduct";
import CreateType from "../../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <h2 className="page_title">Admin Panel</h2>
      <hr className="line" />
      <p className="mt-2 text-center">
        Welcome to the admin panel. Here you can add a new product type, brand
        or create a new product
      </p>
      <div className="my-4">
        <div className="d-flex align-items-center">
          <p className="m-0 fw-bold">New product type : </p>
          <Button
            className="mx-4 p-1 admin_btns"
            onClick={() => setTypeVisible(true)}
          >
            Create type
          </Button>
        </div>
        <div className="d-flex align-items-center mt-4">
          <p className="m-0 fw-bold">New product brand : </p>
          <Button
            className="mx-4 p-1 admin_btns"
            onClick={() => setBrandVisible(true)}
          >
            Create brand
          </Button>
        </div>
        <div className="d-flex align-items-center mt-4">
          <p className="m-0 fw-bold">New product : </p>
          <Button
            className="mx-4 p-1 admin_btns"
            onClick={() => setProductVisible(true)}
          >
            Create product
          </Button>
        </div>
      </div>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateProduct
        show={productVisible}
        onHide={() => setProductVisible(false)}
      />
    </Container>
  );
};

export default Admin;
