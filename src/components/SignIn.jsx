import React from 'react'

const SignIn = ({ signInWithGoogle }) => {
    return (
        <div>
            <button style={{ marginTop: '50vh' }} onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn
