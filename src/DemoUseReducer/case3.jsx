import React, { useRef, useEffect } from "react";
import useReducerUpdate from "../hook/useReducerUpdate.js";

function reducer(state, action) {
  return action.num;
}

function init(state) {
  console.log("init useReducerUpdate");
  return state;
}

function Case3() {
  const [count, dispatch, countRef] = useReducerUpdate(reducer, 0, init);
  const countLast = useRef(0);

  function handleClick() {
    const num = count == 2 ? 2 : count + 1;
    dispatch({ num });
    console.log(
      num == countLast.current,
      "set num",
      num,
      "last count:",
      countLast.current,
      "state",
      count,
      "current:",
      countRef.current
    );
  }
  useEffect(() => {
    countLast.current = count;
    console.log("effect");
  });
  console.log("Render");
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      {count}
      <TheChild></TheChild>
    </div>
  );
}

function TheChild() {
  console.log("I am child");
  return <div></div>;
}
export default Case3;
