import React, { useEffect } from 'react'

import './SignIn.css'

const SignIn = ({ signInWithGoogle, signInAnon }) => {


    useEffect(() => { window.scrollTo(0, 0) }, [])

    const styles = {

    }
    return (
        <div>
            <h1 className="title">ChatBox</h1>
            <h3>Scott Martel</h3>
            <div className="buttons">
                <button
                    onClick={signInWithGoogle}>
                    Sign in with <i className="fab fa-google" />oogle
            </button>
                <button
                    onClick={signInAnon}>
                    Anonymous <i class="fas fa-theater-masks" />
                </button>
            </div>

        </div>
    )
}

export default SignIn
