import React from "react"
import { useAuth, useSigninCheck } from 'reactfire';
import SignIn from "../components/signIn/SignIn"
import SignOut from "../components/signOut/SignOut"


const Home = () => {
    const auth = useAuth();
    const { status, data: signInCheckResult } = useSigninCheck();
    console.log(signInCheckResult);
    return (
        <div>
            {!signInCheckResult.signedIn ? <SignIn /> : <SignOut />}
        </div>
    )
}

export default Home