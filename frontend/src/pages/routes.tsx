"use client";

import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Header from "../components/Header";  

const routesData = [
  {
    id: 1,
    title: "東京旅行",
    date: "2025/3/15～2025/3/16",
    start: "自宅",
    destination: "東京スカイツリー",
    cost: "¥50,000",
  },
  {
    id: 2,
    title: "仙台旅行",
    date: "2025/5/15～2025/5/16",
    start: "自宅",
    destination: "仙台",
    cost: "-",
  },
];

const RoutesPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header />
      <main className="pt-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-orange-500 text-xl font-semibold mb-4">ルート</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {routesData.map((route) => (
            <div
              key={route.id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-orange-100 transition"
              onClick={() => router.push(`/routes/${route.id}`)} // クリックで詳細ページへ遷移
            >
              <h3 className="text-lg font-bold">{route.title}</h3>
              <p className="text-sm text-gray-500">{route.date}</p>
              <div className="mt-2">
                <p>🏠 {route.start}</p>
                <p>🏨 ～ホテル {route.cost}</p>
                <p>📍 {route.destination}</p>
              </div>
              <button className="mt-3 flex items-center gap-1 text-orange-400">
                <FaShareAlt /> 共有
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RoutesPage;

