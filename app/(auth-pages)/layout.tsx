import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AuthHeader from "@/components/custom/auth/AuthHeader";

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
        <AuthHeader/>
        <main className="w-full bg-[#E5E5E5]">{children}</main>
      </body>
    </html>
  );
}
