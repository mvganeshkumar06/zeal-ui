import React from "react";
import styled from "styled-components";

const AvatarStyled = styled.img`
    border-radius: 50%;
    position: relative;
    ${({ width, height }) => {
        return {
            width: width,
            height: height,
        };
    }};

    ${({ customStyles }) => customStyles}
`;

const AvatarFallback = styled(AvatarStyled)``;

const Div = styled.div`
    width: fit-content;
    position: relative;
`;

const Avatar = ({
    src,
    alt,
    badge,
    width,
    height,
    customStyles,
    ...rest
}) => {

    const Avatar = (
        <AvatarStyled
            src={src}
            alt={alt}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        />
    );

    const Fallback = (
        <AvatarFallback
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt={alt}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        />
    );

    return (
        <Div>
            {src ? Avatar : Fallback}
            {badge}
        </Div>
    );
};

export default Avatar;
