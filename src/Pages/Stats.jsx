'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useTimeline } from "../context/TimelineContext";

export default function FriendshipStats() {
  const { timeline } = useTimeline();

  // Data calculate korar logic
  const textCount = timeline.filter(item => item.type === "Text").length;
  const callCount = timeline.filter(item => item.type === "Call").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  const chartData = [
    { name: "Text", value: textCount, color: "#8b5cf6" },
    { name: "Call", value: callCount, color: "#14532d" },
    { name: "Video", value: videoCount, color: "#22c55e" },
  ].filter(item => item.value > 0);

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-full p-4 md:p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Friendship Analytics</h1>
          <hr className="mt-4 border-slate-200" />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm font-medium mb-10">By Interaction Type</p>

          <div className="w-full h-87.5 flex items-center justify-center">
            {timeline.length === 0 ? (
              <div className="text-center text-gray-400">
                <p>No analytics data available yet</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  
                  <Tooltip 
                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                  />
                  
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                   
                    isAnimationActive={true}
                  >
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        style={{ outline: 'none', cursor: 'pointer' }}
                      />
                    ))}
                  </Pie>
                  
                  <Legend 
                    verticalAlign="bottom" 
                    align="center" 
                    iconType="circle"
                    iconSize={10}
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}