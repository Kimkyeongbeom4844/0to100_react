import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const location = useLocation();
  return (
    <>
      <h3>{productId}상품 페이지입니다.</h3>
      <div>
        <h2>location 객체 정보들</h2>
        <p>1. location.hash = {location.hash}</p>
        <p>2. location.pathname = {location.pathname}</p>
        <p>3. location.search = {location.search}</p>
        <p>4. location.state = {location.state}</p>
        <p>5. location.key = {location.key}</p>
      </div>
    </>
  );
};

export default Product;
