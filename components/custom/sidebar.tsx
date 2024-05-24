"use client";
import React from "react";
import Links from "./Links";
import NavigationLinks from "@/app/constants/links";

export default function Sidebar() {
  return (
    <div className="ml-5 h-fit w-[300px] bg-white rounded-[14px] p-5 mt-5">
      <Links links={NavigationLinks} />
    </div>
  );
}
