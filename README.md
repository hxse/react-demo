# react-demo

* Case1, The original version of useReducer: One more re-render with virtual DOM.
  The Child virtual Dom Will not be re-render.

* Case2, useMemo version: cache variable to saving calculations, Other behaviors remain consistent as Case1, Still one more refresh, and the Child virtual Dom Will not be re-render.

* Case3, Custom hook version: Not excessive refresh, and exposed to stateRef.current to get current state.

* <a href="https://github.com/facebook/react/issues/14994#issuecomment-618551379"> reference github issue </a>
