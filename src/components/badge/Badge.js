import React from "react";
import styled from "styled-components";
import style from "../../style/Style";

const getBadgeBgColor = (type, colors) => {
    if (type === "success") {
        return colors.green[2];
    }
    if (type === "danger") {
        return colors.red[2];
    }
    if (type === "new") {
        return colors.orange[2];
    }
    return colors.gray[2];
};

const getBadgeColor = (type, colors) => {
    if (type === "success") {
        return colors.green[4];
    }
    if (type === "danger") {
        return colors.red[4];
    }
    if (type === "new") {
        return colors.orange[4];
    }
    return "black";
};

const BadgeStyled = styled.p`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    ${({ type, style: { colors, common }, width, height }) => {
        return {
            width: width,
            height: height,
            padding: `0.25rem ${common.padding}`,
            margin: `${common.margin} 0rem`,
            borderRadius: common.borderRadius,
            backgroundColor: getBadgeBgColor(type, colors),
            color: getBadgeColor(type, colors),
        };
    }};
    ${({ customStyles }) => customStyles};
`;

const Badge = ({ children, customStyles, type, width, height, ...rest }) => {
    return (
        <BadgeStyled
            customStyles={customStyles}
            type={type}
            style={style}
            width={width}
            height={height}
            {...rest}
        >
            {children}
        </BadgeStyled>
    );
};

export default Badge;
