import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineTv } from "react-icons/md";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { MdOutlineDomain } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";

export interface INavigationLinks {
  icon: IconType;
  text: string;
  href: string;
}

const NavigationLinks: INavigationLinks[] = [
  {
    icon: MdDashboard,
    text: "Dashboard",
    href: "/",
  },
  {
    icon: MdPeople,
    text: "People",
    href: "/people",
  },
  {
    icon: MdAssignment,
    text: "Projects",
    href: "/projects",
  },
  {
    icon: IoMdCalendar,
    text: "Calendar",
    href: "/calendar",
  },
  {
    icon: MdOutlineTv,
    text: "Training",
    href: "/training",
  },
  {
    icon: MdOutlineHourglassEmpty,
    text: "Timesheet",
    href: "/timesheet",
  },
  {
    icon: IoMdChatbubbles,
    text: "Reports",
    href: "/reports",
  },
  {
    icon: MdOutlineDomain,
    text: "Administration",
    href: "/administration",
  },
  {
    icon: MdQuestionMark,
    text: "Help",
    href: "/help",
  },
];

export default NavigationLinks;
