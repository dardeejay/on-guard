import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-5 px-5">
      <div className="grid grid-cols-6 gap-4 w-full ">
        <div className="col-span-5 grid grid-cols-2 gap-5 h-fit">
          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">Company Facts </span>
          </div>
          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">Statistics</span>
          </div>
          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">Assigned Risks </span>
          </div>
          <div className="bg-white p-5 rounded-[14px] h-[600px]">
            <span className="font-semibold text-2xl">Assigned Action Items </span>
          </div>
        </div>
        <div className="col-span-1 w-full h-fit flex justify-center">
          <button className="bg-[#27AE60] hover:bg-blue-500 h-fit w-fit py-[12px] px-7 rounded-[14px] text-white text-sm font-semibold">
            + ADD WIDGET
          </button>
        </div>
      </div>
    </main>
  );
}
