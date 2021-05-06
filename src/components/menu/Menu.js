import React from "react";
import style from "../../style/Style";
import { Container, useThemeContext } from "../../index";

const Menu = ({
    children,
    top,
    right,
    bottom,
    left,
    isOpen,
    customStyles,
    ...rest
}) => {
    const { theme } = useThemeContext();

    const styles = `
        padding:0rem 0.5rem;
        border-radius:0.25rem;
        position:absolute;
        z-index:${style.zIndex[1]};
        background-color:${theme === "light" ? "white" : style.colors.gray[4]};
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
