import React, { useEffect, useState } from 'react'
import './Chat.css'
import { userChats } from '../../api/ChatRequests';

const Chat = () => {

    const userId = localStorage.getItem('userID');
    // console.log(userId);

    const [chats, setChats] = useState([])

    useEffect(() => {
    const getChats = async () => {
        try {
            const { data } = await userChats(userId);
            setChats(data);
            console.log(data);
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
                    <div className="Chat-list">Conversations</div>
                </div>
            </div>

            {/* Right Side */}
            <div className="Right-side-chat">
                Right Side
            </div>
        </div>
    )
}

export default Chat