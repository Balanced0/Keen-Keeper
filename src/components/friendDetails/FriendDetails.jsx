import React from "react";
import { useParams, useLoaderData } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdText } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { useContext } from "react";
import { timelineContext } from "../../App";
import { toast } from "react-toastify";

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

  const [year, month, day] = friend.next_due_date.split("-");
  const date = new Date(friend.next_due_date);
  const monthName = date.toLocaleDateString("en-US", {
    month: "long",
  });

  const handleCall = () => {
    const newEvent = {
      id: friend.id,
      name: friend.name,
      action: "Call",
      time: Date.now(),
    }
    setCalls([...calls, friend]);
    setTl([...tl, newEvent]);
    toast.success(`Called ${friend.name}`);
  };

  const handleText = () => {
    const newEvent = {
      id: friend.id,
      name: friend.name,
      action: "Text",
      time: Date.now(),
    }
    setTexts([...texts, friend]);
    setTl([...tl, newEvent]);
    toast.success(`Texted ${friend.name}`);
  };

  const handleVideo = () =>{
    const newEvent = {
      id: friend.id,
      name: friend.name,
      action: "Video",
      time: Date.now(),
    }
    setVideos([...videos, friend]);
    setTl([...tl, newEvent]);
    toast.success(`Video called ${friend.name}`);
  }

  const { calls, setCalls, texts, setTexts, videos, setVideos, tl, setTl } = useContext(timelineContext);
  return (
    <div className="container mx-auto p-4 grid grid-cols-[1fr_3fr] gap-6 mt-20 mb-20">
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
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#244D3F] font-semibold text-3xl">
                {friend.days_since_contact}
              </h2>
              <p className="text-[#64748B] text-lg">Days Since Contact</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#244D3F] font-semibold text-3xl">
                {friend.goal}
              </h2>
              <p className="text-[#64748B] text-lg">Goal (Days)</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#244D3F] font-semibold text-3xl">
                {monthName} {day}, {year}
              </h2>
              <p className="text-[#64748B] text-lg">Next Due</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium text-xl text-[#244D3F]">
                Relationship Goal
              </p>
              <button className="btn">Edit</button>
            </div>
            <p>
              <span className="text-[#64748B] text-lg">Connect every</span>
              <span className="font-bold text-xl"> {friend.goal} days</span>
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <p className="font-medium text-xl text-[#244D3F] mb-4">
              Quick Check-In
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="card bg-base-200" onClick={() => handleCall()}>
                <div className="card-body flex flex-col justify-center items-center">
                  <LuPhoneCall size={26} />
                  <p className="text-lg">Call</p>
                </div>
              </div>
              <div className="card bg-base-200" onClick={() => handleText()}>
                <div className="card-body flex flex-col justify-center items-center">
                  <IoMdText size={26} />
                  <p className="text-lg">Text</p>
                </div>
              </div>
              <div className="card bg-base-200" onClick={() => handleVideo()}>
                <div className="card-body flex flex-col justify-center items-center">
                  <BsCameraVideo size={26} />
                  <p className="text-lg">Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
