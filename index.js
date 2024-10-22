import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from './MyApp';


//public폴더/ index.html의 id가 root인 <div>요소를 찾아와서 ReactDom 객체로 만들기
const root = ReactDOM.createRoot(document.getElementById('root'));

//ReactDom에 리액티 컴포넌트를 그려내기
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // [실습] 나만의 리액트 컴포넌트를 만들어 화면 구현해보기 - 별도의 .js에 만들어보기
  <MyApp></MyApp>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
