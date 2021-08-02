import React from "react";
import { Container, Text, Image, useStyles } from "../../index";

const Footer = ({ contents }) => {

    if (!contents || !contents.links) {
        throw { message: "Missing property in footer contents" };
    }

    for (const link of contents.links) {
        if (!link.title || !link.items) {
            throw { message: "Missing property in footer contents" };
        }
        for (const item of link.items) {
            if (!item.item || !item.to || !item.linkType) {
                throw { message: "Missing property in footer contents" };
            }
        }
    }

    const styles = useStyles((style, theme) => `
        margin-top:auto;
        background-color:${theme === "light" ? style.colors.gray[1] : style.colors.gray[4]};
        padding:1rem;
        box-sizing:border-box;

        .footerLinks{
            margin-bottom:2rem;
        }

        .footerLink{
            margin:0.25rem 0rem;
        }
      
        .footerLogo{
            margin:0.25rem 0rem;
            object-fit:cover;
        }   
        
        @media(min-width:768px){
            .footerLinks{
                flex-direction:row;
                justify-content:space-evenly;
            }
            .footerItem{
                width:auto;
            }
        }
    `);

    return (
        <Container as="footer" type="col" width="100%" colCenter customStyles={styles}>
            <Container type="col" width="100%" rowCenter className="footerLinks">
                {contents.links?.map(({ title, items }) => {
                    return (
                        <Container type="col" width="100%" rowCenter className="footerItem" key={title}>
                            <Text bold>{title}</Text>
                            {items.map(({ item, to, linkType }) => {
                                if (linkType === "external") {
                                    return <a href={to} target="_blank" key={item} className="footerLink">{item}</a>;
                                }
                                else if (linkType === "internal") {
                                    return <a href={to} key={item} className="footerLink">{item}</a>;
                                }
                            })}
                        </Container>
                    );
                })}
            </Container>
            <Container type="col" width="100%" rowCenter>
                {contents.logo && <Image src={contents.logo.src} alt={contents.logo.alt} width="4rem" height="4rem" className="footerLogo" />}
                {contents.title && <Text bold>{contents.title}</Text>}
                {contents.copyright && <Text>{contents.copyright}</Text>}
            </Container>
        </Container>
    );

};

export default Footer;