import React from "react";
import { useContext } from "react";
import { timelineContext } from "../../App";
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";

const Timeline = () => {
  const { calls, setCalls, texts, setTexts, videos, setVideos, tl, setTl } =
    useContext(timelineContext);
  const picType = (data) => {
    if (data.action === "Call") {
      return Call;
    }
    if (data.action === "Text") {
      return Text;
    }
    if (data.action === "Video") {
      return Video;
    }
  };
  return (
    <div className="container mx-auto p-4 mt-20 mb-20">
      <h1 className="font-bold text-5xl mb-6">Timeline</h1>
      <div className="dropdown dropdown-start mb-6">
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
      <div className="flex flex-col gap-4">
        {tl.map((data) => {
          return (
            <div className="flex gap-4 items-center bg-white rounded-xl border border-base-300 p-4">
              <div>
                <img src={picType(data)}></img>
              </div>
              <div>
                <p>
                  <span className="font-medium text-xl text-[#244D3F]">
                    {data.action}
                  </span>{" "}
                  <span className="text-lg text-[#64748B]">
                    with {data.name}
                  </span>
                </p>
                <p className="font-medium text-lg text-[#64748B]">
                  {new Date(data.time).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
