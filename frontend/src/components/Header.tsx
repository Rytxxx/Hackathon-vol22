"use client";  // これを追加

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Search, Map, Calendar } from "lucide-react";
import router from "next/router";

const Header: React.FC = () => {
  //const router = useRouter();  // `useRouter` の定義
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 上段：ロゴとマイページ */}
      <div className="bg-orange-400 text-white px-6 py-3 flex justify-between items-center">
        <h1 className="text-3xl italic font-[cursive]">Trip-le</h1>
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl" onClick={() => router.push("/mypage")} />
          <span className="text-sm">マイページ</span>
        </div>
      </div>
      
      {/* 下段：ナビゲーション */}
      <nav className="bg-white text-gray-500 flex justify-center py-2 shadow-md">
        <div className="flex w-full max-w-3xl justify-around text-lg">
          <button className="flex items-center gap-1" onClick={() => router.push("/search")}>
            <Search size={20} />検索
          </button>
          <span className="text-gray-400">|</span>
          <button className="flex items-center gap-1" onClick={() => router.push("/routes")}>
            <Map size={20} />ルート
          </button>
          <span className="text-gray-400">|</span>
          <button className="flex items-center gap-1" onClick={() => router.push("/reservations")}>
            <Calendar size={20} />予約確認
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

