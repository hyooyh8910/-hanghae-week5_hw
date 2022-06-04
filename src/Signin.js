import React from "react";

import { auth } from "./shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signin() {

    //비동기 요청을 하므로 async await 사용
    const signup = async () => {
        const user = await createUserWithEmailAndPassword(auth, "devdev@aaa.com", "devdev123!");
        console.log(user);
    }


    return (
        
        <div>
            <button onClick={signup}>회원가입</button>
        </div>
    )
} 






export default Signin;