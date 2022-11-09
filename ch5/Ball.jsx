import React, { memo } from "react";
import { Button } from "react-bootstrap";

const Ball = memo((props) => {
  return (
    <>
      <Button
        variant={props.color}
        className="rounded-circle m-2 border-dark fw-bold"
        size="lg"
      >
        {props.number}
      </Button>
    </>
  );
});
Ball.displayName = "Ball";

export default Ball;
