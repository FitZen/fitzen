import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Conversation = ({data, currentUserId}) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
;
        const stringWithoutQuotes = currentUserId.slice(1, -1)
        // console.log("hi",localStorage.getItem("userID"));
        // console.log("hey",currentUserId);
        const userId = data.members.find((id) => id !== stringWithoutQuotes);
        // console.log("check 2",userId);        

        const getUserData = async () => {
            try{
                const reqData = {
                    userId: userId,
                }
                // console.log("check 3",reqData);
                const res = await axios.get(`http://localhost:8000/api/users/details/${userId}`,{params: reqData});
                setUserData(res.data);
                // console.log(res.data.data.first_name);
            }catch(err){
                console.log(err);
            }            
        }
        getUserData();
    },[])

    
        
    return (
        <>
            <div className="follower conversation">
                <div>
                    {<div className="online-dot"></div>}
                   {userData && (
                    <img
                        src={`http://localhost:3000/Profile/${userData.data.profile_pic}`}
                        alt="Profile"
                        className="followerImage"
                        style={{ width: "50px", height: "50px" }}
                    />
                    )}
                    <div className="name" style={{fontSize: '0.8rem'}}>
                        <span>{userData ? `${userData.data.first_name} ${userData.data.last_name}` : "Loading..."}</span>
                        <span >online</span>
                    </div>
                </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </>
  )
}

export default Conversation