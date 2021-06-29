import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const getDividerColor = (color, theme, colors) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return "black";
    }
    return colors.gray[2];
};

const DividerStyled = styled.span`
    ${({ style: { colors }, theme, width, height, color }) => {
        return {
            display: "block",
            width: width ? width : "100%",
            marginBottom: "1rem",
            borderBottom: `${height ? height : "1px"} solid ${getDividerColor(color, theme, colors)}`,
        };
    }}

    ${({ customStyles }) => customStyles}
`;

const Divider = ({ customStyles, width, height, color, ...rest }) => {
    const { theme } = useThemeContext();
    return (
        <DividerStyled
            style={style}
            theme={theme}
            width={width}
            height={height}
            color={color}
            customStyles={customStyles}
            {...rest}
        />
    );
};

export default Divider;
