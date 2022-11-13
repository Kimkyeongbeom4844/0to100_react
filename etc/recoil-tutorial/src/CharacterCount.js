import React from "react";
import { useRecoilState } from "recoil";
import { charCountState } from "./index";

const CharacterCount = () => {
  const [count, setCount] = useRecoilState(charCountState);
  return <>Character Count : {count}</>; //charCOuntState는 selector이고, getter를 사용하여 get함수 실행
};

export default CharacterCount;
