import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const getSpinnerColor = (colors, color, theme) => {
    if (colors[color]) {
        return colors[color][2];
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
    ${({ style: { colors }, theme, color, width, height }) => {
        return {
            width: width ? width : "3rem",
            height: height ? height : "3rem",
            border: `4px solid ${
                theme === "light"
                    ? "rgba(0, 0, 0, 0.1)"
                    : "rgba(255, 255, 255, 0.1)"
            }`,
            borderTopColor: getSpinnerColor(colors, color, theme),
        };
    }}

    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;

const Spinner = ({ color, width, height }) => {
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
