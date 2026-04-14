

import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimeline = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);