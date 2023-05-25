import React from "react";
import "./home.css";
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
        <div className="Home">
            <header className="Home-hea">
                <h1>💬</h1>
                <SignOut />
            </header>
            <section>
                {signInCheckResult.signedIn ? <ChatRoom /> : <SignIn />}
            </section>
        </div >
    )
}

export default Home