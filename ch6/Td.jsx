import React, { useCallback, memo } from "react";
import { CLICK_CELL, CHANGE_TURN, SET_WINNER } from "./TicTacTo.jsx";

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log("td실행");
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: SET_WINNER });
    dispatch({ type: CHANGE_TURN });
  }, []);
  return (
    <>
      <td className="py-5 text-center fs-1 fw-bold" onClick={onClickTd}>
        {cellData}
      </td>
    </>
  );
});
Td.displayName = "Td";

export default Td;
