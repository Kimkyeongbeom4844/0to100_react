import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

const RocksissorpaperWrap = styled.div`
  width: 148px;
  height: 200px;
  overflow: hidden;
`;

const RocksissorpaperImg = styled.img`
  position: relative;
`;

const ButtonMarginX = styled.button`
  margin-left: 5px;
  margin-right: 5px;
`;

const Rocksissorpaper = () => {
  const imgRef = useRef(null);
  const timer = useRef(null);
  const [tries, setTries] = useState([]);

  const startTimer = () => {
    timer.current = setInterval(() => {
      switch (imgRef.current.style.left) {
        case "-10px":
          imgRef.current.style.left = "-284px";
          break;
        case "-284px":
          imgRef.current.style.left = "-136px";
          break;
        case "-136px":
          imgRef.current.style.left = "-10px";
          break;
      }
    }, 100);
  };

  const stopTimer = (e) => {
    clearInterval(timer.current);
    // console.log(imgRef.current.style.left, e.target.value);
    let result;
    switch (e.target.value) {
      case "-136px":
        if (imgRef.current.style.left === "-136px") {
          result = "비겼습니다";
        } else if (imgRef.current.style.left === "-10px") {
          result = "졌습니다";
        } else {
          result = "이겼습니다";
        }
        break;
      case "-10px":
        if (imgRef.current.style.left === "-136px") {
          result = "이겼습니다";
        } else if (imgRef.current.style.left === "-10px") {
          result = "비겼습니다";
        } else {
          result = "졌습니다";
        }
        break;
      case "-284px":
        if (imgRef.current.style.left === "-136px") {
          result = "졌습니다";
        } else if (imgRef.current.style.left === "-10px") {
          result = "이겼습니다";
        } else {
          result = "비겼습니다";
        }
        break;
    }
    setTries([...tries, result]);
    setTimeout(() => {
      startTimer();
    }, 2000);
  };

  return (
    <>
      <RocksissorpaperWrap>
        <RocksissorpaperImg
          ref={imgRef}
          onLoad={startTimer}
          style={{ left: "-136px" }}
          src="http://en.pimg.jp/023/182/267/1/23182267.jpg"
          alt="가위바위보"
        />
      </RocksissorpaperWrap>
      <ButtonMarginX onClick={stopTimer} value="-136px">
        가위
      </ButtonMarginX>
      <ButtonMarginX onClick={stopTimer} value="-10px">
        바위
      </ButtonMarginX>
      <ButtonMarginX onClick={stopTimer} value="-284px">
        보
      </ButtonMarginX>
      <ul>
        {tries.map((v, i) => {
          return (
            <li key={v + i}>
              시도 : {i + 1}회 , 결과 : {v}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Rocksissorpaper;
