import React, { useState } from "react";
import { useStyles, Container, Text, List, ListItem } from "../../index";
import { Arrow } from "../../icons/index";

const Sidebar = ({ contents, showSidebar }) => {

    if (!contents || !contents.links) {
        throw { message: "Missing property in sidebar contents" };
    }

    for (const item of contents.links) {
        if (!item.label || !item.items) {
            throw { message: "Missing property in sidebar contents" };
        }
        for (const subItem of item.items) {
            if (!subItem.item || !subItem.to) {
                throw { message: "Missing property in sidebar contents" };
            }
        }
    }

    const styles = useStyles((style, theme) => `
        height:100vh;
        position:fixed;
        top:4rem;
        background-color: ${theme === "light" ? "white" : style.colors.gray[5]};
        border-right: 1px solid ${style.colors.gray[3]};
        z-index: ${style.zIndex[2]};
        
        .sidebarContainer{
            width:100vw;
            height:100%;
            padding:2rem 1rem;
            box-sizing:border-box;
            overflow:auto;
        }

        .listItem{
            width:100%;
        }

        .subHeading{
            width:100%;
            padding-left:1rem;
            box-sizing:border-box;
        }

        @media(min-width:1024px){
            position:sticky;

            .sidebarContainer{
                width:18rem;
            }
        } 
    `);

    const contentsLabel = {};
    for (let content of contents.links) {
        contentsLabel[content.label] = false;
    }

    const [showContents, setShowContents] = useState(contentsLabel);

    const toggleContent = (key) => {
        if (showContents.hasOwnProperty(key)) {
            setShowContents({ ...showContents, [key]: !showContents[key] });
        }
    };

    const showArrows = (label, labelIsOpened) => {
        if (labelIsOpened) {
            return <Arrow type="bottom" onClick={() => toggleContent(label)} />;
        }
        return <Arrow type="right" onClick={() => toggleContent(label)} />;
    };

    return (
        <Container as="aside" type="col" customStyles={styles}>
            {showSidebar && (
                <Container type="col" className="sidebarContainer">
                    {contents.links.map(({ label, items }) => (
                        <Container type="col" width="100%" key={label}>
                            <Container type="row" width="100%" rowBetween colCenter>
                                <Text>{label}</Text>
                                {items.length > 0 && showArrows(label, showContents[label])}
                            </Container>
                            {showContents[label] && (
                                <List type="link" className="listItem">
                                    {items.map(({ item, to }) => <a href={to} key={item}><ListItem className="subHeading">{item}</ListItem></a>)}
                                </List>
                            )}
                        </Container>
                    ))}
                </Container>
            )}
        </Container>
    );

};

export default Sidebar;