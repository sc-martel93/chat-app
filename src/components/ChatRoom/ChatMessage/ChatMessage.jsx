import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({ message, auth }) => {
    const { text, uid, photoURL } = message

    let messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    let date = message.createdAt && message.createdAt.toDate();

    return (
        <>
            <div className={`message ${messageClass}`}>
                <img src={photoURL} alt='user' />
                <p>{text}</p>

            </div>
            <div className="timeStamp">
                {date && date.toLocaleString()}
            </div>
        </>
    )
}

export default ChatMessage
