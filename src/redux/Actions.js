import {types} from "./Types"

export function asyncFunctionAction(){
 return function (){
  setTimeout(()=>{
   alert("hello")
  },2000)
 }
}
function getUsersAction(users){
 return{
  type:types.users,
  payload:users
 }
}

export default function fetchUsersAction(id) {
 return async function(dispatch){
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/`)
  const data=await response.json()
  dispatch(getUsersAction(data))
 }
}

export function fetchUserOneInfo(id){
 return async function (){
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data=await response.json()
 }
}