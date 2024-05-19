"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function DarkModeSwitch() {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
}

export default DarkModeSwitch;
