import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { textState } from ".";

const ResetBtn = () => {
  const resetValue = useResetRecoilState(textState);

  const resetInput = () => {
    resetValue();
  };
  return (
    <>
      <button onClick={resetInput}>리셋</button>
    </>
  );
};

export default ResetBtn;
