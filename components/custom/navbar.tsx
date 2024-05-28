"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (
    <div className="bg-white p-7 flex">
      <Link href={"/login"}>Login</Link>
    </div>
  );
}
