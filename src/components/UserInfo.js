import React, { useEffect, useState } from 'react';
import {useParams} from "react-redux";
import {useDispatch,useSelector} from "react-redux";
import fetchUsersAction from "../redux/Actions";



const UserInfo = () => {

    const {id} = useParams()

    const [user, setUser] = useSelector(state.UserReducer)
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false);
    useEffect(() => {
        dispatch(fetchUsersAction(id))
    }, []);
    console.log(user);

    return (
        <div >
            <img src="" alt=""/>
            <div>
                <h1>{userInfo?.name}</h1>
                <p>{userInfo.username}</p>
                <p>{userInfo.email}</p>
            </div>
          
        </div>
    );
};

export default UserInfo;