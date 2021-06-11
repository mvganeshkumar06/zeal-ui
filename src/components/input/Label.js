import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import { useThemeContext } from "../../index";

const LabelStyled = styled.label`
    ${({ style: { common, colors }, theme, type }) => {
        return {
            fontSize: "0.75rem",
            padding: `0.25rem ${common.padding}`,
            margin: `${common.margin} 0rem`,
            backgroundColor:
                theme === "light" ? colors.gray[0] : colors.gray[1],
            color: "black",
            border: `2px solid ${theme === "light" ? colors.gray[1] : colors.gray[2]
                }`,
            borderTopLeftRadius: type === "left" ? common.borderRadius : "0rem",
            borderBottomLeftRadius:
                type === "left" ? common.borderRadius : "0rem",
            borderTopRightRadius:
                type === "right" ? common.borderRadius : "0rem",
            borderBottomRightRadius:
                type === "right" ? common.borderRadius : "0rem",
            borderRight: type === "left" && "none",
            borderLeft: type === "right" && "none",
        };
    }}
`;

const Label = ({ children, width, height, type, customStyles, ...rest }) => {
    const { theme } = useThemeContext();

    return (
        <LabelStyled
            style={style}
            width={width}
            height={height}
            theme={theme}
            type={type}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </LabelStyled>
    );
};

export default Label;
