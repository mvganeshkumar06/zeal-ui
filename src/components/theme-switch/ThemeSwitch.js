import React, { useState, useEffect } from "react";
import { Switch, useThemeContext } from "../../index";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (theme === "light") {
            setChecked(false);
        }
        else {
            setChecked(true);
        }
    }, [theme]);
    return <Switch onChange={toggleTheme} checked={checked} />;
};

export default ThemeSwitch;
