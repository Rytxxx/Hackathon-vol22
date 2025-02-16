"use client";

import React, { useState, useEffect } from "react";
type Reservation = {
  id: number;
  destination: string;
  dateRange: string;
  hotelName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  price: number;
  imageUrl: string;
};

const mockReservations: Reservation[] = [
  {
    id: 1,
    destination: "東京旅行",
    dateRange: "2025/3/15～2025/3/16",
    hotelName: "ビジネスホテルA",
    roomType: "禁煙シングルルーム",
    checkIn: "17:00～24:00",
    checkOut: "～9:00",
    price: 3000,
    imageUrl: "/images/hotel1.jpg"
  },
  {
    id: 2,
    destination: "仙台旅行",
    dateRange: "2025/6/13～2025/6/15",
    hotelName: "ホテルB",
    roomType: "ツインルーム",
    checkIn: "17:00～24:00",
    checkOut: "～9:00",
    price: 8818,
    imageUrl: "/images/hotel2.jpg"
  }
];

const Reservations: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    // 仮のデータをセット
    setReservations(mockReservations);
  }, []);

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">予約確認</h2>
      {reservations.map((res) => (
        <div key={res.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-xl font-semibold">{res.destination}</h3>
          <p className="text-sm text-gray-600">{res.dateRange}</p>
          <div className="flex gap-4 mt-2">
            <img src={res.imageUrl} alt={res.hotelName} className="w-24 h-24 object-cover rounded" />
            <div>
              <p className="font-semibold">{res.hotelName}</p>
              <p className="text-sm text-gray-500">{res.roomType}</p>
              <p className="text-sm text-gray-500">チェックイン: {res.checkIn}</p>
              <p className="text-sm text-gray-500">チェックアウト: {res.checkOut}</p>
              <p className="text-lg text-red-600 font-bold">宿泊料金: {res.price.toLocaleString()}円</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
