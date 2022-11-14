import React, { useState } from "react";
import axios from "axios";
import { REACT_APP_HOST, REACT_APP_PORT } from ".";

const App = () => {
  const [value, setValue] = useState(0);
  const [newValue, setNewValue] = useState({ name: "", age: 0 });

  const axiosGet = (e) => {
    e.preventDefault();
    let paramId;
    if (Number(value) === 0) {
      paramId = "";
    } else {
      paramId = value;
    }
    axios
      .create({
        headers: {
          Content_Type: "application/json",
        },
        withCredentials: true,
      })
      .get(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/${paramId}`, {})
      .then((res) => console.log(res.data));
  };
  const axiosPost = (e) => {
    e.preventDefault();
    axios
      .create({
        headers: {
          Content_Type: "application/json",
        },
        withCredentials: true,
      })
      .post(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/`, {
        name: newValue.name,
        age: newValue.age,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <form onSubmit={axiosGet}>
        <fieldset>
          <legend>
            <h2>악시오스 겟</h2>
          </legend>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button type="submit">axios GET</button>
        </fieldset>
      </form>
      <form onSubmit={axiosPost}>
        <fieldset>
          <legend>
            <h2>악시오스 포스트</h2>
          </legend>
          name :{" "}
          <input
            type="text"
            value={newValue.name}
            onChange={(e) => setNewValue({ ...newValue, name: e.target.value })}
            required
          />
          age :{" "}
          <input
            type="number"
            value={newValue.age}
            onChange={(e) => setNewValue({ ...newValue, age: e.target.value })}
          />
          <button type="submit">axios POST</button>
        </fieldset>
      </form>
    </>
  );
};

export default App;
