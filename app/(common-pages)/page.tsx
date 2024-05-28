import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import Widget1 from "@/components/custom/widget1";
import Widget2 from "@/components/custom/widget2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-5 px-5">
      <div className="grid grid-cols-6 gap-4 w-full ">
        <div className="col-span-5 grid grid-cols-2 gap-5 h-fit">
          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">Company Facts </span>
            <div className="flex items-center justify-center w-full h-full px-20 pb-20 pt-10">
              <Widget1 />
            </div>
          </div>

          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">Statistics</span>
            <div className="flex items-center justify-center w-full h-full px-20 pb-20 pt-10">
              <Widget2 />
            </div>
          </div>
          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">Assigned Risks </span>
            <div className="flex items-center justify-center w-full h-full px-20 pb-20 pt-10">
              <span className="text-gray-400">There are no risks assigned.</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">
              Assigned Action Items{" "}
            </span>
            <div className="flex items-center justify-center w-full h-full px-20 pb-20 pt-10">
              <span className="text-gray-400">There are no action items assigned.</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 w-full h-fit flex justify-center">
          <button className="flex gap-2 bg-[#27AE60] hover:bg-blue-500 h-fit w-fit py-[12px] px-6 rounded-[14px] text-white font-semibold place-items-center">
            <FaPlus className="text-xl font-bold inline-block" /> ADD WIDGET
          </button>
        </div>
      </div>
    </main>
  );
}
