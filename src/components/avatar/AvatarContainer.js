import React from "react";
import { Container } from "../../index";

const AvatarContainer = ({ children, ...rest }) => {
    const styles = `   
        margin-left: 1rem;
    `;

    return (
        <Container
            type="row"
            avatarContainer
            className="avatarContainer"
            customStyles={styles}
            rest={rest}
        >
            {children}
        </Container>
    );
};

export default AvatarContainer;
