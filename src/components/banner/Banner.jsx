import React from "react";
import { FaPlus } from "react-icons/fa6";

const Banner = ({friendsData}) => {
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
      <button className="btn bg-[#244D3F] text-white mb-10">
        <FaPlus />
        Add a Friend
      </button>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#244D3F] font-semibold text-3xl">{friendsData.length}</h2>
            <p className="text-[#64748B] text-lg">
              Total Friends
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#244D3F] font-semibold text-3xl">{friendsData.length}</h2>
            <p className="text-[#64748B] text-lg">
              On Track
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#244D3F] font-semibold text-3xl">{friendsData.length}</h2>
            <p className="text-[#64748B] text-lg">
              Need Attention
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#244D3F] font-semibold text-3xl">{friendsData.length}</h2>
            <p className="text-[#64748B] text-lg">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
