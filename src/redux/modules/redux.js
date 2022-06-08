// widgets.js

// Actions 액션 타입들을 정해주는 부분

//서버에서 데이터를 가지고 오는 것
const LOAD = 'my-app/widgets/LOAD';
//생성하는 것. 추가하기 기능
const CREATE = 'FB/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

//초기값 설정 
const initialState = {
    list: ["a", "b", "c"],
};


// Action Creators
//액션 생성 함수. 액션 객체를 만들어줌

export function createFB(createFB) {
return { type: CREATE, createFB };
}

//type은 create고 widget 데이터를 받아서 return 해주는 액션에 넣어준다
//widget이 딕셔너리 안에 있는데 key값과 value로 찍혀있지 않은 이유는 똑같이 생겼기 때문 (js기능)
export function createWidget(widget) {
return { type: CREATE, widget };
}

export function updateWidget(widget) {
return { type: UPDATE, widget };
}

export function removeWidget(widget) {
return { type: REMOVE, widget };
}



// Reducer
//state에 값이 안들어온다면 {} 딕셔너리일거야. 라고 지정해줘서 undefined가 안뜨게함
//case문. 어떨때 뭐를 해. 여기서 리턴해주는 값이 새로운 상태값이 되는 것
//switch 뒤에 액션 타입을 지정해줘야함
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "FB/CREATE" : {
            const new_id_list= [...state.list, action.createFB];
        

            return {list : new_id_list};

        }
    default: return state;
    }
    }
    

// side effects, only as applicable
// e.g. thunks, epics, etc -> 미들웨어 중간다리를 어떻게 놓아라 라는 예제
export function getWidget () {
return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}