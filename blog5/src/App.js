import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter'

function App() {

  const [buttonName, setButtonName] = useState('클릭');
  const clickButton = () => {
    setButtonName('click');
  };// 클릭 -> click 변경 함수

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <Counter click = "click1"/>
      <Counter click = {buttonName}/> 
      <Counter/>
      <button onClick={clickButton}>click1</button>
    </div>
  );
}

export default App;

