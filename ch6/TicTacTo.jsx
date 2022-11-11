import React, { useState, useReducer, useCallback, useEffect } from "react";
import Tables from "./Table.jsx";
import { Button } from "react-bootstrap";
import produce from "immer";

const initialState = {
  winner: "",
  turn: "o",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  count: 0,
};

// 액션의 타입 이름 -> 컴포넌트 바깥에 대문자 상수로 선언하는 규칙이 잇다
export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const GAME_RESET = "GAME_RESET";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINNER:
      console.log(state.turn);
      for (let i = 0; i < state.tableData.length; i++) {
        const count = {
          x: 0,
          y: 0,
        };
        for (let j = 0; j < state.tableData[i].length; j++) {
          state.tableData[i][j] === state.turn ? count.x++ : count.x;
          state.tableData[j][i] === state.turn ? count.y++ : count.y;
        }
        if (
          state.tableData[i].length === count.x ||
          state.tableData.length === count.y
        ) {
          return {
            ...state,
            winner: state.turn,
          };
        }
      }
      return {
        ...state,
      };
    case CLICK_CELL:
      // const tableData = [...state.tableData];
      // tableData[action.row] = [...tableData[action.row]];
      // if (tableData[action.row][action.cell] === "") {
      //   tableData[action.row][action.cell] = state.turn;
      //   return {
      //     ...state,
      //     tableData,
      //     winner: "",
      //   };
      // }
      if (state.count < 9) {
        if (state.tableData[action.row][action.cell] === "") {
          return produce(state, (draft) => {
            draft.count++;
            draft.tableData[action.row][action.cell] = draft.turn;
          });
        }
        return state;
      }

    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "o" ? "x" : "o",
      };
    case GAME_RESET:
      // return {
      //   ...state,
      //   winner: "",
      //   tableData: [
      //     ["", "", ""],
      //     ["", "", ""],
      //     ["", "", ""],
      //   ],
      // };
      return produce(state, (draft) => {
        draft.count = 0;
        draft.winner = "";
        draft.tableData = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ];
      });
  }
};

const Tictacto = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("o");
  // const [tableData, setTableData] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);
  const gameReset = useCallback(() => {
    dispatch({ type: GAME_RESET });
  }, []);

  return (
    <>
      <Tables
        // onClick={onClickTable}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.count < 9 ? (
        state.winner ? (
          <>
            <h3>{state.winner}님의 승리</h3>
            <Button className="p-2" onClick={gameReset}>
              게임초기화
            </Button>
          </>
        ) : null
      ) : (
        <>
          <h3>무승부</h3>
          <Button className="p-2" onClick={gameReset}>
            게임초기화
          </Button>
        </>
      )}
    </>
  );
};

export default Tictacto;
