import React, { useReducer, useEffect, useRef, useMemo } from "react";

function reducer(state, action) {
  return action.num;
}

function init(state) {
  console.log("init useReducer");
  return state;
}

function Case2() {
  const [count, dispatch] = useReducer(reducer, 0, init);
  const countMemo = useMemo(() => {
    console.log("run count memo...");
    return count;
  }, [count]);

  const countLast = useRef(0);

  function handleClick() {
    const num = count == 2 ? 2 : count + 1;
    dispatch({ num });
    console.log(num == countLast.current, "set num", num, "last count:", countLast.current, "current:", undefined);
  }
  useEffect(() => {
    countLast.current = count;
    console.log("effect");
  });
  console.log("Render");
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      {countMemo}
      <TheChild></TheChild>
    </div>
  );
}

function TheChild() {
  console.log("I am child");
  return <div></div>;
}
export default Case2;
