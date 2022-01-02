import React, { useState, useLayoutEffect, useEffect, useRef, useMemo } from "react";

function Case2() {
  const [count, setCount] = useState(0);
  const countMemo = useMemo(() => {
    //用memo是为了避免在bailing out时再计算一遍
    //但是这种解决方案依然还会重新渲染一次,虽然用了useMemo可以节省开销
    //https://github.com/facebook/react/issues/14994
    console.log("run count memo...");
    return count;
  }, [count]);

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
      {countMemo}
    </div>
  );
}

export default Case2;
