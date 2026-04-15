
import TimelineItem from "../Components/TimelineItem";
import { useTimeline } from "../context/TimelineContext";


export default function Timeline() {
  const { timeline } = useTimeline();

  return (
    <div className="p-6 my-20 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold">Timeline</h1>

      {timeline.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </div>
  );
}