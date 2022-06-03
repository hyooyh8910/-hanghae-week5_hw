import React from "react";
import styled from "styled-components";
import { Navbar, Container, Nav} from "react-bootstrap";

//page&img
import "./App.css";
import MainImg from "./assets/leafs.jpg";



//react-bootstrap 에서 가져온 Navbar
function App() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#내정보">내정보</Nav.Link>
            <Nav.Link href="#알림">알림</Nav.Link>
            <Nav.Link href="#회원가입">회원가입</Nav.Link>
            <Nav.Link href="#로그인">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <MainPic/>
    </>
   
    
  );
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





export default App;
