import React from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const BrandBar = observer(() => {
  const { product } = useContext(Context);

  return (
    <div>
      <h3>Brands</h3>
      <div className="d-flex flex-wrap">
        {product.brands.map((brand) => (
          <Card
            key={brand.id}
            className="brand_item"
            onClick={() => product.setSelectedBrand(brand)}
            border={brand.id === product.selectedBrand.id ? "selected" : "calm"}
          >
            {brand.name}
          </Card>
        ))}
      </div>
    </div>
  );
});

export default BrandBar;
