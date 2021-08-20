import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] =  useState(["강남역 맛집 1", "양식"]);
  let [글제목2, 글제목변경2] = useState(["강남역 맛집 2", "대창덮밥"]);

  let [따봉, 따봉변경] = useState(0);

  let posts = '강남 고기 맛집';

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[1] = 'yangsik';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'blue', fontSize: '30px'}}>개발 Blog</div>
      </div>
      <button onClick = {제목바꾸기}>버튼</button>
      <div className="list">
        <h3>{글제목[1]} <span onClick = {() => {따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div> 
      <div className="list">
        <h3>{글제목2[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
