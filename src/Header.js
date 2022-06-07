import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

import { signOut } from "firebase/auth"
import { auth } from "./firebase";

import styled from "styled-components";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Avatar } from "@mui/material";

import MainImg from "./assets/leafs.jpg";
import "./Header.css"
import Write from "./Write";
import Login from "./Login";




function Header() {
  /*useNavigate로 멋들어진 html 태그 안에다가
  넣어서 페이지 이동해줄수 있는거임 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ 중요중요중요
  ? 근데 왜 이미지 파일이나 네브바에서는 안먹는지..ㅎ
  */
  const navigate = useNavigate();
 


  //이렇게 해주면 Redux store에 있던 state가 남음
  let a = useSelector((state)=>{return state})
  console.log(a.cat.name);  

 
  return (
    <>

      <div className="header">
        <div onClick={() => { navigate('/') }} className="header_left header_option--active" ><h1>
          MAGAZINE</h1>
          </div>
        <div className="header_center">
          <div className="header_option">
            <LoginIcon 
            onClick={() => { navigate('/login') }} fontSize="large" />
          </div>
          <div className="header_option">
            <AssignmentTurnedInIcon 
            onClick={() => {navigate('/signup')}} fontSize="large" />
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar />
            <h4>cat_sarang</h4>
          </div>
        </div>
      </div>
          
          {/* <Navbar className="header" bg="light" variant="light" sticky="top" alignItems= "left" justifyContent= "left">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }} ><h3><b>MAGAZINE</b></h3></Navbar.Brand>
          <Nav className="me-auto">
          
            <Nav.Link onClick={() => {navigate('/signin')}}><h5>회원가입</h5></Nav.Link>
            <Nav.Link onClick={() => { navigate('/login') }}><h5>로그인</h5></Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Outlet></Outlet>

      <MainPic onClick={() => { navigate('/') }} />

    </>
  )


}


function Header_2() {

  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div onClick={() => { navigate('/2') }} className="header_left header_option--active"><h1>
          MAGAZINE</h1>
        </div>
        <div className="header_center" style={{justifyContent: "right", marginRight: "20px"}} >
        <div className="header_option">
            <FeedOutlinedIcon
               onClick={() => { return navigate('/2/main')}} fontSize="large" />
          </div>
          <div className="header_option">
            <AddAlertOutlinedIcon
              onClick={() => { navigate('/2') }} fontSize="large" />
          </div>
          <div className="header_option">
            <LogoutOutlinedIcon
               onClick={() => { return navigate('/') , signOut(auth)}} fontSize="large" />
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar />
            <h4>cat_sarang</h4>
          </div>
        </div>
      </div>
        
      <Outlet></Outlet>


      {/* <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/2') }} ><h3><b>MAGAZINE</b></h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/2') }}><h5>알림</h5></Nav.Link>
            <Nav.Link onClick={() => { return navigate('/') , signOut(auth)}} ><h5>로그아웃</h5></Nav.Link>
            <Nav.Link onClick={() => { navigate('/2/main') }}><h5>메인페이지</h5></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet> */}

      {/* <MainPic onClick={() => { navigate('/') }} /> */}

    </>
  )


}





//styled-components
const MainPic = styled.div`
  height: 850px;
  background-image: url(${MainImg});
  background-size: cover;
  background-position: center;
`;

/*
styled-components 에 img넣는 법 
1. src 폴더내 assets 폴더 생성 2. 원하는 이미지 assets 폴더 내에 위치
3. 파일 불러오기 import LogoImg from "../assets/이미지이름.파일형식";
적용하기 
일단 파일을 임포트하고 import LogoImg from "./assets/leafs.jpg";
스타일 컴포넌트 내에서 background-image: url(${LogoImg}); 로 이미지 넣을 수 ㅇ
*/



export default Header;
export { Header_2 };
//한 파일에서 export default는 한번만 가넝한~
//그래서 export { Header_2 }; 해주면 다른 컴포넌트도 export 가넝한