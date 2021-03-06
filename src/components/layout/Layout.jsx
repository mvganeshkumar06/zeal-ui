import React, { useEffect, useState } from 'react';
import { Container, useMediaQuery } from '../../index';
import { useTheme } from 'styled-components';
import LayoutStyled from './LayoutStyled';
import Header from './../header/Header';
import Sidebar from './../sidebar/Sidebar';
import SidebarMobile from './../sidebar/SidebarMobile';
import Overview from './../overview/Overview';
import Footer from './../footer/Footer';
import useLayout from '../../hooks/use-layout';

const Layout = ({
	title,
	sidebarContents: sidebarContentsOnCurrentPage,
	disableHeader: disableHeaderOnCurrentpage,
	disableFooter: disableFooterOnCurrentpage,
	enableSidebar: enableSidebarOnCurrentPage,
	enableOverview: enableOverviewOnCurrentPage,
	children,
	...rest
}) => {
	const {
		headerContents,
		sidebarContents,
		footerContents,
		disableHeader,
		disableFooter,
		enableSidebar,
		enableOverview,
	} = useLayout();

	const headerDisabled = disableHeader || disableHeaderOnCurrentpage,
		footerDisabled = disableFooter || disableFooterOnCurrentpage,
		sidebarEnabled = enableSidebar || enableSidebarOnCurrentPage,
		overviewEnabled = enableOverview || enableOverviewOnCurrentPage;

	const theme = useTheme();
	const [isDesktop] = useMediaQuery([`(min-width:${theme.breakpoint.desktop})`]);

	const [showSidebar, setShowSidebar] = useState(false);

	useEffect(() => {
		const base = document.title.split('|')[0];
		if (title) {
			document.title = `${title} | ${base}`;
		} else {
			document.title = base;
		}
	}, [title]);

	const headerProps = {
		contents: headerContents,
		showSidebar,
		setShowSidebar,
		isDesktop,
	};

	const sidebarProps = {
		contents: sidebarContentsOnCurrentPage || sidebarContents,
	};

	const sidebarMobileProps = {
		sidebarContents: sidebarContentsOnCurrentPage || sidebarContents,
		headerContents,
		showSidebar,
		setShowSidebar,
		sidebarEnabled,
		isDesktop,
	};

	return (
		<LayoutStyled type="col" className={`${headerDisabled ? 'headerDisabled' : ''}`} {...rest}>
			{!headerDisabled && <Header {...headerProps} />}
			<Container type="row" width="100%" rowCenter>
				{sidebarEnabled && <Sidebar {...sidebarProps} />}
				<SidebarMobile {...sidebarMobileProps} />
				<Container
					type="col"
					width="100%"
					className={`documentContainer ${
						sidebarEnabled || overviewEnabled ? 'sidebarOrOverviewEnabled' : ''
					}`}
				>
					{children}
				</Container>
				{overviewEnabled && <Overview />}
			</Container>
			{!footerDisabled && <Footer contents={footerContents} />}
		</LayoutStyled>
	);
};

export default Layout;
