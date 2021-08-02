import React from "react";
import styled from "styled-components";
import { useStyleContext, useThemeContext } from "../../index";

const getArrowColor = (theme, colors, color) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return colors.gray[3];
    }
    return colors.gray[2];
};

const TopArrow = styled.span`
    border: ${({ style: { colors }, theme, color }) => `solid ${getArrowColor(theme, colors, color)}`};
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 4px;
    box-sizing:border-box;
    transform: rotate(-135deg);
    ${({ customStyles }) => customStyles};
`;

const BottomArrow = styled(TopArrow)`
    transform: rotate(45deg);
`;

const LeftArrow = styled(TopArrow)`
    transform: rotate(135deg);
`;

const RightArrow = styled(TopArrow)`
    transform: rotate(-45deg);
`;

const Arrow = ({ type, color, customStyles, ...rest }) => {

    const style = useStyleContext();
    const { theme } = useThemeContext();

    if (type === "top") {
        return <TopArrow style={style} theme={theme} color={color} customStyles={customStyles} {...rest} />;
    }
    if (type === "bottom") {
        return <BottomArrow style={style} theme={theme} color={color} customStyles={customStyles} {...rest} />;
    }
    if (type === "left") {
        return <LeftArrow style={style} theme={theme} color={color} customStyles={customStyles} {...rest} />;
    }
    return <RightArrow style={style} theme={theme} color={color} customStyles={customStyles} {...rest} />;
};

export default Arrow;