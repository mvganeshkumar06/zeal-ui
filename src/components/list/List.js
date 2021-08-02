import React from "react";
import styled from "styled-components";
import { useStyleContext, useThemeContext } from "../../index";

const UnorderedList = styled.ul`
    margin: ${({ style: { common } }) => `${common.margin} 0rem`};
    li {
        margin-left: 1rem;
    }
    ${({ customStyles }) => customStyles}
`;

const OrderedList = styled.ol`
    margin: ${({ style: { common } }) => `${common.margin} 0rem`};
    li {
        margin-left: 1rem;
    }
    ${({ customStyles }) => customStyles}
`;

const StackedList = styled.ul`
    li {
        ${({ style: { common } }) => {
        return {
            paddingLeft: common.padding,
            paddingRight: common.padding,
            listStyleType: "none",
            border: common.border,
            borderBottom: "none",
        };
    }};
    }
    li:last-child {
        border-bottom: ${({ style: { common } }) => common.border};
    }
    ${({ customStyles }) => customStyles};
`;

const ListLink = styled.ul`
    li {
        list-style-type: none;
        ${({ style: { common } }) => {
        return {
            margin: `${common.margin} 0rem`,
            paddingLeft: common.padding,
            paddingRight: common.padding,
            borderRadius: common.borderRadius,
        };
    }}
    }
    li:hover {
        cursor: pointer;
        background-color: ${({ style: { colors }, theme }) => theme === "light" ? colors.gray[2] : colors.gray[4]};
    }
    ${({ customStyles }) => customStyles};
`;

const List = ({ type, children, customStyles, ...rest }) => {
    const style = useStyleContext();
    const { theme } = useThemeContext();
    if (type === "ol") {
        return (
            <OrderedList style={style} customStyles={customStyles} {...rest}>
                {children}
            </OrderedList>
        );
    }
    if (type === "stacked") {
        return (
            <StackedList style={style} customStyles={customStyles} {...rest}>
                {children}
            </StackedList>
        );
    }

    if (type === "link") {
        return (
            <ListLink
                style={style}
                theme={theme}
                customStyles={customStyles}
                {...rest}
            >
                {children}
            </ListLink>
        );
    }

    return (
        <UnorderedList style={style} customStyles={customStyles} {...rest}>
            {children}
        </UnorderedList>
    );
};

export default List;
