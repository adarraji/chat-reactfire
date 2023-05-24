import React from "react"
import { useAuth } from 'reactfire';
import SignIn from "../components/signIn/SignIn"

const Home = () => {
    const auth = useAuth();
    return (
        <div>
            <SignIn auth={auth}/>
        </div>
    )
}

export default Home