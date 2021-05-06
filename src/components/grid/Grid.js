import React from "react";
import styled from "styled-components";
import style from "../../style/Style";

const Div = styled.div`
    ${({ row, col, type, style: { common } }) => {
        return {
            border: type === "table" ? common.border : "none",
            display: "grid",
            gridTemplateColumns: `repeat(${col}, 1fr)`,
            gridTemplateRows: `repeat(${row}, 1fr)`,
        };
    }};
    ${({ customStyles }) => customStyles}
`;

const Grid = ({ children, row, col, type, customStyles, ...rest }) => {
    return (
        <Div
            style={style}
            row={row}
            col={col}
            type={type}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </Div>
    );
};

export default Grid;
