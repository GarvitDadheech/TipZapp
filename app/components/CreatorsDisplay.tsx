import React from "react";
import creatorImage from "../assets/creator.png"; 
const CreatorsDisplay: React.FC = () => {
  return (
    <div>
      <img src={creatorImage.src} alt="Creator" className="w-[650px] h-[650px] object-cover" />
    </div>
  );
};

export default CreatorsDisplay;
