export default function TimelineItem({ item }) {
  return (
    <div className="border p-3 rounded mt-2">
      <p>{item.title}</p>
      <p className="text-sm text-gray-500">{item.date}</p>
    </div>
  );
}