import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const getInlineCodeBgColor = (color, theme, colors) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return colors.gray[0];
    }
    return colors.gray[1];
};

const InlineCodeStyled = styled.span`
    ${({ style: { common, colors }, theme, width, height, color }) => {
        return {
            width: width,
            height: height,
            padding: `0.25rem ${common.padding}`,
            margin: "0.25rem",
            borderRadius: common.borderRadius,
            color: "black",
            backgroundColor: getInlineCodeBgColor(color, theme, colors),
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const InlineCode = ({ children, customStyles, width, height, color, ...rest }) => {
    const { theme } = useThemeContext();

    return (
        <InlineCodeStyled
            style={style}
            theme={theme}
            width={width}
            height={height}
            color={color}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </InlineCodeStyled>
    );
};

export default InlineCode;
