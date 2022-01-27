import React from 'react';
import { Container, Text, Image, ColorModeSwitch, List, ListItem } from '../../index';
import { MenuBar } from '../../icons';
import HeaderStyled from './HeaderStyled';
import useClient from '../../hooks/use-client';

const getHeaderContentsAndLogMissingProperties = (contents, leftItems, rightItems) => {
	if (contents && contents.links) {
		for (const item of contents.links) {
			if (!item.item || !item.to || !item.linkType || !item.position) {
				console.log(
					'Zeal UI : In headerContents.links[i], the property item, to, linkType or position is missing',
				);
			} else {
				if (item.position === 'left') {
					leftItems.push(item);
				} else if (item.position === 'right') {
					rightItems.push(item);
				}
			}
		}
	} else {
		console.log('Zeal UI : headerContents or headerContents.links is missing');
	}
};

const Header = ({ contents, showSidebar, setShowSidebar, isDesktop, ...rest }) => {
	const leftItems = [],
		rightItems = [];
	getHeaderContentsAndLogMissingProperties(contents, leftItems, rightItems);

	const isClient = useClient();

	return (
		<HeaderStyled
			styledAs="nav"
			type="row"
			width="100%"
			height="4rem"
			rowBetween
			colCenter
			{...rest}
		>
			<Container type="row" width="auto" height="100%" colCenter key="left">
				<MenuBar onClick={() => setShowSidebar(!showSidebar)} showSidebar={showSidebar} />
				{contents && contents.logo && (
					<Image
						src={contents.logo.src}
						alt={contents.logo.alt}
						width="2.5rem"
						height="2.5rem"
						className="headerLogo"
					/>
				)}
				{contents && contents.title && (
					<Text bold className="headerTitle">
						{contents.title}
					</Text>
				)}
				{isDesktop && (
					<List type="link" className="headerLinkContainer">
						{leftItems.map(({ to, item, linkType }) => {
							if (linkType === 'external') {
								return (
									<ListItem key={item} className="headerLinkItem">
										<a href={to} target="_blank" rel="noreferrer">
											{item}
										</a>
									</ListItem>
								);
							} else if (linkType === 'internal') {
								return (
									<ListItem
										key={item}
										active={isClient && window.location.pathname === to}
										className="headerLinkItem"
									>
										<a href={to}>{item}</a>
									</ListItem>
								);
							}
						})}
					</List>
				)}
			</Container>
			<Container type="row" width="auto" height="100%" colCenter key="right">
				{isDesktop && (
					<List type="link" className="headerLinkContainer">
						{rightItems.map(({ to, item, linkType }) => {
							if (linkType === 'external') {
								return (
									<ListItem key={item} className="headerLinkItem">
										<a href={to} target="_blank" rel="noreferrer">
											{item}
										</a>
									</ListItem>
								);
							} else if (linkType === 'internal') {
								return (
									<ListItem
										key={item}
										active={isClient && window.location.pathname === to}
										className="headerLinkItem"
									>
										<a href={to}>{item}</a>
									</ListItem>
								);
							}
						})}
					</List>
				)}
				<ColorModeSwitch className="colorModeSwitch" />
			</Container>
		</HeaderStyled>
	);
};

export default Header;
