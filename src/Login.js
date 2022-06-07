import React from "react";
import { auth,db } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, query, collection} from "firebase/firestore";


import "./Button.css";



const Login = ()=>{

  
    const id_ref = React.useRef();
    const pw_ref = React.useRef();
  
    const loginFB = async() => {
       

        signInWithEmailAndPassword(auth, id_ref.current.value, pw_ref.current.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert("로그인 성공")
                window.location.href="/2/main"

                // ...
            })
            .catch((error) => {
                alert("돌아가 틀렸어")
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        // console.(id_ref.current.value, pw_ref.current.value);
        // const user = await signInWithEmailAndPassword(
        //     auth,
        //     id_ref.current.value,
        //     pw_ref.current.value
        //     );

        //     console.log(user);

            // const user_docs = await getDocs(query(
            //     collection(db,"users"), where("user_id", "==", user.user.email);
                   
            //     user_docs.forEach();
            // ));
    };

    return (
<div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', padding:'50px', flexDirection: 'column'
    }}>
     <h1><b>LOG_IN</b></h1><br/>
    아이디(이메일) <br /> <input ref={id_ref} /><br/>
    비밀번호 <br /> <input ref={pw_ref} /><br/>
     {/* onClick={() => history.push('/main')} */}
    {/* <button  onClick={() => history.push('/main')} className="custom-btn btn-1" >로그인</button> */}
    <button onClick={loginFB} className="custom-btn btn-1" >로그인</button>
</div>

    )
}


export default Login;