import React, { useState, useRef } from "react";

const NumberBaseball = () => {
  let arr = Array.from(Array(4), () => String(Math.ceil(Math.random() * 9)));
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [quiz, setQuiz] = useState(arr);
  const inputDOM = useRef(null);
  const changeInputValue = (e) => {
    if (e.currentTarget.value.length <= 4) {
      setInputValue(e.currentTarget.value);
    }
  };
  console.log(quiz);
  let strike = 0;
  let ball = 0;
  const checkResult = (e) => {
    e.preventDefault();
    if (inputValue.length !== 4) {
      setResult("네 자리 수를 입력하세요");
    } else {
      for (let i = 0; i < 4; i++) {
        if (inputValue.includes(arr[i])) {
          if (inputValue[i] == arr[i]) {
            strike++;
          } else {
            ball++;
          }
        }
      }
      setResult(`${strike}스트라이크, ${ball}볼`);
    }
    inputDOM.current.focus();
    setInputValue("");
  };
  return (
    <>
      <h2>{result}</h2>
      <form onSubmit={checkResult}>
        <input
          ref={inputDOM}
          type="number"
          onChange={changeInputValue}
          value={inputValue}
        />
        <button onClick={checkResult}>입력!</button>
      </form>
    </>
  );
};
export default NumberBaseball;
