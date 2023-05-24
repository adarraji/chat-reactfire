import React from "react"
import { useAuth, useSigninCheck } from 'reactfire';
import SignIn from "../components/signIn/SignIn"
import SignOut from "../components/signOut/SignOut"
import ChatRoom from "../components/chatRoom/ChatRoom";


const Home = () => {
    const auth = useAuth();
    const { status, data: signInCheckResult } = useSigninCheck();
    console.log(signInCheckResult);
    return (
        <div>
            {
                !auth.currentUser ? <SignIn /> :
                    <div>
                        <SignOut />
                        <ChatRoom />
                    </div>
            }
        </div>
    )
}

export default Home