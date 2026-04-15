import { useParams } from "react-router-dom";
import { useTimeline } from "../context/TimelineContext";
import { toast } from "react-toastify";
import friends from "../data/friends.json";
import { FiPhone, FiMessageSquare, FiVideo, FiBell, FiArchive, FiTrash2 } from "react-icons/fi";

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
    <div className="p-4 md:p-6 w-11/12 mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">

        {/* Left Column */}
        <div className="flex flex-col gap-4">

          {/* Profile Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
            <img
              src={friend.picture}
              className="w-18 h-18 rounded-full mx-auto mb-3 object-cover"
            />
            <h2 className="text-base font-medium text-gray-900 mb-2">{friend.name}</h2>
            <div className="flex justify-center gap-2 mb-3">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-50 text-red-700">Overdue</span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700">Family</span>
            </div>
            <p className="text-xs text-gray-400 italic mb-1">"{friend.bio}"</p>
            <p className="text-xs text-gray-300">Preferred: {friend.email}</p>
          </div>

          
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col gap-2">
            <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-gray-500 border border-gray-100 rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-all">
              <FiBell size={14} /> Snooze 2 Weeks
            </button>
            <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-gray-500 border border-gray-100 rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-all">
              <FiArchive size={14} /> Archive
            </button>
            <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-red-400 border border-gray-100 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all">
              <FiTrash2 size={14} /> Delete
            </button>
          </div>
        </div>

        {/* Right  */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "62", label: "Days Since Contact" },
              { value: "30", label: "Goal (Days)" },
              { value: "Feb 27", label: "Next Due" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                <p className="text-2xl font-medium text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Relationship Goal */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-green-800">Relationship Goal</p>
              <button className="text-xs text-gray-400 hover:bg-gray-100 px-2 py-1 rounded-lg transition-all">Edit</button>
            </div>
            <p className="text-sm text-gray-500">Connect every <span className="font-medium text-gray-900">30 days</span></p>
          </div>

         
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-medium text-gray-900 mb-3">Quick Check-In</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Call", icon: <FiPhone size={20} />, type: "Call" },
                { label: "Text", icon: <FiMessageSquare size={20} />, type: "Text" },
                { label: "Video", icon: <FiVideo size={20} />, type: "Video" },
              ].map((btn) => (
                <button
                  key={btn.type}
                  onClick={() => handleClick(btn.type)}
                  className="flex flex-col items-center gap-2 py-4 bg-white border border-gray-100 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}