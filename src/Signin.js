import React from "react";

import { auth,db } from "./shared/firebase";
import { collection, addDoc } from "firebase/firestore";
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged } from "firebase/auth";

import app from "./shared/firebase"
import "./Button.css";

function Signin() {
    const id_ref = React.useRef();
    const name_ref = React.useRef();
    const pw_ref = React.useRef();

    //비동기 요청을 하므로 async await 사용
    const signupFB = async () => {
        //auth.createUserWithEmailAndPassword()로 가입 시키기
        const user = await createUserWithEmailAndPassword(
            auth, "devdev@aaa.com", "devdev123!"
        );
        console.log(user);

        const user_data = await addDoc(collection(db, "users"), {
            user_id: id_ref.current.value,
            name: name_ref.current.value,
        });
        console.log(user);
    }


    return (

        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh', flexDirection: 'column'
          }}>
            <h1><b>회원가입</b></h1>
            아이디 <br /> <input ref={id_ref}/><br />
            닉네임 <br /> <input ref={name_ref}/><br />
            비밀번호 <br /> <input ref={pw_ref}/><br />
            비밀번호 확인 <br />  <input ref={pw_ref}/> <br />
            <div>
                <button className="custom-btn btn-1" onClick={signupFB}>회원가입 하기</button>
            </div>


        </div>
    )
} 






export default Signin;