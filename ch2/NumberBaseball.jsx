import React, { useState } from "react";

const setNum = () => {
  let candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let array = [];
  for (let i = 0; i < 4; i++) {
    array.push(candidate.splice(Math.floor(Math.random() * 9 - i), 1).join(""));
  }
  return array;
};

const NumberBaseball = () => {
  const [quiz, setQuiz] = useState(setNum);
  const [result, setResult] = useState("");
  const [inputValue, setinputValue] = useState("");
  const [tries, setTries] = useState([]);
  const [hint, setHint] = useState(0);
  const [count, setCount] = useState(0);

  console.log(quiz);
  const inputValueChange = (e) => {
    if (e.currentTarget.value.length <= quiz.length) {
      setinputValue(e.currentTarget.value);
    }
  };

  const resultCheck = (e) => {
    e.preventDefault();
    if (inputValue.length === 4) {
      setCount((v) => v + 1);
      setTries([...tries, inputValue]);
      if (inputValue === quiz.join("")) {
        setResult("홈런");
        setQuiz(setNum);
      } else {
        setResult("");
        for (let i = 0; i < quiz.length; i++) {}
      }
      console.log(count);
    } else {
      setResult("");
      alert("숫자를 4개 입력하세요");
    }
    setinputValue("");
  };

  return (
    <>
      <h2>{result}</h2>
      <form onSubmit={resultCheck}>
        <input type="number" onChange={inputValueChange} value={inputValue} />
      </form>
      <p>시도 : {tries.length}</p>
      <ul>
        {tries.map((v, i) => {
          return (
            <li key={v + i}>
              <div>{v}</div>
              <div>{hint}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NumberBaseball;
