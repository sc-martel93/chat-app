import React from 'react'
import './ChatMessage.css'
import anonUserPic from "../../../images/anonymous-user-icon.jpg"

const ChatMessage = ({ message, auth }) => {
    const { text, uid, photoURL, displayName } = message

    let messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
    let date = message.createdAt && message.createdAt.toDate();

    return (
        <div className="container">
            <span className={`name ${messageClass}`}>
                {displayName !== null ? displayName : "Anonymous"}
            </span>
            <div className={`timeStamp ${messageClass}`}>
                <span>{date && date.toDateString()}</span>
                <span>{date && date.toLocaleTimeString()}</span>
            </div>
            <div className={`message ${messageClass}`}>
                {photoURL ?
                    <img src={photoURL} alt="user" />
                    :
                    <img src={anonUserPic} alt="Anon" />
                }
                <p>{text}</p>
            </div>

        </div >

    )
}

export default ChatMessage
