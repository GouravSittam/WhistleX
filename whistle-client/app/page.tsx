import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className=" col-span-3 flex justify-start pt-2">
      <FaXTwitter className="text-3xl" / >
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
