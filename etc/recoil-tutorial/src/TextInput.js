import React from "react";
import { textState } from "./index";
import { useRecoilState } from "recoil";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo : {text}
    </div>
  );
};

export default TextInput;
