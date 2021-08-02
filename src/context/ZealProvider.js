import React from "react";
import ThemeContext from "./ThemeContext";
import StyleContext from "./StyleContext";
import LayoutContext from "./LayoutContext";
import useTheme from "../hooks/useTheme";
import GlobalStyle from "../style/GlobalStyle";
import style from "../style/Style";

const ZealProvider = ({ children, headerContents, sidebarContents, footerContents, customGlobalStyles }) => {
    const { currTheme, toggleTheme } = useTheme();
    return (
        <ThemeContext.Provider value={{ theme: currTheme, toggleTheme }}>
            <GlobalStyle
                theme={currTheme}
                style={style}
                customGlobalStyles={customGlobalStyles}
            />
            <StyleContext.Provider value={style}>
                <LayoutContext.Provider value={{ headerContents, sidebarContents, footerContents }}>
                    {children}
                </LayoutContext.Provider>
            </StyleContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ZealProvider;
