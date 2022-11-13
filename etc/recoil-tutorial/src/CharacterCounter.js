import React from "react";
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";
import ResetBtn from "./ResetBtn";

const CharacterCounter = () => {
  return (
    <>
      <TextInput />
      <CharacterCount />
      <ResetBtn />
    </>
  );
};

export default CharacterCounter;
