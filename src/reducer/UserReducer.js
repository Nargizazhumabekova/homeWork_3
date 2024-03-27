import {types} from "..redux/Types"
const initialState={
 users:[]
}
export default function usersReducer(state=initialState,action){

if(action.type===types.users){
    switch (action.type){
        case types.users:
            return {...state,users:action.payload}
        default:return state
    }
}

}