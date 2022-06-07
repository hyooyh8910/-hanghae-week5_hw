import React, { useEffect } from "react";

import { async } from "@firebase/util";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, auth, db } from "./firebase";

import styled from "styled-components";
import "./Button.css";


function Write() {
  //파일 미리볼 url을 저장해줄 state
  const [imageSrc, setImageSrc] = React.useState('');
  //firestore storage에 저장해두기위한 ref 
  const file_link_ref = React.useRef(null);
 
  
  //e는 이벤트 firebase랑 소통해야 하니까 async await 있어야함
  const uploadFB = async (e) => {

    //const user_doc = await addDoc(collection(어디 콜렉션에 ,어느 doc에 넣을거야), {넣을 데이터} )
    // const user_doc = await addDoc(collection(db, "users"), {
    //   image_url: file_link_ref.current?.url,
    // })
    console.log(e.target.files[0]);
    const arr = e.target.files[0] || [];
    console.log(arr[0]); 
    //파일 업로드하는 코드. 업로드 경로 설정해주는 것 어떤 위치에서 어떤 이름으로 저장해줄꺼니 를 ref 안에 써줌
    //`images/${e.target.files[0].name}` : images폴더 안에 e.target.files 0번째에 name이라는 이름을 가져온다 얘로 저장을 해준다.
    //ref로 다운로드 url을 가지고 옴
    const uploaded_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploaded_file);
    //여기서 이 코드로 ref를 통해 다운로드 유알엘을 갖고옴
    const file_url = await getDownloadURL(uploaded_file.ref)
    //다운로드 url 잘 가져와졌는지 콘솔에 찍어보기
    console.log(file_url);
    //url을 current에다가 넣어주도록함. 값을 보관
    file_link_ref.current = { url: file_url };
  };


  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <WriteDivBox style={{
      display: 'center', justifyContent: 'center', alignItems: 'center',
      width: '100vh', height: '80vh', flexDirection: 'column'
    }}>
      <h1 style={{ marginTop: '100px' }}><b>게시글 작성</b></h1>
      <WriteDiv style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '50%', height: '5px', marginLeft: '180px',
      }}>


        이미지 :  <input  type="file" onChange={(e) => {
        encodeFileToBase64(e.target.files[0]);
      }} />

      </WriteDiv>
      <div className="img_box">
        <div className="preview">
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </div>
      </div>

      <WriteDiv>
        게시글 내용<br />
        <Title_text>
          <textarea></textarea>
        </Title_text>
      </WriteDiv>
      <button onClick={uploadFB} className="custom-btn btn-5" >
        게시글 작성</button>
    </WriteDivBox>




  )
}

const WriteInput = () => {
  return null;
}
const WriteTextArea = () => {
  return null;
}

const WriteButton = () => {
  return null;
}


const WriteDivBox = styled.div`

display: flex;
justifyContent: center;
alignItems: center;
width: 100%;
padding:50px;
flexDirection: column;

margin-left: 300px;
margin-right: 30px;
margin-top: 30px;
margin-bottom: 10px;
border: 1px solid grey;
 

`;

const WriteDiv = styled.div`

 padding: 20px;
 padding-left: 30px;
 padding-right: 30px;
 margin-top: 50px;
 margin-bottom: 20px;
 margin-left: 40px;
 margin-right: 40px;
 display: center;

 

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
export { WriteInput, WriteButton, WriteTextArea };

// padding: 20px,
//  padding-left: 30px
//  margin-left: 50px
//  margin-top: 30px


/*
    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
  };
*/


{/* {fileImage && (
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
                  </div> */}