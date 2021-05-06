import { useState, useEffect } from "react";

const useTheme = () => {
    const [currTheme, setCurrTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setCurrTheme(savedTheme);
        } else {
            localStorage.setItem("theme", currTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", currTheme);
    }, [currTheme]);

    const toggleTheme = () => {
        if (currTheme === "light") {
            setCurrTheme("dark");
        } else if (currTheme === "dark") {
            setCurrTheme("light");
        }
    };

    return { currTheme, toggleTheme };
};

export default useTheme;
