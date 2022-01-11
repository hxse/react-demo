import React, { useState, useRef, useLayoutEffect, useCallback } from "react";

function useStateUpdate(initialState) {
  //Solve Excess repeated re-rendering
  //https://github.com/facebook/react/issues/14994#issuecomment-618551379
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);
  const nextRef = useRef(state);

  useLayoutEffect(() => {
    stateRef.current = state;
  });

  const updateState = useCallback((stateOrReducer) => {
    const nextState = typeof stateOrReducer === "function" ? stateOrReducer(stateRef.current) : stateOrReducer;

    if (stateRef.current !== nextState) {
      setState(nextState);
      nextRef.current = nextState;
    }
  }, []);

  return [state, updateState, nextRef];
}
export default useStateUpdate;
