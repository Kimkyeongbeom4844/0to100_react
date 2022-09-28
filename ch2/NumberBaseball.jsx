import React, { useRef, useState } from "react";
import Try from "./try.jsx";

const setNum = () => {
  let candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let array = [];
  for (let i = 0; i < 4; i++) {
    array.push(candidate.splice(Math.floor(Math.random() * 9 - i), 1).join(""));
  }
  return array;
};

const NumberBaseball = () => {
  const [quiz, setQuiz] = useState(setNum); //useState에서 제공하는 lazyinit -> setNum함수가 return값을 반환할 때까지 await시킴
  const [result, setResult] = useState("");
  const [inputValue, setinputValue] = useState("");
  const [tries, setTries] = useState([]);
  const [hint, setHint] = useState([]);
  const focusInput = useRef(null);

  console.log(quiz);
  const inputValueChange = (e) => {
    if (e.currentTarget.value.length <= quiz.length) {
      setinputValue(e.currentTarget.value);
    }
  };

  const resultCheck = (e) => {
    e.preventDefault();
    if (inputValue.length === 4) {
      setTries((v) => [...v, inputValue]);
      if (inputValue === quiz.join("")) {
        setResult("정답! 홈런입니다");
        setTries([]);
        setHint([]);
        setQuiz(setNum);
      } else {
        setResult("");
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < quiz.length; i++) {
          if (inputValue[i] === quiz[i]) {
            strike++;
          } else if (quiz.includes(inputValue[i])) {
            ball++;
            continue;
          }
        }
        setHint((v) => [...v, `${strike}스트라이크${ball}볼`]);
      }
    } else {
      setResult("");
      alert("숫자를 4개 입력하세요");
    }
    setinputValue("");
  };

  if (tries.length === 10) {
    alert(
      `실패! 10번이상 틀려서 게임을 새로 시작합니다. 정답은 ${quiz.join(
        ``
      )}이었습니다)`
    );
    setTries([]);
    setHint([]);
    setQuiz(setNum);
  }

  return (
    <>
      <h2>{result}</h2>
      <form onSubmit={resultCheck}>
        <input type="number" onChange={inputValueChange} value={inputValue} />
      </form>
      <p>시도 : {tries.length}</p>
      <ul>
        {tries.map((v, i) => (
          <Try key={v + i} value={v} hint={hint[i]} />
        ))}
      </ul>
    </>
  );
};
export default NumberBaseball;
