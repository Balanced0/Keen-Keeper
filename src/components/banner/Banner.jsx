import React from "react";
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center text-center mt-20">
      <h1 className="font-bold text-5xl mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-[#64748B] mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the<br></br>
        relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white"><FaPlus />Add a Friend</button>
    </div>
  );
};

export default Banner;
