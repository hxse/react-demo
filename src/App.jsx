import React, { useState, useLayoutEffect, useEffect, useRef, useMemo } from "react";
import Case1 from "/src/case1";
import Case2 from "/src/case2";
import Case3 from "/src/case3";

function App() {
  return (
    <div>
      <div>
        case1是最原始的版本,useState会多余刷新一次虚拟dom,多刷新一次意味着重新计算一次虚拟dom(所以会打印render),但是子组件虚拟dom不会被计算(所以不会打印"I
        am child")
        <Case1></Case1>
        case2是采用了useMemo的版本,虽然还会多余刷新一次虚拟dom,但是可以在useMemo里缓存变量,节省开销
        <Case2></Case2>
        case3是自定义hook版本,不仅解决了多余刷新一次的问题,还暴露了一个stateRef.current来表示当前state的状态
        <Case3></Case3>
      </div>
    </div>
  );
}

export default App;
