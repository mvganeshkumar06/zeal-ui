import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { Container, useThemeContext } from "../../index";

const getMenuBgColor = (color, theme, colors) => {

    if (colors[color]) {
        return colors[color][3];
    }

    if (theme === "light") {
        return "white";
    }

    return colors.gray[4];
};

const MenuWrapper = styled.div`
    position: relative;
`;

const Menu = ({
    children,
    top,
    right,
    bottom,
    left,
    isOpen,
    color,
    onClickAway,
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

    const ref = useRef();

    useEffect(() => {
        if (isOpen) {
            const handleOnClickAway = (event) => {
                let clickedAway = false;
                if (ref.current) {
                    clickedAway = !ref.current.contains(event.target);
                }
                if (clickedAway) {
                    onClickAway();
                }
            };
            document.addEventListener("click", handleOnClickAway);
            return () => document.removeEventListener("click", handleOnClickAway);
        }
    }, [isOpen]);


    return (
        <>
            {isOpen && (
                <MenuWrapper>
                    <Container
                        ref={ref}
                        type="col"
                        withBorder
                        customStyles={styles + customStyles}
                        {...rest}
                    >
                        {children}
                    </Container>
                </MenuWrapper>
            )}
        </>
    );
};

export default Menu;
