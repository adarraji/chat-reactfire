import React from "react"
import { useAuth, useSigninCheck } from "reactfire";
import SignIn from "../components/signIn/SignIn"
import SignOut from "../components/signOut/SignOut"
import ChatRoom from "../components/chatRoom/ChatRoom";

const Home = () => {

    const { status, data: signInCheckResult } = useSigninCheck();

    if (status === "loading") {
        return <span>loading...</span>;
    }

    return (
        <div>
            {
                signInCheckResult.signedIn
                    ? <div>
                        <SignOut />
                        <ChatRoom />
                    </div>
                    : <SignIn />
            }
        </div >
    )
}

export default Home