import React from "react";
import { useParams, useLoaderData } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const FriendDetails = () => {
  const { id } = useParams();
  const friendsData = useLoaderData();
  const friend = friendsData.find((friend) => friend.id == id);
  const getStatusClass = (status) => {
    if (status === "overdue") {
      return "text-white bg-[#EF4444] rounded-full";
    } else if (status === "almost due") {
      return "text-white bg-[#EFAD44] rounded-full";
    } else if (status === "on-track") {
      return "text-white bg-[#244D3F] rounded-full";
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-2">
        <div className="card bg-base-100 shadow-sm mb-2">
          <figure className="px-10 pt-10">
            <img
              src={friend.picture}
              alt={friend.name}
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-2">{friend.name}</h2>
            <div className={`badge ${getStatusClass(friend.status)}`}>
              {friend.status}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag, id) => {
                return (
                  <div key={id} className="badge text-[#244D3F] bg-[#CBFADB]">
                    {tag.toUpperCase()}
                  </div>
                );
              })}
            </div>
            <p className="font-medium text-[#64748B] mb-3">"{friend.bio}"</p>
            <p className="text-[#64748B] text-sm">Preferred: {friend.email}</p>
          </div>
        </div>
        <div className="card btn bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <button className="font-bold text-[#1F2937] flex justify-center items-center gap-2">
              <RiNotificationSnoozeLine size={16} /> Snooze 2 weeks
            </button>
          </div>
        </div>
        <div className="card btn bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <button className="font-bold text-[#1F2937] flex justify-center items-center gap-2">
              <FiArchive size={16} /> Archieve
            </button>
          </div>
        </div>
        <div className="card btn bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <button className="font-bold text-red-600 flex justify-center items-center gap-2">
              <RiDeleteBin6Line size={16} /> Delete
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FriendDetails;
