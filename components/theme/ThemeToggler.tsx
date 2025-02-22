"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Sun
          className="cursor cursor-pointer"
          size={24}
          onClick={() => setTheme("light")}
        />
      ) : (
        <Moon
          className="cursor cursor-pointer"
          size={24}
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
