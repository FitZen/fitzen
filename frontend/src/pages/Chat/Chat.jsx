import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import { userChats } from '../../api/ChatRequests';
import axios from 'axios';
import Conversation from '../../components/Conversation';
import ChatBox from '../../components/ChatBox';
import { io } from 'socket.io-client';

const Chat = () => {

    const userId = localStorage.getItem('userID');

    const curUser = userId.slice(1, -1)
    // console.log("check 1",userId);
    const [chats, setChats] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null)
    const socket = useRef();


    useEffect(() => {
        console.log("check 1",curUser);
        console.log("check 2",userId)
        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", userId);
        socket.current.on("get-users", (users) => {
        setOnlineUsers(users);
        console.log(onlineUsers)
    });
  }, [userId]);

    //userId: JSON.parse(localStorage.getItem('userID')),

    useEffect(() => {
    const getChats = async () => {
        const reqData = {
            userId: JSON.parse(localStorage.getItem('userID')),
        }
        try {
            // const { data } = await userChats(userId);
            const res= await axios.get(`http://localhost:8000/api/chat/${userId}`,{params: reqData});
            setChats(res.data);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        };
        getChats();
    },[userId]);

    return (
        <div className='Chat'>
            {/* Left Side */}
            <div className="Left-side-chat">
                <div className="Chat-container">                
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                            <div onClick={()=> setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={userId}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="Right-side-chat">
                {/* chat body */}
                <ChatBox chat={currentChat} currentUser = {userId}/>
            </div>
        </div>
    )
}

export default Chat