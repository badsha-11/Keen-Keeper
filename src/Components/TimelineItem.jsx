import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";

const typeImages = {
  Call: callImg,
  Text: textImg,
  Video: videoImg,
};

export default function TimelineItem({ item }) {
  return (
    <div className="shadow-sm border border-gray-200 space-y-6 p-3 rounded mt-2 ">
      <div className="flex gap-3.5">
        <div>
        <img src={typeImages[item.type]} alt={item.type} />
      </div>
      <div>
        <p>{item.title}</p>
        <p className="text-sm text-gray-500">{item.date}</p>
      </div>
      <div></div>
      </div>
    </div>
  );
}