
import friends from "../data/friends.json";


import { useParams } from "react-router-dom";
import { useTimeline } from "../context/TimelineContext";
import { toast } from "react-toastify";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);
  const { addTimeline } = useTimeline();

  const handleClick = (type) => {
    addTimeline({
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleString(),
    });

    toast.success(`${type} added!`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{friend.name}</h1>
      <img src={friend.picture} className="w-24 rounded-full mt-4" />
      <p className="mt-2">{friend.bio}</p>

      <div className="flex gap-3 mt-4">
        <button className="btn btn-primary" onClick={() => handleClick("Call")}>Call</button>
        <button className="btn btn-secondary" onClick={() => handleClick("Text")}>Text</button>
        <button className="btn btn-accent" onClick={() => handleClick("Video")}>Video</button>
      </div>
    </div>
  );
}