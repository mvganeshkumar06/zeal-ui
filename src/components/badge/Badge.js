import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const getBadgeBgColor = (color, colors, theme) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return colors.gray[2];
    }
    return colors.gray[3];
};

const BadgeStyled = styled.p`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    ${({ style: { colors, common }, width, height, color, theme }) => {
        return {
            width: width,
            height: height,
            padding: `0.25rem ${common.padding}`,
            margin: `${common.margin} 0rem`,
            borderRadius: common.borderRadius,
            backgroundColor: getBadgeBgColor(color, colors, theme),
            color: (color ? "black" : (theme === "light" ? "black" : "white")),
        };
    }};
    ${({ customStyles }) => customStyles};
`;

const Badge = ({ children, customStyles, color, width, height, ...rest }) => {

    const { theme } = useThemeContext();

    return (
        <BadgeStyled
            customStyles={customStyles}
            color={color}
            style={style}
            theme={theme}
            width={width}
            height={height}
            {...rest}
        >
            {children}
        </BadgeStyled>
    );
};

export default Badge;
