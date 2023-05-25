import React from "react";
import { useAuth, useUser } from "reactfire";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
    const auth = useAuth();
    // const { status, data: user } = useUser();
    // console.log(user);
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }

    // if (status === "loading") {
    //     return <span>loading...</span>;
    // }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}

export default SignIn