import React, { useState, useCallback } from "react";
import { todoListState } from ".";
import { useRecoilState } from "recoil";

let id = 0;
function getId() {
  return id++;
}

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <form onSubmit={addItem}>
      <input type="text" value={inputValue} onChange={onChange} required />
      <button>Add</button>
    </form>
  );
};

export default TodoItemCreator;
