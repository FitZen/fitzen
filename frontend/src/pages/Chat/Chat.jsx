import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import { userChats } from '../../api/ChatRequests';
import axios from 'axios';
import Conversation from '../../components/Conversation';
import ChatBox from '../../components/ChatBox';
import { io } from 'socket.io-client';


const Chat = () => {

    const userId = localStorage.getItem('userID');
    const socket = useRef();

    const curUser = userId.slice(1, -1)
    // console.log("check 1",userId);
    const [chats, setChats] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null)
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);


    // Connect to Socket.io
    useEffect(() => {

        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", curUser);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
            // console.log(onlineUsers)
        });
    }, [userId]);


    //get the chat in chat section
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



    // sending msg to socket server
    useEffect(() => {
        if(sendMessage!==null){
            socket.current.emit('send-message', sendMessage)
        }
    }, [sendMessage])


    // recieving msg from socket server
    useEffect(() => {
        socket.current.on('receive-message', (data) => {
            console.log("anjana",data)
            setReceivedMessage(data)
        })
    }, [])


    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== curUser);
        const online = onlineUsers.find((user) => user.userId === chatMember);
        return online ? true : false;
    };


    return (
        <div className='Chat'>
            {/* Left Side */}
            <div className="Left-side-chat">
                <div className="Chat-container">                
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                            <div onClick={()=> setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={userId} online={checkOnlineStatus(chat)}/>        
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="Right-side-chat">
                {/* chat body */}
                <ChatBox chat={currentChat} currentUser = {userId} setSendMessage={setSendMessage} receivedMessage = {receivedMessage}/>
            </div>
        </div>
    )
}

export default Chat