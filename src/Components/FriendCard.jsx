import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  // 🎨 status color
  const statusColor =
    friend.status === "overdue"
      ? "badge-error"
      : friend.status === "almost due"
      ? "badge-warning"
      : "badge-success";

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer"
    >
      <div className="card-body items-center text-center">

       
        <img
          src={friend.picture}
          className="w-20 h-20 rounded-full border"
        />

       
        <h2 className="text-xl font-bold mt-2">{friend.name}</h2>

       
        <p className="text-gray-400 text-sm">
          {friend.days_since_contact}d ago
        </p>

       
        <div className="flex gap-2 mt-2 flex-wrap justify-center">
          {friend.tags.map((tag, i) => (
            <span key={i} className="bg-green-200 px-2.5 py-1 rounded-2xl">
              {tag}
            </span>
          ))}
        </div>

       
        <div className={`badge mt-2 ${statusColor}`}>
          {friend.status}
        </div>

      </div>
    </div>
  );
}