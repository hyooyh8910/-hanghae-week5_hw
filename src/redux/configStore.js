import { createStore, combineReducers } from 'redux';
import createFB from "./modules/redux";


//rootReducer는 내가 갖고 있는 reducer들의 모음
//combineReducers가 리듀서들을 묶어주는 역할
const rootReducer = combineReducers({createFB});

const store = createStore(rootReducer);

export default store;
