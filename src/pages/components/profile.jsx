import React from "react";
import Game from "./fragments/mainIndex/game";
import IntroSection from "./fragments/mainIndex/introSection";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#011627] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        <IntroSection />
        <Game />
      </div>
    </div>
  );
};

export default Profile;
