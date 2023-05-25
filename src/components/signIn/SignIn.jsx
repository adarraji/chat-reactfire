import "./signIn.css";
import React from "react";
import { useAuth, useUser } from "reactfire";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
    const auth = useAuth();

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </>
    )
}

export default SignIn