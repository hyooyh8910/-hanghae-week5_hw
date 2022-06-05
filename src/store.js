import { configureStore, createSlice } from "@reduxjs/toolkit";



const catSlice = createSlice({
    name: "cat",
    initialState: {
        name: "사랑",
        age: 2,
    }
})







const store = configureStore({reducer: {
    cat : catSlice.reducer
}});




export default store;


















/*
//createSlice가 usestate의 역할을 해줌
let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let stock = createSlice({
    a: 'stock',
    initialState: [10,11,12]
})


//reducer에 등록을 해줘야 다른 컴포넌트에서 쓸 수 있음
export default configureStore({

    reducer: {
        user: user.reducer,
        stock: stock.reducer
    }
})
*/