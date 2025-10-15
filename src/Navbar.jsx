import React, { useState } from "react";

export default function Home() {
  const [v, s] = useState("Welcome UseState");

  const a = () => {
    s("A");
  };

  const b = () => {
    s("B");
  };

  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center flex-col text-white">
      <h1 className="text-5xl mb-6">{v}</h1>

      <div className="flex gap-10">
        <button
          onClick={a}
          className="bg-blue-400 px-10 py-2 rounded-2xl text-black font-semibold"
        >
          Button A
        </button>

        <button
          onClick={b}
          className="bg-orange-400 px-10 py-2 rounded-2xl text-black font-semibold"
        >
          Button B
        </button>
      </div>
    </div>
  );
}
