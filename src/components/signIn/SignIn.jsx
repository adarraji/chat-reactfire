import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = ({ auth }) => {

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}

export default SignIn