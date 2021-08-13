import React from "react";
import { Container, Text, Image, useStyles, ThemeSwitch } from "../../index";
import { MenuBar, VerticalDots } from "../../icons/index";

const Header = ({ contents, showSidebar, setShowSidebar, isDesktop, showHeaderMobile, setShowHeaderMobile }) => {

    if (!contents || !contents.links) {
        throw { message: "Missing property in header contents" };
    }

    for (const item of contents.links) {
        if (!item.item || !item.to || !item.linkType || !item.position) {
            throw { message: "Missing property in header contents" };
        }
    }

    const styles = useStyles((style, theme) => `
        background-color:${theme === "light" ? "white" : style.colors.gray[4]};
        box-shadow:${style.common.boxShadow[2]};
        position:sticky;
        top:0;
        z-index:${style.zIndex[3]};
        padding-left:0.25rem;
        padding-right:0.25rem;
        box-sizing:border-box;

        .headerLogo{
            margin:0rem 0.5rem;
            object-fit:cover;
        }

        .headerItem{
            margin:0rem 0.5rem;
        }
    `);

    let itemsLeft = [], itemsRight = [];
    contents.links.map((item) => {
        if (item.position === "left") {
            itemsLeft.push(item);
        }
        else if (item.position === "right") {
            itemsRight.push(item);
        }
    });

    return (
        <Container as="nav" type="row" width="100%" height="4rem" rowBetween colCenter customStyles={styles}>
            <Container type="row" height="100%" colCenter key="left">
                <MenuBar onClick={() => setShowSidebar(!showSidebar)} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                {contents.logo && <Image src={contents.logo.src} alt={contents.logo.alt} width="2.5rem" height="2.5rem" className="headerLogo" />}
                <Text bold>{contents.title}</Text>
                {isDesktop && itemsLeft.map(({ item, to, linkType }) => {
                    if (linkType === "external") {
                        return <a href={to} target="_blank" key={item} className="headerItem">{item}</a>;
                    }
                    else if (linkType === "internal") {
                        return <a href={to} key={item} className="headerItem">{item}</a>;
                    }
                })}
            </Container>
            <Container type="row" height="100%" colCenter key="right">
                {isDesktop && itemsRight.map(({ item, to, linkType }) => {
                    if (linkType === "external") {
                        return <a href={to} target="_blank" key={item} className="headerItem">{item}</a>;
                    }
                    else if (linkType === "internal") {
                        return <a href={to} key={item} className="headerItem">{item}</a>;
                    }
                })}
                <ThemeSwitch />
                {!isDesktop && <VerticalDots className="verticalDots" onClick={() => setShowHeaderMobile(!showHeaderMobile)} />}
            </Container>
        </Container>
    );
};

export default Header;