const React = require("react");
const { useState, useRef } = require("react");

const Wordrelay = () => {
  const [first, setFirst] = useState("제로초");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const inputFocus = useRef(null);

  const changeInput = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const checkResult = (e) => {
    e.preventDefault();
    if (first[first.length - 1] === inputValue[0]) {
      setFirst(inputValue);
      setResult("딩동댕");
    } else {
      setResult("땡");
    }
    setInputValue("");
    inputFocus.current.focus();
  };

  return (
    <>
      <h2>{first}</h2>
      <form onSubmit={checkResult}>
        <input
          ref={inputFocus}
          type="text"
          name=""
          id=""
          onChange={changeInput}
          value={inputValue}
        />
        <button onClick={checkResult}>입력!</button>
      </form>
      <h2>{result}</h2>
    </>
  );
};

module.exports = Wordrelay;
