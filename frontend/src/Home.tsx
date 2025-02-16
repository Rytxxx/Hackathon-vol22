import { auth, provider } from "./firebase.tsx";
import { signInWithPopup, User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header"; // ヘッダーをインポート
import Mainpage from "./components/Mainpage"; // メインページをインポート
import TripPlanner from "./components/TripPlanner"; // 旅行プランナーをインポート

function Home() {
    const [user] = useAuthState(auth);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            {user ? (
                <>
                    <Header /> {/* ヘッダーを表示 */}
                    <UserInfo user={user} />
                    <Mainpage /> {/* メインページを表示 */}
                    <TripPlanner /> {/* 旅行プランナーを表示 */}
                    <SignOutButton />
                </>
            ) : (
                <SignInButton />
            )}
        </div>
    );
}

export default Home;

// Googleでサインイン
function SignInButton() {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Googleサインインに失敗しました:", error);
        }
    };

    return (
        <button 
            onClick={signInWithGoogle} 
            className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
            <p>Googleでサインイン</p>
        </button>
    );
}

// サインアウト
function SignOutButton() {
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("サインアウトに失敗しました:", error);
        }
    };

    return (
        <button 
            onClick={handleSignOut} 
            className="mt-4 bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition"
        >
            <p>サインアウト</p>
        </button>
    );
}

// ユーザー情報表示
function UserInfo({ user }: { user: User | null }) {
    if (!user) return null;

    return (
        <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
            {user.photoURL ? (
                <img src={user.photoURL} alt="ユーザー画像" className="w-12 h-12 rounded-full border" />
            ) : (
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <p>👤</p>
                </div>
            )}
            <div>
                <p className="font-semibold">{user.displayName || "ゲスト"}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>
        </div>
    );
}
