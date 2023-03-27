import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-20 w-full items-center justify-center">
      <h1 className="font-bold text-6xl ">Home Page</h1>
      <Link
        className="font-bold text-4xl bg-purple-600 text-white p-6 rounded animate-bounce"
        to="/users"
      >
        Go To Users List
      </Link>
    </div>
  );
}
