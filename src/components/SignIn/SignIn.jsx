import React from 'react'

const SignIn = ({ signInWithGoogle }) => {

    const styles = {
        color: "White",
        fontSize: "4rem",
        letterSpacing: "8px",
        marginTop: "150px"

    }
    return (
        <div>
            <h1 style={styles}>ChatBox</h1>
            <h3 style={{ color: "white" }}>Scott Martel</h3>
            <button style={{ marginTop: '20vh' }} onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn
