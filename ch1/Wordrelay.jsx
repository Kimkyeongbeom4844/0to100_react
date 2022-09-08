const React = require("react");
const { useState } = require("react");

const Wordrelay = () => {
  const [first, setFirst] = useState("hello Webpack");

  return <h1>{first}</h1>;
};

module.exports = Wordrelay;
