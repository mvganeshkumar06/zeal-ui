import React from "react";
import { Container } from "../../index";

const AvatarContainer = ({ children, customStyles, ...rest }) => {
    return (
        <Container
            type="row"
            avatarContainer
            customStyles={customStyles}
            rest={rest}
        >
            {children}
        </Container>
    );
};

export default AvatarContainer;
