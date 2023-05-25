import React from "react"
import { useAuth } from 'reactfire';

const SignOut = () => {
    const auth = useAuth();

    const clearFirestoreCache = () => {
        const map = global.globalThis['_reactFirePreloadedObservables'];
        Array.from(map.keys()).forEach(
            (key) => key.includes('firestore') && map.delete(key),
        );
    };

    const handleClick = () => {
        auth.signOut();
        clearFirestoreCache();
    }

    return (
        <div>
            <button className="sign-out" onClick={handleClick}>Sign Out</button>
        </div>
    )
}

export default SignOut