import React from "react";
import styled from "styled-components";
import { useStyleContext } from "../../index";

const MainHeadingStyled = styled.h1`
    ${({ style: { colors }, center, bold, size, color, width, height, }) => {
        return {
            width: width,
            height: height,
            textAlign: center ? "center" : "",
            fontWeight: bold ? "bold" : "",
            fontSize: size ? size : "",
            color: color ? colors[color][3] : "",
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const SubHeadingStyled = styled.h2`
    ${({ style: { colors }, center, bold, size, color, width, height, }) => {
        return {
            width: width,
            height: height,
            textAlign: center ? "center" : "",
            fontWeight: bold ? "bold" : "",
            fontSize: size ? size : "",
            color: color ? colors[color][3] : "",
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
            textAlign: center ? "center" : "",
            fontWeight: bold ? "bold" : "",
            fontSize: size ? size : "",
            color: colors[color] ? colors[color][3] : "",
            overflow: scrollAuto ? "auto" : "",
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
    const style = useStyleContext();
    if (type === "mainHeading") {
        return (
            <MainHeadingStyled
                center={center}
                bold={bold}
                size={size}
                color={color}
                width={width}
                height={height}
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
                width={width}
                height={height}
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
