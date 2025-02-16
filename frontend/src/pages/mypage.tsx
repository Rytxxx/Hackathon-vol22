"use client";

import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
//import { useRouter } from "next/navigation";
import Header from "../components/Header"; // ヘッダーをインポート

const MyPage = () => {
    const [user] = useAuthState(auth);
    //const router = useRouter();

    return (
        <div>
            <Header />
            <div className="p-6 text-center">
                {user ? (
                    <>
                        <h2 className="text-2xl font-bold">マイページ</h2>
                        <UserInfo user={user} />
                        <SignOutButton />
                    </>
                ) : (
                    <>
                        <p className="mb-4">ログインが必要です</p>
                        <SignInButton />
                    </>
                )}
            </div>
        </div>
    );
};

export default MyPage;

// グーグルボタンでサインイン
function SignInButton() {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Googleサインインに失敗しました:", error);
        }
    };

    return (
        <button onClick={signInWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded">
            <p>グーグルでサインイン</p>
        </button>
    );
}

// サインアウト
function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        await auth.signOut();
        router.push("/"); // サインアウト後にホームへ遷移
    };

    return (
        <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
            <p>サインアウト</p>
        </button>
    );
}

// ユーザー情報を表示
function UserInfo({ user }: { user: any }) {
    return (
        <div className="mt-4">
            {user.photoURL ? (
                <img src={user.photoURL} alt="ユーザー画像" className="w-16 h-16 rounded-full mx-auto" />
            ) : (
                <p>画像がありません</p>
            )}
            <p className="mt-2">{user.displayName}</p>
        </div>
    );
}