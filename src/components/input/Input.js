import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const getBorderColor = (colors, theme, isInvalid) => {
    if (isInvalid) {
        return colors.red[3];
    }
    if (theme === "light") {
        return colors.gray[2];
    }
    return colors.gray[3];
};

const getFocusColor = (colors, focusColor, theme) => {
    if (colors[focusColor]) {
        return colors[focusColor][3];
    }
    if (theme === "light") {
        return "black";
    }
    return "white";
};

const InputStyled = styled.input`
    ${({ style: { common, colors }, width, height, isInvalid, theme }) => {
        return {
            width: width,
            height: height,
            padding: `0.25rem ${common.padding}`,
            margin: `${common.margin} 0rem`,
            border: `2px solid ${getBorderColor(colors, theme, isInvalid)}`,
            borderRadius: common.borderRadius,
            color: theme === "light" ? "black" : "white",
            backgroundColor: theme === "light" ? "white" : colors.gray[4],
        };
    }}

    &:focus {
        outline: none;
        border: ${({ style: { colors }, theme, focusColor }) =>
            `2px solid ${getFocusColor(colors, focusColor, theme)}`};
    }

    &::placeholder {
        color: ${({ style: { colors } }) => colors.gray[3]};
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${({ customStyles }) => customStyles};
`;

const Input = ({
    width,
    height,
    isInvalid,
    focusColor,
    customStyles,
    ...rest
}) => {
    const { theme } = useThemeContext();

    return (
        <InputStyled
            style={style}
            theme={theme}
            width={width}
            height={height}
            isInvalid={isInvalid}
            focusColor={focusColor}
            customStyles={customStyles}
            {...rest}
        />
    );
};

export default Input;
