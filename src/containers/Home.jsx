import React from "react"
import { useSigninCheck } from 'reactfire';
import SignIn from "../components/signIn/SignIn"

const Home = () => {
    // const auth = useAuth();
    // const { status, data: signInCheckResult } = useSigninCheck();
    // console.log(signInCheckResult);
    return (
        <div>
            <SignIn />
        </div>
    )
}

export default Home