import Case1 from "./case1";
import Case2 from "./case2";
import Case3 from "./case3";

function DemoUseReducer() {
  //https://github.com/facebook/react/issues/14994#issuecomment-618551379
  return (
    <div>
      Case1, The original version of useReducer: One more re-render with virtual DOM.
      <br />
      The Child virtual Dom Will not be re-render.
      <Case1></Case1>
      Case2, useMemo version: cache variable to saving calculations, Other behaviors remain consistent as Case1, Still
      one more refresh, and the Child virtual Dom Will not be re-render.
      <Case2></Case2>
      Case3, Custom hook version: Not excessive refresh, and exposed to stateRef.current to get current state.
      <Case3></Case3>
      <a href="https://github.com/facebook/react/issues/14994#issuecomment-618551379"> reference github issue </a>
    </div>
  );
}
export default DemoUseReducer;
