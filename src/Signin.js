import React from "react";

import { auth,db } from "./shared/firebase";
//firebase안의 collection은 doc들의 모음
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
        //값이 전부 말짱해! 라고 확인시켜주는 게 벨리데이션
        //id_ref.current.value값이 아무것도 없으면 false를 리턴해라는 뜻
        /*if(id_ref.current.value===""){
            return false;
        }
        */


        //auth.createUserWithEmailAndPassword()로 가입 시키기
        const user = await createUserWithEmailAndPassword(
            auth, 
            id_ref.current.value, 
            pw_ref.current.value
            
        );
        console.log(user);
        
        //const user_doc = await addDoc(collection(어디 콜렉션에 ,어느 doc에 넣을어야), {넣을 데이터} )
        const user_doc = await addDoc(collection(db, "users"), {
            user_id: user.user.email,
            name: name_ref.current.value,
        });
        //firebase에 잘 저장되어 있는지 콘솔로 찍어볼 수 ㅇ 이렇게 찍으면 파이어베이스에서 랜덤으로 설정한 고유값이 나옴
        console.log(user_doc.id);
    }


    return (

        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh', flexDirection: 'column'
          }}>
            <h1><b>회원가입</b></h1>
            아이디(이메일) <br /> <input ref={id_ref}/><br />
            닉네임 <br /> <input ref={name_ref}/><br />
            비밀번호 <br /> <input ref={pw_ref} /><br />
            비밀번호 확인 <br />  <input ref={pw_ref} type="password"/> <br />
            <div>
                <button className="custom-btn btn-1" onClick={signupFB}>회원가입 하기</button>
            </div>


        </div>
    )
} 






export default Signin;