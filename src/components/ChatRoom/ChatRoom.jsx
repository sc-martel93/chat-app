import React, { useState, useRef } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChatMessage from './ChatMessage/ChatMessage'
import './ChatRoom.css'

const ChatRoom = ({ firebase, firestore, auth, SignOut }) => {
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, { idField: 'id' })
    const [formValue, setFormValue] = useState('')

    const dummy = useRef()

    const sendMessage = async (e) => {
        e.preventDefault()

        const { uid, photoURL } = auth.currentUser

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="chatRoom">
            <header>
                <h1 className="chatRoom--title">Chat Room</h1>
                <SignOut />
            </header>

            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
                <div ref={dummy}></div>
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={e => setFormValue(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatRoom
