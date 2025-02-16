import React, { useState } from "react";
import { Search, Map, Calendar, User } from "lucide-react";

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    area: "",
    dateFrom: "",
    dateTo: "",
    rooms: 1,
    adults: 1,
    children: 0,
    priceMin: "",
    priceMax: "",
    preferences: "",
  });

  return (
    <div className="bg-orange-100 min-h-screen p-6">
      {/* ヘッダー */}
      <header className="bg-orange-500 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <User size={28} /> Trip-le
        </h1>
        <nav className="flex gap-4">
          <button className="flex items-center gap-1 hover:opacity-80">
            <Search size={20} /> 検索
          </button>
          <button className="flex items-center gap-1 hover:opacity-80">
            <Map size={20} /> ルート
          </button>
          <button className="flex items-center gap-1 hover:opacity-80">
            <Calendar size={20} /> 予約確認
          </button>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="mt-6 flex justify-center gap-6">
        {/* 検索ボックス */}
        <section className="bg-white p-7 rounded-lg shadow-md w-2/3">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Search size={24} className="text-orange-500" /> 検索
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="エリア" className="border p-2 rounded" />
            <div className="flex gap-2">
              <input type="date" className="border p-2 rounded w-full" />
              <span>〜</span>
              <input type="date" className="border p-2 rounded w-full" />
            </div>
            <div className="flex gap-2">
              <select className="border p-2 rounded w-full">
                <option>1部屋</option>
                <option>2部屋</option>
                <option>3部屋</option>
                <option>4部屋</option>
                <option>5部屋</option>
              </select>
              <input type="number" min="1" placeholder="大人" className="border p-2 rounded w-24" />
              <input type="number" min="0" placeholder="子供" className="border p-2 rounded w-24" />
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="価格下限" className="border p-2 rounded w-full" />
              <span>〜</span>
              <input type="text" placeholder="価格上限" className="border p-2 rounded w-full" />
            </div>
          </div>
          <button className="mt-4 w-full bg-orange-500 text-white p-2 rounded flex justify-center items-center gap-2">
            <Search size={20} /> 検索
          </button>
        </section>

        {/* 出発地・こだわり */}
        <aside className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Map size={24} className="text-orange-500" /> 出発地
          </h2>
          <input type="text" placeholder="自宅" className="border p-2 rounded w-full" />
          <h3 className="text-lg font-bold mt-4 flex items-center gap-2">
            <User size={20} className="text-gray-600" /> こだわり
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="border p-2 rounded">ツイン</button>
            <button className="border p-2 rounded">インターネット無料</button>
            <button className="border p-2 rounded">駐車場無料</button>
            <button className="border p-2 rounded">大浴場</button>
            <button className="border p-2 rounded">喫煙ルーム</button>
            <button className="border p-2 rounded">低価格</button>
          </div>
        </aside>
      </main>

      {/* 旅行ルート状況 */}
      <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar size={24} className="text-orange-500" /> 直近の旅行ルート状況
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {["東京", "仙台", "名古屋"].map((city, index) => (
            <div key={index} className="border p-4 rounded shadow-md">
              <h3 className="font-bold flex items-center gap-2">
                <Map size={20} className="text-blue-500" /> {city}旅行
              </h3>
              <p>2025/3/15～2025/3/16</p>
              <p>お台場 → ホテル</p>
              <p>天気予報: ☁️/☀️</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
