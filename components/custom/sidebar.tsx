"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineTv } from "react-icons/md";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { MdOutlineDomain } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="ml-5 h-fit w-[300px] bg-white rounded-[14px] p-5 mt-5">
      <ul>
        <li>
          <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <MdDashboard className="text-2xl" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <MdPeople className="text-2xl" />
            <span>People</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <MdAssignment className="text-2xl" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <IoMdCalendar className="text-2xl" />
            <span>Calendar</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <MdOutlineTv className="text-2xl" />
            <span>Training</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <MdOutlineHourglassEmpty className="text-2xl" />
            <span>Timesheet</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <IoMdChatbubbles className="text-2xl" />
            <span>Reports</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <MdOutlineDomain className="text-2xl" />
            <span>Administration</span>
          </Link>
        </li>
        <li>
        <Link
            href="#"
            className="flex items-center gap-5 hover:bg-blue-100 py-2 pl-4 rounded-[4px] hover:text-blue-600"
          >
            <MdQuestionMark className="text-2xl"/>
            <span>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
