import React from "react";
import styled from "styled-components";
import { Navbar, Container, Nav} from "react-bootstrap";

//page&img
import "./App.css";
import LogoImg from "./assets/leafs.jpg";



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
  background-image: url(${LogoImg});
  background-size: cover;
  background-position: center;
`;
/*
styled-components 에 img넣는 법 

*/





export default App;
