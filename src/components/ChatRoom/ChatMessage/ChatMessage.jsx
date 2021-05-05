import React from 'react'
import './ChatMessage.css'

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
                <img src={photoURL} alt="><" />
                <p>{text}</p>
            </div>

        </div >

    )
}

export default ChatMessage
