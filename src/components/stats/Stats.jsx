import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { timelineContext } from "../../App";

const Stats = () => {
  const { calls, texts, videos } = useContext(timelineContext);
  const total = calls.length + texts.length + videos.length;
  // #region Sample data
  const data = [
    { name: "Text", value: texts.length, fill: "#7E35E1" },
    { name: "Call", value: calls.length, fill: "#244D3F" },
    { name: "Video", value: videos.length, fill: "#37A163" },
  ];
  return (
    <div className="container mx-auto p-4 mt-20 mb-20">
      <h1 className="font-bold text-5xl mb-6">Friendship Analytics</h1>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-[#244D3F] mb-6">
            By Interaction Type
          </h2>
          <div className="mx-auto">
            <div>
              {total === 0 ? (
                <p className="text-[#64748B] text-center py-10">
                  No interactions yet. Start by calling, texting, or video
                  calling a friend!
                </p>
              ) : (
                <PieChart width={400} height={400} responsive>
                  <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />
                  <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: 30 }}></Legend>
                  <Tooltip></Tooltip>
                </PieChart>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
