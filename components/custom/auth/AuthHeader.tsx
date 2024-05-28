"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function AuthHeader() {
  const router = useRouter();
  return (
    <div className="flex bg-white justify-around py-5 items-center relative z-10">
      <div className="flex justify-center items-center">
        <h1 className="text-green70 text-2xl">OnGuard</h1>
      </div>
      <button
        title="close-auth"
        className="rounded-full hover:bg-darkGreen20 aspect-square h-fit w-fit p-3 transition-colors"
        onClick={() => {
          router.push("/");
        }}
      >
        <IoClose className="text-green70 text-3xl" />
      </button>
    </div>
  );
}
