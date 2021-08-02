import React from "react";
import styled from "styled-components";
import { useStyleContext, useThemeContext } from "../../index";

const ListItemStyled = styled.li`
    ${({ type, style: { common, colors }, theme, active }) => {
        return {
            padding: `${common.padding} 0rem`,
            margin: "0rem",
            listStyleType: `${type ? type : ""}`,
            backgroundColor: active ? (theme === "light" ? colors.gray[2] : colors.gray[4]) : ""
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const ListItem = ({ type, children, active, customStyles, ...rest }) => {
    const style = useStyleContext();
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
