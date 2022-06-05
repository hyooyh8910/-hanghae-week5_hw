import React from "react";
import { auth,db } from "./shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, query, collection} from "firebase/firestore";



const Login = ()=>{
  
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
  /*
    const loginFB = async() => {
        console.log(id_ref.current.value, pw_ref.current.value);
        const user = await signInWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value
            );

            console.log(user);

            // const user_docs = await getDocs(query(
            //     collection(db,"users"), where("user_id", "==", user.user.email);
                   
            //     user_docs.forEach();
            // ));
    };
*/
    return (
<div>

    아이디(이메일) <br /> <input ref={id_ref} /><br/>
    비밀번호 <br /> <input ref={pw_ref} /><br/>
    <button >로그인</button>
</div>

    )
}


export default Login;