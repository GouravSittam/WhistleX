// import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { RxHome } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";

import FeedCard from "@/components/FeedCard";

interface XSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: XSidebarButton[] = [
  {
    title: "Home",
    icon: <RxHome />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notifications",
    icon: <IoIosNotifications />,
  },
  {
    title: "Messages",
    icon: <IoMailUnreadOutline />,
  },
  {
    title: "Gork",
    icon: <MdOutlineIndeterminateCheckBox />,
  },
  {
    title: "Profile",
    icon: <RiAccountPinCircleLine />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3 pt-1 px-4">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <FaXTwitter />
          </div>
          <div className="mt-1 text-xl  pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4  hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-3 ">
              <button className="bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full ">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-7 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
