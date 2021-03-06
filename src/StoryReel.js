import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {createFB, loadFB, loadFbreduxdFB, addFbreduxdFB} from "./redux/modules/fbredux"

import Story from './Story';
import "./StoryReel.css";
import { catSlice } from './store';
import { formControlLabelClasses } from '@mui/material';



const StoryReel =() => {
    const text_ref = React.useRef();
    const addCat = () => {
        console.log(text_ref.current.value);
    }
   

    const dispatch = useDispatch();
    //어떤 데이터를 가지고 오고 싶은지 useSelector((스토어가 갖고 있는 전체 데이터 ) => 리턴되는 값)
    const data =useSelector( (state) => state );
    console.log(data);

    const addUserList = ()=>{
//스프레드 문법. 원본 배열 list에 새로운 요소 추가
        // dispatch(createFB({text: text.current.value, completed: false}));
        dispatch(addFbreduxdFB({
            text: text_ref.current.value, completed: false
        }))
    }

   

    React.useEffect (() => {
        dispatch(loadFbreduxdFB());
    },[]);

    return (
        <>
       <button onClick={addCat}>add</button>
        <input ref={text_ref}/>

        <div className='storyrReel'>
        

            <Story
            image="https://dimg.donga.com/wps/ECONOMY/IMAGE/2019/04/19/95135722.2.jpg"
            profileSrc="https://yt3.ggpht.com/ytc/AKedOLSRp4jc6CkJOCAzqIVCg3Q9LDpbgknA2ipTCxgiOQ=s900-c-k-c0x00ffffff-no-rj"
            title="cat_쫀떡"/>
            <Story
            image="https://cdn.inflearn.com/public/files/blogs/4299d3ec-e6ee-4c2f-b058-33a52db8cf0b/IMG_2019.jpg"
            profileSrc="https://bunny.jjalbot.com/2022/02/d8RfM5c0g.jpeg"
            title="cat_쫀떡"/>
            <Story
            image="http://image.fmkorea.com/files/attach/new/20170829/486616/195062491/758905945/01ea1453b1cf178da993d5eca7c2adf8.gif"
            profileSrc="data:image/jpeg;base64,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"
            title="cat_쫀떡"/>
            <Story
            image="https://cdn.maily.so/hhdt6moxu9tapxhwwt6g6dsd08ii"
            profileSrc="https://yt3.ggpht.com/ytc/AKedOLSRp4jc6CkJOCAzqIVCg3Q9LDpbgknA2ipTCxgiOQ=s900-c-k-c0x00ffffff-no-rj"
            title="cat_쫀떡"/>

        </div>
        </>
    )
}

export default StoryReel