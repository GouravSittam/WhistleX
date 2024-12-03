import React from "react";
import Image from "next/image";

const FeedCard: React.FC = () => {
  return (
    <div className="border">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/118460171?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
            <h5>Gourav Chaudhary</h5>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
