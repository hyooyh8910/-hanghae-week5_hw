import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import fbredux from "./modules/fbredux";
import thunk from "redux-thunk";



//미들웨어 엮어주기. 내가 쓰는 미들웨어는 thunk니까 선언해줍니다.
const middlewares = [thunk];
//미들웨어 외에 옵셔널하게 추가해주는 것들 ...은 풀어헤쳐서 넣어주겠다.
const enhancer = applyMiddleware(...middlewares);

//rootReducer는 내가 갖고 있는 reducer들의 모음
//combineReducers가 리듀서들을 묶어주는 역할
const rootReducer = combineReducers({fbredux});
const store = createStore(rootReducer, enhancer);

export default store;
