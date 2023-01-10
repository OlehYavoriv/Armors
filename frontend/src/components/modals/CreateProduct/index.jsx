import React from "react";
import { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Context } from "../../..";
import {
  createProduct,
  fetchBrands,
  fetchTypes,
} from "../../../http/productAPI";

const CreateProduct = observer(({ show, onHide }) => {
  const { product } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", product.selectedBrand.id);
    formData.append("typeId", product.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createProduct(formData).then((data) => onHide());
  };
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex">
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>
                {product.selectedType.name || "Choose type"}
                <Dropdown.Menu>
                  {product.types.map((type) => (
                    <Dropdown.Item
                      key={type.id}
                      onClick={() => product.setSelectedType(type)}
                    >
                      {type.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown className="mt-2 mb-2 mx-2">
              <Dropdown.Toggle>
                {product.selectedBrand.name || "Choose brand"}
                <Dropdown.Menu>
                  {product.brands.map((brand) => (
                    <Dropdown.Item
                      key={brand.id}
                      onClick={() => product.setSelectedBrand(brand)}
                    >
                      {brand.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </div>
          <Form.Control
            className="mt-3"
            placeholder={"Enter a product name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            type="number"
            placeholder={"Enter a product price"}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            type="file"
            placeholder={"Choose image"}
            onChange={selectFile}
          />
          <hr />
        </Form>
        <Button variant="outline-dark" onClick={addInfo}>
          Add a new property{" "}
        </Button>
        {info.map((i) => (
          <Row className="mt-4" key={i.number}>
            <Col md={4}>
              <Form.Control
                placeholder="Enter a name for the property"
                value={i.title}
                onChange={(e) => changeInfo("title", e.target.value, i.number)}
              />
            </Col>
            <Col md={4}>
              <Form.Control
                placeholder="Enter a description"
                value={i.description}
                onChange={(e) =>
                  changeInfo("description", e.target.value, i.number)
                }
              />
            </Col>
            <Col md={4}>
              <Button
                variant={"outline-danger"}
                onClick={() => removeInfo(i.number)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>

        <Button variant="outline-success" onClick={addProduct}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;
