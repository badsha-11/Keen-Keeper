import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FriendDetails from "../pages/FriendDetails";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friend/:id" element={<FriendDetails />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}