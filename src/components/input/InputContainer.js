import React from "react";
import { Container } from "../../index";

const InputContainer = ({ children, width, height, customStyles, ...rest }) => {
    const styles = `
        input{
            border-radius:0rem;
        }
    `;

    return (
        <Container
            type="row"
            colCenter
            width={width}
            height={height}
            customStyles={styles + customStyles}
            {...rest}
        >
            {children}
        </Container>
    );
};

export default InputContainer;
