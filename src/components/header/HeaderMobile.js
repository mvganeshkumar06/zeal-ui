import React from "react";
import { useStyles, Container, List, ListItem } from "../../index";

const HeaderMobile = ({ contents }) => {

    if (!contents || !contents.links) {
        throw { message: "Missing property in header contents" };
    }

    for (const item of contents.links) {
        if (!item.item || !item.to || !item.linkType || !item.position) {
            throw { message: "Missing property in header contents" };
        }
    }

    const styles = useStyles((style, theme) => `
        position:fixed;
        top:4rem;
        background-color: ${theme === "light" ? "white" : style.colors.gray[5]};
        border-right: 1px solid ${style.colors.gray[3]};
        padding:2rem 1rem;
        box-sizing:border-box;
        z-index: ${style.zIndex[2]};

        .headerItem{
            width:100%;
            text-align:center;
            margin:0.75rem 0rem;
        }  
    `);

    return (
        <Container as="nav" type="col" width="100vw" height="100vh" rowCenter customStyles={styles}>
            <List type="link">
                {contents.links.map(({ item, to, linkType }) => {
                    if (linkType === "external") {
                        return (
                            <ListItem key={item} className="headerItem">
                                <a href={to} target="_blank">{item}</a>
                            </ListItem>
                        );
                    }
                    else if (linkType === "internal") {
                        return (
                            <ListItem key={item} className="headerItem">
                                <a href={to}>{item}</a>
                            </ListItem>
                        );
                    }
                })}
            </List>
        </Container>
    );

};

export default HeaderMobile;