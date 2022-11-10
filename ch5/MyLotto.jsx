import React, { useState, useRef, useEffect, useCallback } from "react";
import Ball from "./Ball.jsx";

const colorList = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "dark",
];

const ballOptions = () => {
  return {
    color: colorList[parseInt(Math.random() * 6.9999)],
    number: parseInt(Math.random() * 100),
  };
};

const MyLotto = () => {
  const chooseBall = useCallback(ballOptions, []);
  const [result, setResult] = useState([]);
  const [bonus, setBonus] = useState([]);
  const counterRef = useRef(null);

  useEffect(() => {
    counterRef.current = setInterval(() => {
      if (result.length < 6) {
        setResult((v) => [...v, chooseBall()]);
      } else {
        clearInterval(counterRef.current);
        setBonus((v) => [...v, chooseBall()]);
      }
    }, 1000);

    return () => {
      clearInterval(counterRef.current);
    };
  }, [result]);

  return (
    <>
      {result.map((v, i) => (
        <Ball key={v.color + v.number + i} color={v.color} number={v.number} />
      ))}
      <h3>보너스!</h3>
      {bonus.map((v, i) => (
        <Ball key={v.color + v.number + i} color={v.color} number={v.number} />
      ))}
    </>
  );
};

export default MyLotto;
