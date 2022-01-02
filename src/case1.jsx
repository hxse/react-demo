import React, { useState, useLayoutEffect, useEffect, useRef, useMemo } from "react";

function Case1() {
  const [count, setCount] = useState(0);
  const countLast = useRef(0);

  function handleClick() {
    const num = count == 2 ? 2 : count + 1;
    setCount(num);
    console.log(num == countLast.current, "set num", num, "last count:", countLast.current, "current:", null);
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
  //在多余刷新的时候,虽然虚拟dom重新计算,但是child并没有打印,说明子组件没有被更新
  console.log("I am child");
  return <div></div>;
}
export default Case1;
