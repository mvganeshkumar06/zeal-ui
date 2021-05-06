import React from "react";
import styled from "styled-components";

const SpanStyled = styled.span`
    ${({ customStyles }) => customStyles}
`;

const Span = ({ customStyles, children, ...rest }) => {
    return (
        <SpanStyled customStyles={customStyles} {...rest}>
            {children}
        </SpanStyled>
    );
};

export default Span;
