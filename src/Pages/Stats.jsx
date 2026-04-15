'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Text", value: 400, color: "#8b5cf6" },
  { name: "Call", value: 300, color: "#14532d" },
  { name: "Video", value: 300, color: "#22c55e" },
];

export default function FriendshipStats() {
  return (
    <div className="w-11/12 mx-auto">
        <div className="w-full p-4 md:p-8 ">
     
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Friendship Analytics</h1>
        <hr className="mt-4 border-slate-200" />
      </div>

     
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-slate-500 text-sm font-medium mb-10">By Interaction Type</p>
        
        
        <div className="w-full h-87.5 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
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
        </div>
      </div>
    </div>
    </div>
  );
}