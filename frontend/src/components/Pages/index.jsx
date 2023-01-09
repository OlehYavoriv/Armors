import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const Pages = observer(() => {
  const { product } = useContext(Context);
  const pageCount = Math.ceil(product.totalCount / product.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="my-5 px-3 flex-wrap">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={product.page === page}
          onClick={() => product.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
