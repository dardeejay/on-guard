"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavigationLinks } from '../../app/constants/links';

export default function Links({ links }: { links: INavigationLinks[] }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col justify-center gap-1">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <Link
            href={link.href}
            key={index}
            className={`flex items-center rounded-[4px] gap-2 py-2 pl-4 font-semibold ${pathname === link.href ? "text-blue-500 bg-blue-100" : "hover:text-blue-500 hover:bg-blue-100 transition-colors"}`}
          >
            <Icon className="text-xl" />
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
