import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../redux/Actions";
import User from "../components/User";


function UsersPage(){
    const dispatch=useDispatch()
    const {users}=useSelector(state=>state.UserReducer)

    useEffect(() => {import {UserReducer} from "../reducer/UserReducer";
dispatch(fetchUsersAction())
    }, []);
    console.log(users)
    return(
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {users.map(userInfo=><User userInfo={userInfo}/>)}
        </div>
    )
}
export default UsersPage