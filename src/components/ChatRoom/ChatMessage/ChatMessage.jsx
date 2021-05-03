import React, { useEffect } from 'react'
import './ChatMessage.css'

const ChatMessage = ({ message, auth }) => {
    const { text, uid, photoURL } = message

    let messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt='user' />
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
