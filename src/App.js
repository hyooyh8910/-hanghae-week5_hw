import React from "react";
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";

//page&img
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signin from "./Signin";





//react-bootstrap 에서 가져온 Navbar
function App() {
  /*
 <Route path="*" element={<div>없는 페이지입니다.돌아가</div>} />
 해주면 *이 설정 외의 모든 페이지 담당을 해서 404page를 만들 수 ㅇ
 
 nested router 개념도 알아야 함. 라우트 안의 라우트인 것 <outlet>이랑 같이 쓰임
 두 페이지 동시에 보여줄 수 ㅇ
  */




  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
        </Route>

        <Route path="*" element={<div>없는 페이지입니다.돌아가</div>} />
      </Routes>



    </>
   
    
  );
}








export default App;
