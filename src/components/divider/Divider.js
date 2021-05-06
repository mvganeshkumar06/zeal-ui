import React from "react";
import styled from "styled-components";
import style from "../../style/Style";

const DividerStyled = styled.span`
    ${({ style: { common, colors }, width }) => {
        return {
            display: "block",
            width: width ? width : "100%",
            marginBottom: "1rem",
            borderBottom: `1px solid ${colors.gray[2]}`,
        };
    }}

    ${({ customStyles }) => customStyles}
`;

const Divider = ({ customStyles, width, ...rest }) => {
    return (
        <DividerStyled
            style={style}
            width={width}
            customStyles={customStyles}
            {...rest}
        />
    );
};

export default Divider;
