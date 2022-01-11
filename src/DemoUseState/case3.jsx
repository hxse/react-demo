import React, { useEffect, useRef } from "react";
import useStateUpdate from "../hook/useStateUpdate.js";

function Case3() {
  const [count, setCount, countRef] = useStateUpdate(() => {
    console.log("init useStateUpdate");
    return 0;
  });
  const countLast = useRef(0);

  function handleClick() {
    const num = count == 2 ? 2 : count + 1;
    setCount(num);
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
