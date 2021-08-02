import { useStyleContext, useThemeContext } from "../index";

const useStyles = (customStyles) => {
    const style = useStyleContext();
    const { theme } = useThemeContext();
    return customStyles(style, theme);
};

export default useStyles;