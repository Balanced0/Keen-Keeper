import React from "react";

const FriendsList = ({ friendsData }) => {
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
    <div className="container mx-auto p-4 grid grid-cols-1 gap-6 mb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {friendsData.map((friend) => {
        return (
          <div className="card bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
              <img
                src={friend.picture}
                alt={friend.name}
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-2">{friend.name}</h2>
              <p className="text-[#64748B] text-xs mb-2">
                {friend.days_since_contact} ago
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {
                friend.tags.map((tag)=>{
                    return<div className="badge text-[#244D3F] bg-[#CBFADB]">{tag.toUpperCase()}</div>
                })
              }
              </div>
              <div className={`badge ${getStatusClass(friend.status)}`}>
                {friend.status}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
