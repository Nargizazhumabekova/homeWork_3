import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {
    divisionAction,
    inputNum1ChangeAction,
    inputNum2ChangeAction,
    minusAction,
    multiplicationAction,
    plusAction
} from "../redux/Actions";

function Main() {
    const {number,num1,num2}= useSelector(state => state.NumberReducer)


    const dispatch=useDispatch()
const inputNum1Change=(event)=>{
        dispatch(inputNum1ChangeAction(parseInt(event.target.value)));
}
const inputNum2Change=(event)=>{
        dispatch(inputNum2ChangeAction(parseInt(event.target.value)));
}
const plusNums=()=>{
        dispatch(plusAction(num1+num2))
}
 const minusNums=() =>{
         dispatch(minusAction(num1-num2))
 }

const multiplicationNums=() =>{
         dispatch(multiplicationAction(num1*num2))
 }
 const divisionNums=() =>{
         dispatch(divisionAction(num1/num2))
 }

    return (
    <div>
        <input type='number' value={num1} onChange={inputNum1Change}/>
         <input type='number' value={num2} onChange={inputNum2Change}/>
         <h1>{number}</h1>
        <button onClick={plusAction}>плюс</button>
        <button onClick={minusAction}>минус</button>
        <button onClick={multiplicationAction}>умножить</button>
        <button onClick={divisionAction}>разделить</button>
    </div>

)
}



export default Main