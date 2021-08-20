import React, {useEffect, useState} from "react";

function App() {

  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);

  useEffect(() => {
    console.log(count)
  }, [count,kossie]) //특정 event에만 작동하게 하고 싶으면 함수뒤에 인자로 넘겨준다.

  useEffect(() => {
    console.log('first rendering')
  }, []);//빈 array 넘겨주면 처음 rendering 됐을 때만 작동

  const increment = () => {
    setCount(count+1);
  };

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <button onClick={increment}>Click</button>
      <button onClick={()=> setKossie(kossie+1)}>Click1</button>
    </div>
  );
}

export default App;
