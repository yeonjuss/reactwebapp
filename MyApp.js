// 리액트 라이브러리에 있는 것 중 Component 클래스를 import
import {Component} from 'react'
// React 클래스를 import
import React from 'react'
// css 문서 import
import './MyApp.css'
//src 폴더의 이미지파일을 js에서 사용하도록 객체로 import 해오기
import bazzi from './bazzi.jpg'

// 리액트는 Component라는 클래스를 상속한 클래스들이 화면을 그려낼 수 있음.
class MyApp extends Component{
    // 리액트의 컴포넌트가 화면에 보여줄 요소들을 그려내는 작업을 하는 render 메소드를 오버라이드하여 화면을 구현
    // 이 메소드안에서 화면에 보여줄 요소를 설계하고 이를 return해주면 화면에 보여짐

    render(){
        // return "Hello My App"
        // return "<h2>Hello My App</h2>"
        // let e= React .cloneElement('h2',{}, 'Hello React Element'); // 요소명,속성들,콘텐츠
        // return e

        // const h2= React.createElement('h2',{},'Hello React')
        // const p= React.createElement('p',{},'This is React element')
        
        // const div= React.createElement('div',{style:{margin:16}},h2,p)
        // return div

        // 위 명령형 언어 방식으로 요소들을 만드는 것이 짜증
        // 태그문을 사용하는 xml로 요소들을 만들어 리턴해주기
        //.js 문서안에서 xml 태그문을 인식할 수 있도록 하는 언어가 jsx 라는 언어

        // return(
        //     <div>
        //         <h2>Hello React JSX</h2>
        //         <p>This is element</p>
        // </div>

        // )

        //JSX 언어는 XML영역안에서는 JS변수 사용이나 함수호출이 가능함
        let name="sam"
        let type="text"

        // return(
        //     <div>
        //         <h2>Hello name</h2>
        //         {/* XML영역안에서는 {} JS 를 사용하는 영역 */}
        //         <h2>Hello {name}</h2>
        //         <input type='text'></input>
        //         <br></br>
        //         <input type={type}></input>

        //     </div>
        // )

        // 스타일 적용 살펴보기.. css 문서 적용하기 --import 
        // return (
        //     <div class='container'>
        //         <h2>
        //             Hello React CSS
        //         </h2>
        //         <p>This is paragragh element</p>
        //     </div>
        // )

        // 이미지 보여주기 .. 경로지정을 유의해서 실습
        return(
            <div className='container'>
                <h2>Hello React Image</h2>
                
                {/* 1) 이 js가 있는 src 폴더 안에 이미지 위치 -- src 폴더는 실제 build하면 다른경로로 변경됨*/}
                <img src='./bazzi.jpg' alt="이미지"></img>
                {/* 2) src 폴더의 이미지를 이 js안으로 import 안에서  */}
                <img src='{bazzi}' alt="파리 이미지"></img>
                {/* 3) publi폴더의 이미지를 그냥 경로 사용가능함 -- 이 .js 문서는 결국 index.html */}
                <img src='./paris.jpg' alt="파리 이미지"></img>
                {/* 외부 다른 서버의 이미지를 보여줄 수도 있음 */}

            </div>
        )

        // 제작한 React webapp 프로젝트를 웹서버(닷홈, GitHub page)에 배포하기
        // 프로젝트를 빌드하여 업로드할 파일들 만들기 ! [. js 문서들이 통합되어 index.html에]
        // Terminal에서 npm run build 하면.. 통합본을 만들어서 [build 폴더]가 자동으로 생성
        //  이 안에 파일들만 업로드 하면 됨  
    }

}

// MyApp클래스를 다른 문서에서 사용하려면 export 해줘야 함
export default MyApp