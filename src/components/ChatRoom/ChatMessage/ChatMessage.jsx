import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({ message, auth }) => {
    const { text, uid, photoURL } = message

    let messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    let date = message.createdAt && message.createdAt.toDate();
    console.log(message.createdAt.toDate())
    return (
        <div className="test">
            <div className={`message ${messageClass}`}>
                <img src={photoURL} alt='user' />
                <p>{text}</p>

            </div>
            <div className={`timeStamp ${messageClass}`}>
                <span>{date && date.toDateString()}</span>
                <span>{date && date.toLocaleTimeString()}</span>
            </div>
        </div >

    )
}

export default ChatMessage
