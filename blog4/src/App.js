import React, {useEffect, useState} from "react";
import Counter from "./Counter";

function App() {

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
    //컴포넌트를 만들면 계속 안쓰고 적용 가능, 수정도 편리
  );
}

export default App;
