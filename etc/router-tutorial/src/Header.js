import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <h1>헤더입니다.</h1>
      </Link>
    </>
  );
};

export default Header;
