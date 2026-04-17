import React from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
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
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">Friendship Analytics</h1>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-[#244D3F] mb-6">
            By Interaction Type
          </h2>
          {total === 0 ? (
            <p className="text-[#64748B] text-center py-10">
              No interactions yet. Start by calling, texting, or video calling a
              friend!
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="60%"
                  outerRadius="80%"
                  cornerRadius={8}
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{ paddingTop: 30 }}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
