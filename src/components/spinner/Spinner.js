import React from "react";
import styled from "styled-components";
import { useStyleContext, useThemeContext } from "../../index";

const getSpinnerColor = (colors, color, theme) => {
    if (colors[color]) {
        return colors[color][3];
    }
    if (theme === "light") {
        return "black";
    }

    return "white";
};

const Div = styled.div`
    display: inline-block;
    border-radius: 50%;
    animation: spin 1s ease-in-out infinite;
    ${({ style: { colors, common }, theme, color, width, height }) => {
        return {
            width: width ? width : "3rem",
            height: height ? height : "3rem",
            marginTop: common.margin,
            border: `4px solid ${theme === "light"
                ? colors.gray[2]
                : colors.gray[4]
                }`,
            borderTopColor: getSpinnerColor(colors, color, theme),
        };
    }}

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

const Spinner = ({ color, width, height }) => {
    const style = useStyleContext();
    const { theme } = useThemeContext();
    return (
        <Div
            style={style}
            theme={theme}
            color={color}
            width={width}
            height={height}
        />
    );
};

export default Spinner;
