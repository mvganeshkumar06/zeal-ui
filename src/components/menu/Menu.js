import React from "react";
import style from "../../style/Style";
import { Container, useThemeContext } from "../../index";

const getMenuBgColor = (color, theme, colors) => {

    if (colors[color]) {
        return colors[color][3];
    }

    if (theme === "light") {
        return style.colors.gray[0];
    }

    return style.colors.gray[3];
};

const Menu = ({
    children,
    top,
    right,
    bottom,
    left,
    isOpen,
    color,
    customStyles,
    ...rest
}) => {
    const { theme } = useThemeContext();

    const styles = `
        padding:0rem 0.5rem;
        border-radius:0.25rem;
        position:absolute;
        z-index:${style.zIndex[1]};
        background-color:${getMenuBgColor(color, theme, style.colors)};
        top: ${top};
        right: ${right};
        bottom: ${bottom};
        left: ${left};
        box-shadow:${style.common.boxShadow};
    `;
    return (
        <>
            {isOpen && (
                <Container
                    type="col"
                    withBorder
                    customStyles={styles + customStyles}
                    {...rest}
                >
                    {children}
                </Container>
            )}
        </>
    );
};

export default Menu;
