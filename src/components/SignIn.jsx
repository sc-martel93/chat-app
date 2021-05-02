import React from 'react'

const SignIn = ({ signInWithGoogle }) => {
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn
