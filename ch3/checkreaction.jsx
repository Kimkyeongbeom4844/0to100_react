"use strict";

import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const Square = styled.div`
  width: 40rem;
  height: 30rem;
  text-align: center;
  background-color: ${({ backgroundColor }) => {
    if (backgroundColor === "#00E5FF") {
      return "#00E5FF";
    } else if (backgroundColor === "#FF1800") {
      return "#FF1800";
    } else {
      return "#AAEB29";
    }
  }};
`;

const Checkreaction = () => {
  const [bgColor, setBgColor] = useState("#00E5FF");
  const [word, setWord] = useState("클릭해서 시작하세요");
  // const [timer, setTimer] = useState();
  const timer = useRef(null);
  const wordRef = useRef(null);
  const timeRef = useRef(null);

  const squareClickEvent = (e) => {
    if (bgColor === "#AAEB29") {
      setBgColor("#00E5FF");
      setWord("클릭해서 시작하세요");
      console.log(`${new Date() - timer.current} 밀리초`);
    } else if (bgColor === "#00E5FF") {
      console.log(timeRef.current);
      setBgColor("#FF1800");
      wordRef.current.style.color = "white";
      setWord("초록색이 되면 클릭하세요");
      timeRef.current = setTimeout(() => {
        timer.current = new Date();
        setBgColor("#AAEB29");
        wordRef.current.style.color = "black";
        setWord("클릭하세요");
      }, Math.floor(Math.random() * 9000));
    } else {
      clearTimeout(timeRef.current);
      setBgColor("#00E5FF");
      setWord("너무 성급하시군요, 시작하려면 클릭하세요");
      wordRef.current.style.color = "black";
    }
  };

  return (
    <Square backgroundColor={bgColor} onClick={squareClickEvent}>
      <h1 ref={wordRef}>{word}</h1>
    </Square>
  );
};

export default Checkreaction;
