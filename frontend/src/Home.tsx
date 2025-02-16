import { auth, provider } from "./firebase.tsx";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header";  // ヘッダーをインポート
import Mainpage from "./components/Mainpage";  // メインページをインポート
import TripPlanner from "./components/TripPlanner";  // 旅行プランナーをインポート

function Home() {
    const [user] = useAuthState(auth);

    return (
        <div>
            {user ? (
                <>
                    <Header />  {/* ヘッダーを表示 */}
                    <Mainpage />  {/* メインページを表示 */}
                    <TripPlanner />  {/* 旅行プランナーを表示 */}
                    <UserInfo user={user} />
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
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Googleサインインに失敗しました:", error);
        }
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>グーグルでサインイン</p>
        </button>
    );
}

// サインアウト
function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    );
}

// ユーザー情報を表示
function UserInfo({ user }: { user: any }) {
    return (
        <div>
            {user.photoURL ? (
                <img src={user.photoURL} alt="ユーザー画像" />
            ) : (
                <p>画像がありません</p>
            )}
        </div>
    );
}
