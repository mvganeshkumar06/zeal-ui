import React, { forwardRef } from "react";
import styled from "styled-components";
import style from "../../style/Style";

const getFlexDirection = (type) => {
    if (type === "row") {
        return "row";
    }
    if (type === "row-reverse") {
        return "row-reverse";
    }
    if (type === "col") {
        return "column";
    }
    if (type === "col-reverse") {
        return "column-reverse";
    }
    return "row";
};

const getJustifyContent = (
    type,
    {
        rowStart,
        rowEnd,
        rowCenter,
        rowBetween,
        rowAround,
        rowEven,
        colStart,
        colEnd,
        colCenter,
        colBetween,
        colAround,
        colEven,
    }
) => {
    if ((type === "row" && rowStart) || (type === "col" && colStart)) {
        return "flex-start";
    }
    if ((type === "row" && rowEnd) || (type === "col" && colEnd)) {
        return "flex-end";
    }
    if ((type === "row" && rowCenter) || (type === "col" && colCenter)) {
        return "center";
    }
    if ((type === "row" && rowBetween) || (type === "col" && colBetween)) {
        return "space-between";
    }
    if ((type === "row" && rowAround) || (type === "col" && colAround)) {
        return "space-around";
    }
    if ((type === "row" && rowEven) || (type === "col" && colEven)) {
        return "space-evenly";
    }
    return "flex-start";
};

const getAlignItems = (
    type,
    {
        rowStart,
        rowEnd,
        rowCenter,
        rowBetween,
        rowAround,
        rowEven,
        colStart,
        colEnd,
        colCenter,
        colBetween,
        colAround,
        colEven,
    }
) => {
    if ((type === "col" && rowStart) || (type === "row" && colStart)) {
        return "flex-start";
    }
    if ((type === "col" && rowEnd) || (type === "row" && colEnd)) {
        return "flex-end";
    }
    if ((type === "col" && rowCenter) || (type === "row" && colCenter)) {
        return "center";
    }
    if ((type === "col" && rowBetween) || (type === "row" && colBetween)) {
        return "space-between";
    }
    if ((type === "col" && rowAround) || (type === "row" && colAround)) {
        return "space-around";
    }
    if ((type === "col" && rowEven) || (type === "row" && colEven)) {
        return "space-evenly";
    }
    return "flex-start";
};

const Div = styled.div`
    ${({
    type,
    width,
    height,
    style: { common },
    avatarContainer,
    withBorder,
    scrollAuto,
    children,
    ...alignOptions
}) => {
        return {
            width: width,
            height: height,
            border: `${withBorder && common.border}`,
            display: "flex",
            flexDirection: getFlexDirection(type),
            justifyContent: getJustifyContent(type, alignOptions),
            alignItems: getAlignItems(type, alignOptions),
            transformStyle: avatarContainer && "preserve-3d",
            overflow: `${scrollAuto && "auto"}`,
        };
    }};

    ${({ customStyles }) => customStyles}
`;

const Container = forwardRef(({
    children,
    type,
    rowStart,
    rowEnd,
    rowCenter,
    rowBetween,
    rowAround,
    rowEven,
    colStart,
    colEnd,
    colCenter,
    colBetween,
    colAround,
    colEven,
    customStyles,
    avatarContainer,
    withBorder,
    width,
    height,
    scrollAuto,
    as,
    ...rest
}, ref) => {
    return (
        <Div
            ref={ref}
            style={style}
            type={type}
            rowStart={rowStart}
            rowEnd={rowEnd}
            rowCenter={rowCenter}
            rowBetween={rowBetween}
            rowAround={rowAround}
            rowEven={rowEven}
            colStart={colStart}
            colEnd={colEnd}
            colCenter={colCenter}
            colBetween={colBetween}
            colAround={colAround}
            colEven={colEven}
            customStyles={customStyles}
            avatarContainer={avatarContainer}
            withBorder={withBorder}
            width={width}
            height={height}
            scrollAuto={scrollAuto}
            as={as}
            {...rest}
        >
            {children}
        </Div>
    );
});

export default Container;
