import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../index";
import style from "../../style/Style";

const ListItemStyled = styled.li`
    ${({ type, style: { common, colors }, theme, active }) => {
        return {
            padding: `${common.padding} 0rem`,
            margin: "0rem",
            listStyleType: `${type ? type : ""}`,
            backgroundColor: active ? (theme === "light" ? colors.gray[0] : colors.gray[3]) : ""
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const ListItem = ({ type, children, active, customStyles, ...rest }) => {
    const { theme } = useThemeContext();
    return (
        <ListItemStyled
            type={type}
            style={style}
            theme={theme}
            active={active}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </ListItemStyled>
    );
};

export default ListItem;
