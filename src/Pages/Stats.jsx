import { PieChart, Pie } from "recharts";

const data = [
  { name: "Call", value: 5 },
  { name: "Text", value: 8 },
  { name: "Video", value: 3 },
];

export default function Stats() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Friendship Analytics</h1>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100} />
      </PieChart>
    </div>
  );
}