import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useThemeContext = () => {
    return useContext(ThemeContext);
};

export default useThemeContext;
