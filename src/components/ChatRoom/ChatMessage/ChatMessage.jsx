import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({ message, auth, user }) => {
    const { text, uid, photoURL } = message

    let messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
    let date = message.createdAt && message.createdAt.toDate();

    console.log(auth.currentUser.displayName);
    return (
        <div className="test">
            <span className={`name ${messageClass}`}>
                {user.displayName !== null ? user.displayName : "Anon"}
            </span>
            <div className={`timeStamp ${messageClass}`}>
                <span>{date && date.toDateString()}</span>
                <span>{date && date.toLocaleTimeString()}</span>
            </div>
            <div className={`message ${messageClass}`}>
                <img src={photoURL} alt=' ><' />
                <p>{text}</p>
            </div>

        </div >

    )
}

export default ChatMessage
