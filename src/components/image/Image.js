import React from "react";
import styled from "styled-components";
import { useStyleContext, useThemeContext } from "../../index";

const getBorderRadius = (type) => {
    if (type === "row" || type === "col") {
        return "0rem";
    }
    if (type === "round") {
        return "50%";
    }
    return "0.25rem";
};

const getImageWidth = (type, width) => {
    if (type === "row") {
        return "100%";
    }
    if (type === "col") {
        return "50%";
    }
    return width;
};

const getImageHeight = (type, height) => {
    if (type === "row") {
        return "50%";
    }
    if (type === "col") {
        return "100%";
    }
    return height;
};

const ImageStyled = styled.img`
    ${({ style: { common }, type, width, height }) => {
        return {
            width: `${getImageWidth(type, width)}`,
            height: `${getImageHeight(type, height)}`,
            margin: `${(type === "row" || type === "col") ? "0rem" : `${common.margin} 0rem`}`,
            borderRadius: getBorderRadius(type),
        };
    }}
    ${({ customStyles }) => customStyles}
`;

const ImageFallback = styled(ImageStyled)`
    background-color: ${({ style: { colors }, theme }) => theme === "light" ? colors.gray[2] : colors.gray[3]};
`;

const Image = ({ src, alt, type, width, height, customStyles, ...rest }) => {

    const style = useStyleContext();
    const { theme } = useThemeContext();

    const Image = (
        <ImageStyled
            src={src}
            alt={alt}
            type={type}
            style={style}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        />
    );

    const Fallback = (
        <ImageFallback
            src="https://images.unsplash.com/photo-1600456899121-68eda5705257"
            alt={alt}
            type={type}
            style={style}
            theme={theme}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        />
    );

    return <>{src ? Image : Fallback}</>;
};

export default Image;
