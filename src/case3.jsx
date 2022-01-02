import React, { useState, useLayoutEffect, useEffect, useRef, useMemo } from "react";

function useStateUpdate(initialState) {
  //用自定义hook来解决setState重复渲染的问题
  //https://github.com/facebook/react/issues/14994#issuecomment-618551379
  const [state, setState] = React.useState(initialState);
  const stateRef = React.useRef(state);
  const nextRef = React.useRef(null);

  React.useLayoutEffect(() => {
    stateRef.current = state;
    // debugger;
  });

  const updateState = React.useCallback((stateOrReducer) => {
    const nextState = typeof stateOrReducer === "function" ? stateOrReducer(stateRef.current) : stateOrReducer;

    if (stateRef.current !== nextState) {
      // debugger;
      setState(nextState);
      nextRef.current = nextState;
    }
  }, []);

  return [state, updateState, nextRef];
}

function Case2() {
  //useStateUpdate自定义hook解决多余渲染的问题,还暴露了state current状态
  const [count, setCount, countRef] = useStateUpdate(0);
  const countLast = useRef(0);

  function handleClick() {
    const num = count == 2 ? 2 : count + 1;
    setCount(num);
    console.log(num == countLast.current, "set num", num, "last count:", countLast.current, "current:", countRef.current);
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
    </div>
  );
}

export default Case2;
