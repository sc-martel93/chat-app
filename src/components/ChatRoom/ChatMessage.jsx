import React from 'react'

const ChatMessage = (props, { auth }) => {
    const { text, uid, photoURL } = props.message

    // const messageClass = uid === auth.currentUser.id ? 'sent' : 'received'
    const messageClass = ''

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt='user' />
            <p>message: {text}</p>
        </div>
    )
}

export default ChatMessage
