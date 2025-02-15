import React from "react";
import {auth, provider} from "./firebase.tsx";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"

function Home() {
    const [user] = useAuthState(auth)

    return (
        <div>
            {user ? (
                <>
                    <UserInfo />
                    <SignOutButton />
                </>
            ) : (
                <SignInButton />
            )}
        </div>
    );
}

export default Home;

// グーグルボタンでサインイン
function SignInButton() {
    const signInWithGoogle = () => {
        // firebaseを使ってグーグルでサインイン
        signInWithPopup(auth, provider)
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>グーグルでサインイン</p>
        </button>
    )
}

// サインアウト
function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    )
}

function UserInfo() {
    return <div>
        <img src={auth.currentUser.photoURL} alt="" />
    </div>
}