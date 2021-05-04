import React, { useRef, useEffect } from 'react'

const SignIn = ({ signInWithGoogle }) => {

    const top = useRef()

    useEffect(() => {
        if (top.current !== null)
            top.current.scrollIntoView({ behavior: 'smooth' })

        // clearTimeout()
    }, [])

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
            <div style={{ position: "absolute", top: "0" }} ref={top}></div>
            <h1 style={styles}>ChatBox</h1>
            <h3 style={{ color: "white" }}>Scott Martel</h3>
            <button style={{ marginTop: '20vh' }} onClick={signInWithGoogle}>Sign in with <i class="fab fa-google"></i>oogle</button>
        </div>
    )
}

export default SignIn
