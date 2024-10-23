"use client";

import { TbGridDots } from "react-icons/tb";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { IoTicketSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

const Sidebar = () => {
  const pathname = usePathname();



  return (
    <div className="box-border">
      <div className="py-10 flex items-center justify-center border-b-2 border-b-background-300">
        <TbGridDots className="text-purple-100 text-4xl" />
      </div>

      <div className="py-20 flex flex-col items-center gap-10">
        <div
          className={classNames(
            "w-[60px] h-[60px] flex items-center justify-center",
            pathname === "/settings" ? "bg-purple-100 rounded-full p-3" : ""
          )}
        >
          <Link href={"/settings"}>
            <RiLayoutMasonryFill
              className={classNames(
                "text-purple-100 text-4xl",
                pathname === "/settings" ? "text-white" : "text-purple-100"
              )}
            />
          </Link>
        </div>

        <div
          className={classNames(
            "w-[60px] h-[60px] flex items-center justify-center",
            pathname === "/" ? "bg-purple-100 rounded-full p-3" : ""
          )}
        >
          <Link href={"/"}>
            <SiGoogleanalytics
              className={classNames(
                "text-purple-100 text-4xl",
                pathname === "/" ? "text-white" : "text-purple-100"
              )}
            />
          </Link>
        </div>

        <div
          className={classNames(
            "w-[60px] h-[60px] flex items-center justify-center",
            pathname === "/tickets" ? "bg-purple-100 rounded-full p-3" : ""
          )}
        >
          <Link href={"/tickets"}>
            <IoTicketSharp
              className={classNames(
                "text-purple-100 text-4xl",
                pathname === "/tickets" ? "text-white" : "text-purple-100"
              )}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
