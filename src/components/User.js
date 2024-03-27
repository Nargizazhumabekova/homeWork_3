function User({userInfo}){
    return(
        <div style={{width:'200px',height:'250px',border:'1px solid'}} >
            <img style {{width:'50px'}} alt="userIcon" src="https://avatars.mds.yandex.net/i?id=c1134b03cb73037b551f6ad70d9568ed8da374bd-10119783-images-thumbs&n=13"/>
            <div>
                 <h1>{userInfo?.name}</h1>
                <p>{userInfo.username}</p>
                <p>{userInfo.email}</p>
            </div>
        </div>
    )
}

export default User



/*function User({userInfo}){
    return(
        <div className='card' onClick={} => {window.location.assign('https://jsonplaceholder.typicode.com/users/');
};style={{width:'250px',height:'200px',border:'1 px solid'}}>
            <img style={{width:'50px'}}  alt="userIcon" src="https://avatars.mds.yandex.net/i?id=c008513c631a63de93f9b51065684f470168c9fc-10812837-images-thumbs&n=13"/>
            <div>
                <h1>{userInfo?.name}</h1>
                <p>{userInfo.username}</p>
                <p>{userInfo.email}</p>
            </div>
        </div>
    )


              }
export default User*/