import React from "react";
import { Toast, Col, Row, Button } from "react-bootstrap";
import ToastHeader from 'react-bootstrap/ToastHeader'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { Icon } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import "./App.css";
import "./Button.css";

function Main() {
  const navigate = useNavigate();


  return (
    <div style={{ flexDirection: 'column' }}>
      
        <AddCircleOutlineOutlinedIcon onClick={() => {
        navigate('/2/write')
      }} fontSize="large" color="success" cursor="pointer"
      ></AddCircleOutlineOutlinedIcon>


     

      

    </div>
  )

}





// const styles = StyleSheet.create({
//   container: {
//     padding: 20
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   content: {
//     fontSize: 13,
//   }
// });

export default Main;



/*
const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
  
    return (
      <Row>
        <Col md={6} className="mb-2">
          <Button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
        <Col md={6} className="mb-2">
          <Button onClick={toggleShowB} className="mb-2">
            Toggle Toast <strong>without</strong> Animation
          </Button>
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );

    */