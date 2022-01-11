import React, { useState, useEffect, useRef, useMemo } from "react";

function Case2() {
  const [count, setCount] = useState(() => {
    console.log("init useState");
    return 0;
  });
  const countMemo = useMemo(() => {
    console.log("run count memo...");
    return count;
  }, [count]);

  const countLast = useRef(0);

  function handleClick() {
    const num = count == 2 ? 2 : count + 1;
    setCount(num);
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
