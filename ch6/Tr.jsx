import React, { memo } from "react";
import Td from "./Td.jsx";

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  console.log("Tr 실행");
  return (
    <>
      <tr>
        {Array(rowData.length)
          .fill()
          .map((v, i) => (
            <Td
              rowIndex={rowIndex}
              cellIndex={i}
              cellData={rowData[i]}
              dispatch={dispatch}
            ></Td>
          ))}
      </tr>
    </>
  );
});
Tr.displayName = "Tr";

export default Tr;
