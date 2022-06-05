import React from "react";
import styled from "styled-components";

import "./Button.css";

function Write() {

    return (
        <WriteDiv style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: 'auto', height: '100vh', flexDirection: 'column'
        }}>
            <h1><b>게시글 작성</b></h1>
            <h4><b>미리보기</b></h4>


            <WriteDiv>
                게시글 내용<br />
                <Title_text>
                    <textarea></textarea>
                </Title_text>
            </WriteDiv>
            <button className="custom-btn btn-5" >
            게시글 작성</button>
        </WriteDiv>




    )
}

const WriteDiv= styled.div`

 padding: 20px;
 padding-left: 30px;
 padding-right: 30px;
 margin-top: 30px;
 margin-left: 40px;
 margin-right: 40px;
 display: center;
 background-color: #eee;

`;

const Title_text = styled.text`
width: 87%;
padding-bottom: 30px;
border: none;
font-size: 22px;
border-bottom: solid 1px #ababab;
font-weight: bold;
`;





export default Write;

// padding: 20px,
//  padding-left: 30px
//  margin-left: 50px
//  margin-top: 30px