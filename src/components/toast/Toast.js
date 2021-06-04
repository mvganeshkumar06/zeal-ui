import React, { useEffect } from "react";
import styled from "styled-components";
import style from "../../style/Style";

const getToastMargin = (type) => {
    if (type === "center") {
        return "0rem 0rem 1rem 0rem";
    }
    if (type === "right") {
        return "0rem 1rem 1rem 0rem";
    }
    return "0rem 0rem 1rem 1rem";
};

const getToastJustify = (type) => {
    if (type === "center") {
        return "center";
    }
    if (type === "right") {
        return "flex-end";
    }
    return "flex-start";
};

const ToastBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    ${({ style: { zIndex }, type }) => {
        return {
            zIndex: zIndex[3],
            justifyContent: getToastJustify(type),
        };
    }}
`;

const ToastStyled = styled.div`
    color: white;
    overflow: auto;
    ${({ style: { common, zIndex, colors }, color, type, width, height }) => {
        return {
            width: width,
            height: height,
            border: common.border,
            borderRadius: common.borderRadius,
            boxShadow: common.boxShadow,
            zIndex: zIndex[4],
            margin: getToastMargin(type),
            padding: common.padding,
            backgroundColor:
                color && colors[color] ? colors[color][3] : "black",
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const Toast = ({
    children,
    customStyles,
    type,
    width,
    height,
    isOpen,
    onClose,
    delay,
    color,
    ...rest
}) => {
    useEffect(() => {
        const timerID = setTimeout(() => onClose(), delay);
        return () => clearTimeout(timerID);
    });

    return (
        <>
            {isOpen && (
                <ToastBackdrop style={style} type={type}>
                    <ToastStyled
                        style={style}
                        width={width}
                        height={height}
                        type={type}
                        color={color}
                        customStyles={customStyles}
                        {...rest}
                    >
                        {children}
                    </ToastStyled>
                </ToastBackdrop>
            )}
        </>
    );
};

export default Toast;
