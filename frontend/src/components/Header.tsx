import React from "react";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-orange-400 text-white px-6 py-3 border-t-4 border-b-4 border-[#4a90e2]">
      {/* ロゴ */}
      <h1 className="text-3xl italic font-[cursive]">Trip-le</h1>

      {/* マイページ */}
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-3xl" />
        <span className="text-sm">マイページ</span>
      </div>
    </header>
  );
};

export default Header;
