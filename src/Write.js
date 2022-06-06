import { async } from "@firebase/util";
import React,{useEffect} from "react";
import styled from "styled-components";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

import "./Button.css";
import { addDoc, collection } from "firebase/firestore";

function Write() {
    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = React.useState("");
    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
  };





    const file_link_ref = React.useRef(null);


    // const user_doc = await addDoc(collection(db, ))

    const uploadFB = async (e) => {
            console.log(e.target.files[0]);
            //파일 업로드하는 코드. 업로드 경로 설정해주는 것 어떤 위치에서 어떤 이름으로 저장해줄꺼니 를 ref 안에 써줌
            const uploaded_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`),
            e.target.files[0]
            );
            console.log(uploaded_file);

            const file_url = await getDownloadURL(uploaded_file.ref)
            console.log(file_url);
            //url을 current에다가 넣어주도록함. 값을 보관
            file_link_ref.current = { url : file_url};
    };


    return (
        <WriteDiv style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: 'auto', height: '100vh', flexDirection: 'column'
        }}>
            <h1 style={{marginTop: '100px' }}><b>게시글 작성</b></h1>
            <WriteDiv style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '50%', height: '5px', marginLeft: '180px',
        }}>
           
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto", height: '400px' }}
                  />
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />
                  </div>
           
            
            이미지 : <input onChange={uploadFB} type="file"  />
            </WriteDiv>
            <div className="img_box">
            <h4><b>미리보기</b></h4>
            </div>

            <WriteDiv>
                게시글 내용<br />
                <Title_text>
                    <textarea></textarea>
                </Title_text>
            </WriteDiv>
            <button onClick = {()=> uploadFB} className="custom-btn btn-5" >
            게시글 작성</button>
        </WriteDiv>




    )
}

const WriteDiv= styled.div`

 padding: 20px;
 padding-left: 30px;
 padding-right: 30px;
 margin-top: 20px;
 margin-bottom: 20px;
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