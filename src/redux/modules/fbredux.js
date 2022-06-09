// fbredux.js
import { db } from "../../firebase";

//crud 할때 import 해오는 함수들
import { 
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";




// Actions 액션 타입들을 정해주는 부분

//서버에서 데이터를 가지고 오는 것
const LOAD = 'FB/LOAD';
//생성하는 것. 추가하기 기능
const CREATE = 'FB/CREATE';
const UPDATE = 'FB/UPDATE';
const REMOVE = 'FB/REMOVE';

//초기값 설정 
const initialState = {
    list: ["a", "b", "c"],
};


/*Action Creators*/
//액션 생성 함수. 액션 객체를 만들어줌

//type은 create고 widget 데이터를 받아서 return 해주는 액션에 넣어준다
//widget이 딕셔너리 안에 있는데 key값과 value로 찍혀있지 않은 이유는 똑같이 생겼기 때문 (js기능)
export function loadFB(fbredux) {
    return {type: LOAD, fbredux}
}

export function createFB(fbredux) {
return { type: CREATE, fbredux };
}

export function updateFB(fbredux) {
return { type: UPDATE, fbredux };
}

export function removeFB(fbredux) {
return { type: REMOVE, fbredux };
}




/*middlewares*/
//인자로 dispatch를 받아옴
//비동기 통시이므로 async
//"users"는 fb안에서의 컬렉션 이름
//getDocs로 한 컬렉션 안의 데이터를 다 불러오기 가넝
export const loadFbreduxdFB = () => {
    return  async function(dispatch){
        const user_data = await getDocs(collection(db, "users"));
        let user_list = [];


        //컬렉션 안의 도큐먼트 하나하나가 doc에 들어감
        user_data.forEach((doc)=>{
            console.log(doc.data());
            // user_list = [...user_list, {...doc.data}]
            user_list.push({id:doc.id, ...doc.data()});

        });
        console.log(user_list);
        dispatch(loadFB(user_list));
    }
};

export const addFbreduxdFB = (fbredux) => {
    return async function (dispatch) {
        //어느 컬렉션에 추가해줄지 경로, 추가해줄 것
        const docRef = await addDoc(collection(db, "users"), fbredux);
        // console.log(docRef.getDoc(docRef()));
    }
}


/* Reducer*/
//state에 값이 안들어온다면 {} 딕셔너리일거야. 라고 지정해줘서 undefined가 안뜨게함
//case문. 어떨때 뭐를 해. 여기서 리턴해주는 값이 새로운 상태값이 되는 것
//switch 뒤에 액션 타입을 지정해줘야함
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "FB/LOAD" : {
            return {list : action.user_list};

        }
    default: return state;
    }
    }
    

// side effects, only as applicable
// e.g. thunks, epics, etc -> 미들웨어 중간다리를 어떻게 놓아라 라는 예제
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }