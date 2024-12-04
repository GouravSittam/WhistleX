import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { LuShare } from "react-icons/lu";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
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
          <p>
            Some of the greatest sports stories are COMEBACK stories. If Prithvi
            Shaw has decent people around him who care about his long term
            success, they’d sit him down, tell him to get off social media &
            train his absolute backside off in getting super fit. It’ll get him
            back into the correct path where past success can return. Too
            talented to throw it all away. Love, KP!
          </p>
          <div className="flex justify-between mt-5 text-xl items-center w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <LuHeart />
            </div>
            <div>
              <FaRegChartBar />
            </div>
            <div>
              <FaRegBookmark />
            </div>
            <div>
              <LuShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
