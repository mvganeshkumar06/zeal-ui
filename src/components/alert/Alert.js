import React from "react";
import styled from "styled-components";
import style from "../../style/Style";

const getAlertBgColor = (type, colors) => {
    if (type === "success") {
        return colors.green[2];
    }
    if (type === "warning") {
        return colors.orange[2];
    }
    if (type === "danger") {
        return colors.red[2];
    }
    if (type === "info") {
        return colors.blue[2];
    }
};

const AlertStyled = styled.div`
    ${({ style: { common, colors }, width, height, type }) => {
        return {
            width: width,
            height: height,
            padding: common.padding,
            margin: `${common.margin} 0rem`,
            borderRadius: common.borderRadius,
            color: "black",
            backgroundColor: getAlertBgColor(type, colors),
            display: "flex",
            alignItems: "center",
        };
    }}

    ${({ customStyles }) => customStyles};
`;

const Alert = ({ children, type, width, height, customStyles, ...rest }) => {
    return (
        <AlertStyled
            type={type}
            style={style}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </AlertStyled>
    );
};

export default Alert;
