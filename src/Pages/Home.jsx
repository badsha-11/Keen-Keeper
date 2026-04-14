import { useEffect, useState } from "react";
import friendsData from "../data/friends.json";
import FriendCard from "../Components/FriendCard";
import Loader from "../Components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-11/12 mx-auto">
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
        {friends.map((f) => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>
    </div>
  );
}
