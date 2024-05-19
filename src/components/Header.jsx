"use client";

import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  function handleActiveLink(link) {
    setActiveLink(link);
  }

  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem
          title="home"
          address="/"
          Icon={AiFillHome}
          activeLink={activeLink}
          handleActiveLink={handleActiveLink}
        />
        <MenuItem
          title="about"
          address="/about"
          Icon={BsFillInfoCircleFill}
          activeLink={activeLink}
          handleActiveLink={handleActiveLink}
        />
      </div>

      <div className="flex items-center gap-4">
        <DarkModeSwitch />

        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold py-1 px-2 rounded-lg bg-amber-500">
            Next
          </span>
          <span className="text-xl hidden sm:inline">Flix</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
