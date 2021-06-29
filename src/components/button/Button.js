import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../index";
import style from "../../style/Style";

const getBtnBgColor = (color, theme, colors) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return colors.gray[1];
    }
    return colors.gray[3];
};

const getBtnBgColorOnHover = (color, theme, colors) => {
    if (colors[color]) {
        return colors[color][4];
    }
    if (theme === "light") {
        return colors.gray[2];
    }
    return colors.gray[4];
};

const Btn = styled.button`
    ${({
    style: { common, colors },
    theme,
    color,
    type,
    width,
    height,
    round,
}) => {
        return {
            width: width,
            height: height,
            padding: `0.25rem ${common.padding}`,
            margin: `${common.margin} 0rem`,
            border: common.border,
            borderRadius: `${round ? "50%" : common.borderRadius}`,
            color: theme === "light" ? "black" : (color ? "black" : "white"),
            backgroundColor: getBtnBgColor(color, theme, colors),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: type === "floating" && "fixed",
            boxShadow: type === "floating" && common.boxShadow,
        };
    }};
    &:hover {
        ${({ theme, style: { colors }, color }) => {
        return {
            cursor: "pointer",
            backgroundColor: getBtnBgColorOnHover(color, theme, colors),
        };
    }};
    }
    ${({ customStyles }) => customStyles};
`;

const Button = ({
    children,
    color,
    type,
    customStyles,
    round,
    width,
    height,
    ...rest
}) => {
    const { theme } = useThemeContext();

    return (
        <Btn
            type={type}
            color={color}
            round={round}
            width={width}
            height={height}
            style={style}
            theme={theme}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </Btn>
    );
};

export default Button;
