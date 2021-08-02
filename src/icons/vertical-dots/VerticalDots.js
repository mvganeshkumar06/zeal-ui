import React from "react";
import { Container, useStyles } from "../../index";

const VerticalDots = ({ color, customStyles, ...rest }) => {
    const styles = useStyles((style, theme) => `
        position:relative;
        margin:0rem 0.25rem;
        &:hover{
            cursor: pointer;
        }
        .dots{
            width: 6px;
            height: 6px;
            position:absolute;
            top:0.5rem;
            bottom:0.5rem;
            border-radius: 50%;
            background-color: ${theme === "light" ? "black" : "white"};
            box-shadow: 0px 10px 0px ${theme === "light" ? "black" : "white"}, 0px 20px 0px ${theme === "light" ? "black" : "white"};
        }
    `);
    return (
        <Container type="col" width="1.5rem" height="2.5rem" rowCenter colCenter customStyles={styles} {...rest}>
            <div className="dots" />
        </Container>
    );
};

export default VerticalDots;