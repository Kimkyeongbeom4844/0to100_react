import React, { memo } from "react";

const Try = memo(({ value, hint }) => {
  return (
    <li>
      <div>{value}</div>
      <div>{hint}</div>
    </li>
  );
});
Try.displayName = "Try";
export default Try;
