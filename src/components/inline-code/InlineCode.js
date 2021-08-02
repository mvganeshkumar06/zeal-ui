import React from "react";
import styled from "styled-components";
import { useStyleContext } from "../../index";

const getInlineCodeBgColor = (color, colors) => {
    if (colors[color]) {
        return colors[color][3];
    }
    return colors.gray[2];
};

const InlineCodeStyled = styled.span`
    ${({ style: { common, colors }, width, height, color }) => {
        return {
            width: width,
            height: height,
            padding: `0.25rem ${common.padding}`,
            margin: "0.25rem",
            borderRadius: common.borderRadius,
            color: "black",
            backgroundColor: getInlineCodeBgColor(color, colors),
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const InlineCode = ({ children, customStyles, width, height, color, ...rest }) => {
    const style = useStyleContext();
    return (
        <InlineCodeStyled
            style={style}
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
