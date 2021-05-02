import './App.css';
import SignIn from './components/SignIn'
import ChatRoom from './components/ChatRoom'

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
function App() {
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
