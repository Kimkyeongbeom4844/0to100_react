const React = require("react");
const { useState, useRef } = require("react");

const Gugudan = () => {
  const [result, checkResult] = useState("");
  const [inputValue, nexttInputValue] = useState("");
  const [first, nextFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, nextSecond] = useState(Math.ceil(Math.random() * 9));
  const inputFocus = useRef(null);

  const resultCheck = (e) => {
    e.preventDefault();
    nexttInputValue("");
    if (Number(inputValue) === first * second) {
      checkResult("딩동댕");
      nextFirst(Math.ceil(Math.random() * 9));
      nextSecond(Math.ceil(Math.random() * 9));
    } else {
      checkResult("땡");
    }
    inputFocus.current.focus();
  };

  const textChange = (e) => {
    nexttInputValue(e.target.value);
  };

  return (
    <div>
      <h2>
        {first}곱하기{second}은?
      </h2>
      <form onSubmit={resultCheck}>
        <input
          ref={inputFocus}
          type="number"
          onChange={textChange}
          value={inputValue}
        />
        <button>입력</button>
      </form>
      <h2>{result}</h2>
    </div>
  );
};

module.exports = Gugudan;
