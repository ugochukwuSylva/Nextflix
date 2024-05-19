"use client";

import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-slate-700 dark:bg-slate-700 dark:text-slate-200 min-h-screen transition-colors duration-300 select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
