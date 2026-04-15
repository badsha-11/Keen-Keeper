"use client";
import { useState } from "react";
import TimelineItem from "../Components/TimelineItem";
import { useTimeline } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline } = useTimeline();
  
  const [filter, setFilter] = useState("All");

  
  const filteredTimeline = timeline.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <div className="p-6 my-20 w-11/12 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Timeline</h1>

        
        <details className="dropdown dropdown-end">
          <summary className="btn m-1 bg-[#14532d] text-white hover:bg-[#1a6438] border-none">
            Filter: {filter}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg border border-gray-100">
            <li>
              <button onClick={() => setFilter("All")}>All Interactions</button>
            </li>
            <li>
              <button onClick={() => setFilter("Text")}>Messages</button>
            </li>
            <li>
              <button onClick={() => setFilter("Call")}>Calls</button>
            </li>
            <li>
              <button onClick={() => setFilter("Video")}>Video Calls</button>
            </li>
          </ul>
        </details>
      </div>

      <div className="border-t border-gray-100 pt-4">
        {filteredTimeline.length === 0 ? (
          <div className="text-center text-gray-400 mt-10 p-10">
            <p className="text-lg italic">No {filter === "All" ? "" : filter} interactions found yet 😔</p>
          </div>
        ) : (
          filteredTimeline.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))
        )}
      </div>
    </div>
  );
}