import { useNavigate } from "react-router-dom";


export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card bg-base-100 shadow cursor-pointer"
    >
      <div className="card-body">
        <img src={friend.picture} className="w-16 rounded-full" />
        <h2 className="card-title">{friend.name}</h2>
        <p>{friend.days_since_contact} days ago</p>
      </div>
    </div>
  );
}