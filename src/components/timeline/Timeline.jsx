import React from "react";

const Timeline = () => {
  return (
    <div className="container mx-auto p-4 mt-20 mb-20">
      <h1 className="font-bold text-5xl mb-6">Timeline</h1>
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter timeline ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Timeline;
