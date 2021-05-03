import React from 'react'

const SignIn = ({ signInWithGoogle }) => {
    return (
        <div>
            <h1>Chat App</h1>
            <button style={{ marginTop: '35vh' }} onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn
