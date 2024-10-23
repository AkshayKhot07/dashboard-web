"use client";

import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";
import SidebarMobile from "../SidebarMobile";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="py-4 mx-2 flex justify-between items-center px-5 bg-background-200 border-b-2 border-b-background-300">
      <Link href={"/"}>
        <h1 className="text-text-100 font-bold text-[32px]">Analytics</h1>
      </Link>
      <div className="relative md:hidden">
        <button type="button" onClick={() => setToggleNav(!toggleNav)}>
          <IoReorderThree className="text-4xl" />
        </button>

        <div className={classNames(toggleNav ? "block" : "hidden",
            "absolute top-[82%] right-0 z-[999]"
        )}>
          <SidebarMobile setToggleNav={setToggleNav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
