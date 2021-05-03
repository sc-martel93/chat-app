import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({ message, auth }) => {
    const { text, uid, photoURL } = message

    const messageClass = uid === auth.currentUser.id ? 'sent' : 'received'
    // const messageClass = ''

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt='user' />
            <p>message: {text}</p>
        </div>
    )
}

export default ChatMessage
