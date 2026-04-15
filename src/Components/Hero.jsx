import React from "react";

const Hero = ({ friends }) => {
  const totalFriends = friends.length;

  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(f => f.status === "overdue").length;

  const interactions = 12;

  return (
    <div className="text-center my-12">
      <h2 className="text-5xl font-bold mb-3.5">
        Friends to keep close in your life
      </h2>

      <p className="text-gray-400">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="btn bg-green-800 text-xl text-white my-10">
        + Add a Friend
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="shadow-sm border border-gray-200 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800">
            {totalFriends}
          </h2>
          <p className="text-gray-400">Total Friends</p>
        </div>

        <div className="shadow-sm border border-gray-200 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800">
            {onTrack}
          </h2>
          <p className="text-gray-400">On Track</p>
        </div>

        <div className="shadow-sm border border-gray-200 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800">
            {needAttention}
          </h2>
          <p className="text-gray-400">Need Attention</p>
        </div>

        <div className="shadow-sm border border-gray-200 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800">
            {interactions}
          </h2>
          <p className="text-gray-400">Interactions</p>
        </div>
      </div>

      <hr className="border border-gray-200/50" />
    </div>
  );
};

export default Hero;