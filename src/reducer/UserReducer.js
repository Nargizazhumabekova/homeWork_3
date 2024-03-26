import {types} from "../Types"
const initialState={
 users:[]
}
export default function titleReducer(state=initialState,action){

if(action.type===types.users){
    switch (action.type){
        case types.users:
            return {...state,users:action.payload}
        default:return state
    }
}

}