"use client"

import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "./button";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    return (
        <>
            <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                variant="outline"
                size="icon"
                className="rounded-full cursor-pointer"
            >
                <FaSun className="absolute h-3 w-3 md:h-4 md:w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
                <FaMoon className="absolute h-3 w-3 md:h-4 md:w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
            </Button>
        </>
    );
};

export default ThemeToggle;