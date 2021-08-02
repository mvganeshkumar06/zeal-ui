import React, { useEffect, useState } from "react";
import { Container, useStyles } from "../../index";

const MenuBar = ({ showSidebar, setShowSidebar, ...rest }) => {

    const styles = useStyles((style, theme) => `
        .menuBar:hover {
            cursor: pointer;
        }

        .bar1, .bar2, .bar3 {
            width: 1.5rem;
            height: 0.25rem;
            background-color: ${theme === "light" ? "black" : "white"};
            margin: 2px 0;
            transition: 0.5s;
        }
        
        .menuOpen .bar1 {
            transform: rotate(-45deg) translate(-5.5px, 5px);
        }
        
        .menuOpen .bar2 {
            opacity: 0;
        }
        
        .menuOpen .bar3 {
            transform: rotate(45deg) translate(-6px, -6px);
        }
    `);

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (showSidebar) {
            setMenuOpen(true);
        }
        else {
            setMenuOpen(false);
        }
    }, [showSidebar]);

    return (
        <Container type="col" customStyles={styles} {...rest}>
            <Container type="col" width="3rem" height="3rem" rowCenter colCenter className={`menuBar ${menuOpen ? "menuOpen" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </Container>
        </Container>
    );
};

export default MenuBar;