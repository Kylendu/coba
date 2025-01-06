import React from "react";
import Game from "../snakeGame";
import IntroSection from "./introSection";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        <IntroSection />
        <Game />
      </div>
    </div>
  );
};

export default Profile;
