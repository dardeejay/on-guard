import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/custom/sidebar";
import Navbar from "@/components/custom/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "On-Guard",
  description:
    "Promoting Peaceful Community via Active Safety Reporting and Incident Intervention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="flex bg-[#E5E5E5]">
          <Sidebar />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
