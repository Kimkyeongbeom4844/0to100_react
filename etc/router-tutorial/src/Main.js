import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <ul>
        <Link to="/product/1">
          <li>1번상품</li>
        </Link>
        <Link to="/product/2">
          <li>2번상품</li>
        </Link>
        <li>
          <button onClick={() => navigate(-2)}>뒤로 2칸</button>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>뒤로 1칸</button>
        </li>
        <li>
          <button onClick={() => navigate(1)}>앞으로 1칸</button>
        </li>
        <li>
          <button onClick={() => navigate(2)}>앞으로 2칸</button>
        </li>
        <li>
          <button onClick={() => navigate("/")}>메인으로</button>
        </li>
        <li>
          <button onClick={() => navigate("/", { replace: true })}>
            메인으로 v2
          </button>
        </li>
      </ul>
    </>
  );
};

export default Main;
