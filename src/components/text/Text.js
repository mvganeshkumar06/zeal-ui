import React from "react";
import styled from "styled-components";
import style from "../../style/Style";

const MainHeadingStyled = styled.h1`
    ${({ style: { colors }, center, bold, size, color }) => {
        return {
            margin: "1.5rem 0rem",
            textAlign: center && "center",
            fontWeight: bold && "bold",
            fontSize: size && size,
            color: color && colors[color][2],
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const SubHeadingStyled = styled.h2`
    ${({ style: { colors }, center, bold, size, color }) => {
        return {
            margin: "1.25rem 0rem",
            textAlign: center && "center",
            fontWeight: bold && "bold",
            fontSize: size && size,
            color: color && colors[color][2],
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const TextStyled = styled.p`
    ${({
        style: { colors },
        center,
        bold,
        size,
        color,
        width,
        height,
        scrollAuto,
    }) => {
        return {
            width: width,
            height: height,
            margin: "0.5rem 0rem",
            textAlign: center && "center",
            fontWeight: bold && "bold",
            fontSize: size && size,
            color: color && colors[color][2],
            overflow: scrollAuto && "auto",
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const Text = ({
    children,
    type,
    center,
    bold,
    size,
    color,
    scrollAuto,
    width,
    height,
    customStyles,
    ...rest
}) => {
    if (type === "mainHeading") {
        return (
            <MainHeadingStyled
                center={center}
                bold={bold}
                size={size}
                color={color}
                style={style}
                customStyles={customStyles}
                {...rest}
            >
                {children}
            </MainHeadingStyled>
        );
    }
    if (type === "subHeading") {
        return (
            <SubHeadingStyled
                center={center}
                bold={bold}
                size={size}
                color={color}
                style={style}
                customStyles={customStyles}
                {...rest}
            >
                {children}
            </SubHeadingStyled>
        );
    }
    return (
        <TextStyled
            center={center}
            bold={bold}
            size={size}
            color={color}
            style={style}
            scrollAuto={scrollAuto}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </TextStyled>
    );
};

export default Text;
