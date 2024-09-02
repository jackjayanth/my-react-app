import { useEffect, useReducer, useState } from "react";

export const initialState = [
  {
    name: "Jay",
    age: 32,
    height: 180,
  },
  {
    name: "Lindsey",
    age: 26,
    height: 150,
  },
];
function New() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jay");
  const [state, setState] = useState(initialState);
  function handleI() {
    setCount(count + 1);
  }
  function handleD() {
    setCount(count - 1);
  }
  function handleR() {
    setCount(0);
  }
  function handleWordAppend() {
    setName(name + " updated");
  }

  function addNewPerson() {
    let addition = {
      name: "Lindsey",
      age: 26,
      height: 150,
    };
    setState([...state, addition]);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleI}>increment</button>
      <button onClick={handleD}>decrement</button>
      <button onClick={handleR}>reset</button>
      <h1>{name}</h1>
      <button onClick={handleWordAppend}>update name</button>
      <br />
      <button onClick={addNewPerson}>update State</button>
      {state.map((ind, i) => (
        <div key={i}>
          <h1> {i}</h1>
          <h1> {ind.name}</h1>
          <h1> {ind.age}</h1>
          <h1> {ind.height}</h1>
          <hr />
        </div>
      ))}
      <hr />
      <hr />
      <hr />
    </div>
  );
}

export default New;
