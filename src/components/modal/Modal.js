import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const getModalBgColor = (colors, color, theme) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return "white";
    }
    return colors.gray[2];
};

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme === "light" ? "rgba(228, 232, 241, 0.85)" : "rgba(24, 31, 37, 0.85)"};
    z-index: ${({ style: { zIndex } }) => zIndex[3]};
    display: flex;
    justify-content: center;
`;

const ModalStyled = styled.div`
    overflow: auto;
    position: relative;
    ${({
    style: { common, zIndex, colors },
    type,
    width,
    height,
    color,
    theme,
}) => {
        return {
            width: width,
            height: height,
            backgroundColor: getModalBgColor(colors, color, theme),
            color: "black",
            border: common.border,
            borderRadius: common.borderRadius,
            boxShadow: common.boxShadow,
            zIndex: zIndex[4],
            marginTop: `${type === "center" ? "auto" : "5rem"}`,
            marginBottom: `${type === "center" && "auto"}`,
            padding: common.padding,
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const Modal = ({
    children,
    customStyles,
    type,
    width,
    height,
    isOpen,
    color,
    onClickAway,
    ...rest
}) => {
    const { theme } = useThemeContext();

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
                <ModalBackdrop style={style} theme={theme} className="modalBackdrop">
                    <ModalStyled
                        ref={ref}
                        style={style}
                        theme={theme}
                        width={width}
                        height={height}
                        type={type}
                        color={color}
                        customStyles={customStyles}
                        {...rest}
                    >
                        {children}
                    </ModalStyled>
                </ModalBackdrop>
            )}
        </>
    );
};

export default Modal;
