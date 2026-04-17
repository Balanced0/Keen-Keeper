import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#244D3F]">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 border border-[#244D3F] rounded-md hover:bg-[#244D3F] hover:text-white transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;