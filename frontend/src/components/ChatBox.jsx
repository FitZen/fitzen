import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../pages/Chat/ChatBox.css'
import {format} from 'timeago.js'
import InputEmoji from "react-input-emoji";

const ChatBox = ({chat, currentUser, setSendMessage, receivedMessage }) => {

    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const currentChatUser = currentUser.slice(1, -1);



    const handleChange = (newMessage) => {
      setNewMessage(newMessage);
    }


    //fetching data for header
    useEffect(() => {
                const stringWithoutQuotes = currentUser.slice(1, -1)
                // console.log("hi",localStorage.getItem("userID"));
                // console.log("hey",currentUser);
                // console.log("hi",stringWithoutQuotes);
                // console.log("check 5",chat);
                const userId = chat?.members?.find((id) => id !== stringWithoutQuotes);
                // console.log("check 2", userId);
                const getUserData = async () => {
                    try{
                        const reqData = {
                            userId: userId,
                        }
                        // console.log("check 3",reqData);
                        const res = await axios.get(`http://localhost:8000/api/users/details/${userId}`,{params: reqData});
                        setUserData(res.data);
                        // console.log(res.data);
                    }catch(err){
                        console.log(err);
                    }            
        };
        if(chat!==null) getUserData();
    },[chat, currentUser])




    useEffect(() => {
        const fetchMessages = async () => {

            // console.log("check 4",chat._id);
            try {
                const reqData = {
                    chatId: chat._id,
                }
                const res2 = await axios.get(`http://localhost:8000/api/message/${chat._id}`, {params: reqData});
                setMessages(res2.data);
                // console.log(res2.data);
            } catch (error) {
                console.log(error);
            }
        };
        if(chat!==null) fetchMessages();
    }, [chat])




    //Receive message from parent component
    useEffect(() => {
      if(receivedMessage!==null && receivedMessage?.chatId === chat?._id){
        console.log("Data received in ChildBox", receivedMessage);
        setMessages([...messages, receivedMessage])
      }
    }, [receivedMessage])

    
    
    const handleSend = async(e)=> {
        e.preventDefault()
        const message = {
        senderId : currentChatUser,
        text: newMessage,
        chatId: chat._id,

        }        
        // send msg to socket server
        const receiverId = chat.members.find((id) => id !== currentChatUser);
        // const SliceReceverId = receiverId.slice(1, -1);
        console.log("check 6",receiverId);
        setSendMessage({...message, receiverId})

        try {
          // const { data } = await addMessage(message);
          const { data } = await axios.post("http://localhost:8000/api/message", message);
          setMessages([...messages, data]);
          setNewMessage("");
        }
        catch
        {
          console.log("error")
        }
    }   

  return (
    <>
        <div className="ChatBox-container">
          {chat? (<>
            <div className="chat-header">
              <div className="follower">
                <div>
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
                    </div>
                </div>
              </div>
              <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
            </div>
            {/* chatBox messages */}
            <div className="chat-body">
                {messages.map((message) => (
                  <>
                    <div 
                      className={message.senderId === currentChatUser ? "message own" : "message"}
                    >   
                        <span>{message.text}</span>
                        <span>{format(message.createdAt)}</span>
                    </div>
                  </>
                ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div>+</div>
              <InputEmoji
                value = {newMessage}
                onChange={handleChange}
              />
              <div className="send-button button " onClick={handleSend}>Send</div>
              {/* <div className="send-button button ">Send</div> */}
            </div>
          </>):(
            <span className='chatbox-empty-message'>Tap on a Chat to start Conversation...</span>
          )}
          
        </div>
    </>
  )
}

export default ChatBox