"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "../components/Header";

type Stop = {
    name: string;
    time?: string;
    cost?: string;
  };
  
  type ScheduleSection = {
    time: string;
    stops: Stop[];
  };

const routeDetails : Record<string, { title: string; date: string; schedule: ScheduleSection[] }> = {
  1: {
    title: "東京旅行",
    date: "2025/3/15～2025/3/16",
    schedule: [
      {
        time: "12:00 ～ 16:00",
        stops: [
          { name: "明治神宮", time: "12:00 ～ 13:00" },
          { name: "皇居", time: "13:15 ～ 16:00" },
        ],
      },
      {
        time: "16:00 ～ 18:00",
        stops: [
          { name: "皇居", cost: "¥580" },
          { name: "野毛食べ物横丁", cost: "¥1,500～¥3,000", time: "17:05 ～ 18:00" },
        ],
      },
    ],
  },
};

const RouteDetailPage: React.FC = () => {
    const { id } = useParams();
    const route = routeDetails[parseInt(id as string, 10) as keyof typeof routeDetails];    

  if (!route) {
    return <p className="text-center mt-20 text-gray-500">ルートが見つかりません。</p>;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header />
      <main className="pt-24 px-6 max-w-4xl mx-auto">
        <button
          onClick={() => history.back()}
          className="text-orange-500 mb-4"
        >
          ← 戻る
        </button>

        <h2 className="text-2xl font-bold text-orange-600">{route.title}</h2>
        <p className="text-gray-500">{route.date}</p>

        {route.schedule.map((section, index) => (
          <div key={index} className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-orange-500">{section.time}</h3>
            {section.stops.map((stop, idx) => (
              <div key={idx} className="flex justify-between border-b py-2">
                <p>📍 {stop.name}</p>
                {stop.time && <p>{stop.time}</p>}
                {stop.cost && <p>{stop.cost}</p>}
              </div>
            ))}
          </div>
        ))}

        {/* Googleマップエリア */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-orange-500">ルートマップ</h3>
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">Google Maps APIでルートを表示</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RouteDetailPage;
