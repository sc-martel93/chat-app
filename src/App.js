import { useState, useRef } from 'react'
import './App.css';
import SignIn from './components/SignIn'


import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAWyvUoCqJIFfQ7emDC8lowSinAmCrgH6w",
  authDomain: "chat-app-cd6c7.firebaseapp.com",
  projectId: "chat-app-cd6c7",
  storageBucket: "chat-app-cd6c7.appspot.com",
  messagingSenderId: "49799691310",
  appId: "1:49799691310:web:1581c7e1c7424a4a95f3bf",
  measurementId: "G-P7GYL1KC3K"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const firestore = firebase.firestore()

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}
const SignOut = () => (
  auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
)

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message

  const messageClass = uid === auth.currentUser.id ? 'sent' : 'received'

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='user image' />
      <p>message: {text}</p>
    </div>
  )
}



const ChatRoom = () => {
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
    <>
      <h1>Chat Room</h1>
      <SignOut />
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={e => setFormValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn signInWithGoogle={signInWithGoogle} />}

      </section>
    </div>
  );
}

export default App;
