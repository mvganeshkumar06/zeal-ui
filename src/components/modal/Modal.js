import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const getModalBgColor = (colors, color, theme) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return colors.gray[1];
    }
    return colors.gray[3];
};

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2d3748d8;
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
    ...rest
}) => {
    const { theme } = useThemeContext();

    return (
        <>
            {isOpen && (
                <ModalBackdrop style={style}>
                    <ModalStyled
                        style={style}
                        theme={theme}
                        width={width}
                        height={height}
                        type={type}
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
