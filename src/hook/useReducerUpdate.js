import React, { useRef, useReducer, useLayoutEffect, useCallback } from "react";

function useReducerUpdate(reducer, initialState, init) {
  //Solve Excess repeated re-rendering
  //https://github.com/facebook/react/issues/14994#issuecomment-618551379
  const [state, dispatch] = useReducer(
    (state, action) => action,
    // typeof init === "function" ? init(initialState) : initialState
    initialState,
    init
  );
  const stateRef = useRef(state);
  const nextRef = useRef(state);

  useLayoutEffect(() => {
    stateRef.current = state;
  });

  const updateState = useCallback((action) => {
    const nextState = reducer(stateRef.current, action);

    if (stateRef.current !== nextState) {
      dispatch(nextState);
      nextRef.current = nextState;
    }
  }, []);

  return [state, updateState, nextRef];
}
export default useReducerUpdate;
