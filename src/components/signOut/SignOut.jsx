import React from "react"
import { useAuth } from 'reactfire';

const SignOut = () => {
    const auth = useAuth();
    return (
        <div>
            <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut