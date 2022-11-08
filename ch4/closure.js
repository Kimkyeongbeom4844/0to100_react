const customUseState = (initialVal) => {
  let currentState = initialVal;
  const state = currentState; // 변수로 접근하도록 수정
  const setState = (newVal) => {
    currentState = newVal;
  };
  return [state, setState];
};

const [counter, setCounter] = customUseState(0);
console.log(counter); // 0
setCounter(1);
console.log(counter); // 0 ??
