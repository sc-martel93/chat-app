import React, { useState, useRef, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChatMessage from './ChatMessage/ChatMessage'
import './ChatRoom.css'

const ChatRoom = ({ firebase, firestore, auth, user }) => {
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, { idField: 'id' })
    const [formValue, setFormValue] = useState('')

    const top = useRef()
    const bottom = useRef()

    useEffect(() => {
        if (bottom.current !== null)
            setTimeout(() => { bottom.current.scrollIntoView({ behavior: 'smooth' }) }, 500);

        // clearTimeout()
    }, [])

    const SignOut = () => (
        auth.currentUser && (
            <button className="headerBtn" onClick={() => auth.signOut()}><i class="fas fa-sign-out-alt"></i></button>
        )
    )

    const sendMessage = async (e) => {
        e.preventDefault()
        if (formValue === "") return
        const { uid, photoURL } = auth.currentUser

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })


        setFormValue('')
        bottom.current.scrollIntoView({ behavior: 'smooth' })
    }

    const toTopOfPage = () => { top.current.scrollIntoView({ behavior: 'smooth' }) }
    const toBottomOfPage = () => { bottom.current.scrollIntoView({ behavior: 'smooth' }) }

    return (
        <div className="chatRoom">
            <header>
                <h1 className="chatRoom--title">ChatBox <i className="fas fa-air-freshener" /></h1>
                <div className="headerBtns">
                    <button className="headerBtn" onClick={() => toTopOfPage()} >
                        <i className="fas fa-chevron-up" />
                    </button>
                    <button className="headerBtn" onClick={() => toBottomOfPage()}>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <SignOut />
                </div>
            </header>

            <main>
                <div ref={top}></div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth} user={user} />)}
                <div ref={bottom}></div>
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={e => setFormValue(e.target.value)} />
                <button type="submit"><i className="fas fa-rocket" /></button>
            </form>
        </div>
    )
}

export default ChatRoom
