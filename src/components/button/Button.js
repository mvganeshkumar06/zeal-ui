import React from "react";
import styled from "styled-components";
import { useStyleContext, useThemeContext } from "../../index";

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
    top,
    right,
    bottom,
    left
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
            position: type === "floating" ? "fixed" : "",
            boxShadow: type === "floating" ? common.boxShadow[2] : "",
            top: top ? top : "",
            right: right ? right : "",
            bottom: bottom ? bottom : "",
            left: left ? left : "",
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
    top,
    right,
    bottom,
    left,
    ...rest
}) => {
    const style = useStyleContext();
    const { theme } = useThemeContext();

    return (
        <Btn
            type={type}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
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
