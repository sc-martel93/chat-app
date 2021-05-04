import React, { useEffect } from 'react'

const SignIn = ({ signInWithGoogle }) => {


    useEffect(() => { window.scrollTo(0, 0) }, [])

    const styles = {
        color: "White",
        fontSize: "4rem",
        letterSpacing: "8px",
        marginTop: "150px",
        backgroundColor: "black",
        width: "100%"

    }
    return (
        <div>
            <h1 style={styles}>ChatBox</h1>
            <h3 style={{ color: "white" }}>Scott Martel</h3>
            <button style={{ marginTop: '20vh' }} onClick={signInWithGoogle}>Sign in with <i class="fab fa-google"></i>oogle</button>
        </div>
    )
}

export default SignIn
