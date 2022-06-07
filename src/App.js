import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { Route, Routes } from "react-router-dom";

//page&img
import "./App.css";
import Header, { Header_2 } from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";
import Write from "./Write";
import { WriteInput, WriteButton, WriteTextArea } from "./Write";



function App() {
  /*
 <Route path="*" element={<div>없는 페이지입니다.돌아가</div>} />
 해주면 *이 설정 외의 모든 페이지 담당을 해서 404page를 만들 수 ㅇ
 
 nested router 개념도 알아야 함. 라우트 안의 라우트인 것 <outlet>이랑 같이 쓰임
 두 페이지 동시에 보여줄 수 ㅇ
  */

  const auth = getAuth();
  const user = auth.currentUser;
 
 //로그인 했을때의 화면과 아닐때의 화면 구분하기
  const [isLogin, setIsLogin]= useState(false);
//지금 로그인되어 있는 상태인지 확인
// firestore 연결되어 null 뜸


  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;

    console.log(uid);
  }
 

  //어떤식으로 로그인체크할건지 함수 만들어서 useEffect안에 넣어줌
  //user를 가지고 와서 유저가 있으면 setIsLogin을 true로 반환하고 else면 flase를 반환해라
  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };




  // const logout = () => {
  //   signOut(auth).then(() => {
  //     setIsLogin(false);
  //   });
  // };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);



  return (
    
      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {isLogin ? (
           <Route path="/2" element={<Header_2 />} >
           <Route path="main" element={<Main />} />
           <Route path="write" element={<Write />} />
           
         </Route>

        ) : (
          <Route path="/" element={<Header />} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          
        </Route>
      )}

      {/* <Route path="/2" element={<Header_2 />} >
        <Route path="main" element={<Main />} />
        <Route path="write" element={<Write />} />
      </Route> */}
      {/* <Route path="*" element={<div><b>없는 페이지입니다.돌아가</b></div>} /> */}
    </Routes>


    


  );
}




// <Routes>
// <Route path="/" element={<Header />} >
//   <Route path="login" element={<Login />} />
//   <Route path="signin" element={<Signin />} />
// </Route>

//  {isLogin ? (
//    <Route path="/signin" element={<Signin />} />

//   ) : (
//     <Route path="/login" element={<Login />} />
//   )}
// {/* 
// <Route path="/2" element={<Header_2 />} >
//   <Route path="main" element={<Main />} />
//   <Route path="write" element={<Write />} />
// </Route> */}
// <Route path="*" element={<div><b>없는 페이지입니다.돌아가</b></div>} />
// </Routes>



export default App;
