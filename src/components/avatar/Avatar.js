import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../index";
import style from "../../style/Style";

const AvatarStyled = styled.img`
    border-radius: 50%;
    position: relative;
    ${({ avatarItem, width, height, style: { colors }, theme }) => {
        return {
            width: width,
            height: height,
            border: `2px solid ${
                theme === "light" ? colors.gray[2] : colors.gray[3]
            }`,
            marginLeft: avatarItem && "-1rem",
        };
    }};

    ${({ customStyles }) => customStyles}
`;

const Div = styled.div`
    width: fit-content;
    position: relative;
    ${({ avatarItem }) => {
        return {
            transform: avatarItem && "rotateY(-1deg)",
        };
    }}
`;

const AvatarFallback = styled(AvatarStyled)`
    background-color: ${({ style: { colors } }) => colors.gray[2]};
`;

const Avatar = ({
    src,
    alt,
    badge,
    avatarItem,
    width,
    height,
    customStyles,
    ...rest
}) => {
    const { theme } = useThemeContext();

    const Avatar = (
        <AvatarStyled
            src={src}
            alt={alt}
            avatarItem={avatarItem}
            style={style}
            theme={theme}
            width={width}
            height={height}
            customStyles={customStyles}
            {...rest}
        />
    );

    const Fallback = <AvatarFallback style={style} {...rest} />;

    return (
        <Div avatarItem={avatarItem}>
            {src ? Avatar : Fallback}
            {badge}
        </Div>
    );
};

export default Avatar;
