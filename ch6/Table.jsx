import React, { memo } from "react";
import Tr from "./Tr.jsx";
import Table from "react-bootstrap/Table";

const Tables = memo(({ onClick, tableData, dispatch }) => {
  return (
    <>
      <Table striped="columns" bordered onClick={onClick}>
        {Array(tableData.length)
          .fill()
          .map((v, i) => (
            <tbody>
              <Tr rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
            </tbody>
          ))}
      </Table>
    </>
  );
});
Table.displayName = "Table";

export default Tables;
