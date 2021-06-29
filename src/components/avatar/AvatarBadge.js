import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../index";
import style from "../../style/Style";

const AvatarBadgeStyled = styled.span`
    border-radius: 50%;
    position: absolute;
    bottom: 5%;
    right: 3%;
    ${({ style: { colors }, color, width, height, theme }) => {
        return {
            width: width,
            height: height,
            border: `2px solid ${theme === "light" ? colors.gray[2] : colors.gray[3]}`,
            backgroundColor: (colors[color] ? colors[color][3] : (theme === "light" ? colors.gray[3] : colors.gray[2])),
        };
    }}

    ${({ customStyles }) => customStyles};
`;

const AvatarBadge = ({ color, customStyles, width, height, ...rest }) => {
    const { theme } = useThemeContext();
    return (
        <AvatarBadgeStyled
            color={color}
            style={style}
            theme={theme}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        />
    );
};

export default AvatarBadge;
