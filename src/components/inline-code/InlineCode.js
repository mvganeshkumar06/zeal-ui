import React from "react";
import styled from "styled-components";
import style from "../../style/Style";

const InlineCodeStyled = styled.span`
    ${({ style: { common, colors }, width, height }) => {
        return {
            width: width,
            height: height,
            padding: `0.25rem ${common.padding}`,
            margin: "0.25rem",
            borderRadius: common.borderRadius,
            color: "black",
            backgroundColor: colors.gray[2],
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const InlineCode = ({ children, customStyles, width, height, ...rest }) => {
    return (
        <InlineCodeStyled
            style={style}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </InlineCodeStyled>
    );
};

export default InlineCode;
