import React, { useEffect, useState } from "react";
import useLayoutContext from "../../hooks/useLayoutContext";
import { Container, useStyles, Header, Sidebar, Footer, useMediaQuery, Alert } from "../../index";
import HeaderMobile from "../header/HeaderMobile";
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error }) => {
    return (
        <Container type="col" width="100%" rowCenter>
            <Alert type="danger">
                Something went wrong - {error.message}
            </Alert>
        </Container>
    );
};

const Layout = ({ title, children, disableSidebar }) => {

    const styles = useStyles((style, theme) => `
        .document{
            width:100vw;
            min-height:100vh;
        }

        @media(min-width:1024px){
            .document{
                margin:2rem;
            }

            .sidebarOpened{
                width:calc(100% - 18rem);
            }

            .sidebarClosed{
                width:100%;
            }
        }
    `);

    const { headerContents, sidebarContents, footerContents } = useLayoutContext();
    const [showHeaderMobile, setShowHeaderMobile] = useState(false);
    const [isDesktop] = useMediaQuery(["(min-width: 1024px)"]);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const base = document.title.split("|")[0];
        if (title) {
            document.title = `${base} | ${title}`;
        }
        else {
            document.title = base;
        }
    }, [title]);

    useEffect(() => {
        if (isDesktop) {
            setShowSidebar(true);
            setShowHeaderMobile(false);
        }
        else {
            setShowSidebar(false);
        }
    }, [isDesktop]);

    const headerProps = {
        contents: headerContents,
        showSidebar,
        setShowSidebar,
        isDesktop,
        showHeaderMobile,
        setShowHeaderMobile
    };

    return (
        <Container type="col" customStyles={styles}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Header {...headerProps} />
                <Container type="row" width="100%">
                    {!disableSidebar && <Sidebar contents={sidebarContents} showSidebar={showSidebar} />}
                    {showHeaderMobile && <HeaderMobile contents={headerContents} />}
                    <Container type="col" className={`document ${showSidebar ? "sidebarOpened" : "sidebarClosed"}`}>
                        {children}
                    </Container>
                </Container>
                <Footer contents={footerContents} />
            </ErrorBoundary>
        </Container>
    );

};

export default Layout;