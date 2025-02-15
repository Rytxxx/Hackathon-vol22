import React from "react";
import { useState } from "react";
import { Search, Map, Calendar } from "lucide-react";


export  function Home() {
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
      <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trip-le</h1>
        <nav className="flex gap-4">
          <button className="flex items-center gap-1"><Search size={20} />検索</button>
          <button className="flex items-center gap-1"><Map size={20} />ルート</button>
          <button className="flex items-center gap-1"><Calendar size={20} />予約確認</button>
        </nav>
      </header>
      
      <main className="mt-6 grid grid-cols-3 gap-6">
        {/* 検索ボックス */}
        <section className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">検索</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="エリア" className="border p-2 rounded" />
            <input type="date" className="border p-2 rounded" />
            <select 
              className="border p-2 rounded"
              value={searchParams.rooms}
              onChange={(e) => setSearchParams({ ...searchParams, rooms: Number(e.target.value) })}
            >
              <option value="1">1部屋</option>
              <option value="2">2部屋</option>
            </select>
            <div className="flex gap-2">
              <input type="number" min="1" placeholder="大人" className="border p-2 rounded w-24" />
              <input type="number" min="0" placeholder="子供" className="border p-2 rounded w-24" />
            </div>
            <input type="text" placeholder="価格下限" className="border p-2 rounded" />
            <input type="text" placeholder="価格上限" className="border p-2 rounded" />
          </div>
          <button className="mt-4 w-full bg-orange-500 text-white p-2 rounded">検索</button>
        </section>

        {/* 出発地・こだわり */}
        <aside className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">出発地</h2>
          <input type="text" placeholder="自宅" className="border p-2 rounded w-full" />
          <h3 className="text-lg font-bold mt-4">こだわり</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="border p-2 rounded">ツイン</button>
            <button className="border p-2 rounded">インターネット無料</button>
            <button className="border p-2 rounded">駐車場無料</button>
            <button className="border p-2 rounded">大浴場</button>
            <button className="border p-2 rounded">喫煙ルーム</button>
            <button className="border p-2 rounded">インターネット無料</button>

          </div>
        </aside>
      </main>
    </div>
  );
}
