import { useNavigate } from "react-router-dom";


export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card bg-base-100 shadow cursor-pointer"
    >
      <div className="card-body justify-center items-center">
        <img src={friend.picture} className="w-16 rounded-full" />
        <h2 className="text-2xl font-bold">{friend.name}</h2>
        <p className="text-gray-400">{friend.days_since_contact} days ago</p>
        <p>{friend.tags}</p>
        <p>{friend.status}</p>
      </div>
    </div>
  );
}