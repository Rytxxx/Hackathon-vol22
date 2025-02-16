import React from "react";
import { Clock, User } from "lucide-react";
import { IoIosCar } from "react-icons/io";

export const TripPlanner: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-100 p-4">
      <header className="bg-orange-500 p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Trip-le</h1>
        <User className="w-8 h-8" />
      </header>

      <div className="max-w-6xl mx-auto mt-4 p-4 bg-white rounded-lg shadow-md flex">
        {/* 左側の旅程 */}
        <div className="w-2/3 pr-4 border-r">
          <h2 className="text-lg font-bold">東京旅行</h2>
          <IoIosCar size={40}/>
          <p className="text-gray-600">2025/3/15〜2025/3/16</p>

          {/* タイムライン */}
          <div className="mt-4">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="font-bold">12:00 - 16:00</span>
              </div>
              <div className="ml-6 border-l-2 border-orange-400 pl-4">
                <div className="mb-2">
                  <p className="font-bold">明治神宮</p>
                  <p className="text-gray-500">12:00 - 13:00</p>
                </div>
                <div className="mb-2">
                  <p className="font-bold">皇居</p>
                  <p className="text-gray-500">13:15 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右側のマップ */}
        <div className="w-1/3 pl-4">
          <h3 className="font-bold text-lg">ルートマップ</h3>
          <div className="mt-2 w-full h-64 bg-gray-300 flex items-center justify-center">
            {/* Google Maps API をここに統合予定 */}
            <span className="text-gray-700">Google Maps API でマップを表示</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
