import React, { useEffect, useState } from 'react';
import Banner from "../banner/Banner";
import { useLoaderData } from "react-router";
import FriendsList from "../friendsList/FriendsList";

const Homepage = () => {
  const data = useLoaderData();
  const [friendsData, setFriendsData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setFriendsData(data);
    }, 300);
  }, [data]);

  if (!friendsData) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <Banner friendsData={friendsData}></Banner>
      <div className="container mx-auto p-4">
        <div className="divider"></div>
        <h3 className="font-semibold text-2xl mb-4">Your Friends</h3>
      </div>
      <FriendsList friendsData={friendsData}></FriendsList>
    </div>
  );
};

export default Homepage;
