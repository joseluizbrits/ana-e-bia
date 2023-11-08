import React from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const pageName = useLocation().pathname.replace("/", "");

  return (
    <div>
      <h1>Página {pageName}</h1>
    </div>
  );
}

export default Product;
