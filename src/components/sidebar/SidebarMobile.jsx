import React, { useState, useEffect } from 'react';
import { Container, Text, List, ListItem, Button, Image, Divider } from '../../index';
import { Arrow } from '../../icons/index';
import SidebarMobileStyled from './SidebarMobileStyled';
import useClient from '../../hooks/use-client';

const getHeaderContentsAndLogMissingProperties = (headerContents, validHeaderContents) => {
	if (headerContents && headerContents.links) {
		for (const item of headerContents.links) {
			if (!item.item || !item.to || !item.linkType || !item.position) {
				console.log(
					'Zeal UI : In headerContents.links[i], the property item, to, linkType or position is missing',
				);
			} else {
				validHeaderContents.push(item);
			}
		}
	} else {
		console.log('Zeal UI : headerContents or headerContents.links is missing');
	}
};

const getSidebarContentsAndLogMissingProperties = (sidebarContents, validSidebarContents) => {
	if (sidebarContents && sidebarContents.links) {
		for (const link of sidebarContents.links) {
			if (!link.label) {
				console.log('Zeal UI : In sidebarContents.links[i], the property label is missing');
			} else {
				const currLink = {
					label: link.label,
				};
				if (!link.items) {
					validSidebarContents.push(currLink);
				} else {
					currLink.items = [];
					for (const linkItem of link.items) {
						if (!linkItem.item || !linkItem.to) {
							console.log(
								'Zeal UI : In sidebarContents.links[i].items[j], the property item or to is missing',
							);
						} else {
							currLink.items.push(linkItem);
						}
					}
					validSidebarContents.push(currLink);
				}
			}
		}
	} else {
		console.log('Zeal UI : sidebarContents or sidebarContents.links is missing');
	}
};

const SidebarMobile = ({
	sidebarContents,
	headerContents,
	showSidebar,
	setShowSidebar,
	sidebarEnabled,
	isDesktop,
}) => {
	const validHeaderContents = [];
	getHeaderContentsAndLogMissingProperties(headerContents, validHeaderContents);

	const validSidebarContents = [];
	if (sidebarEnabled) {
		getSidebarContentsAndLogMissingProperties(sidebarContents, validSidebarContents);
	}

	const [showHeaderMenu, setShowHeaderMenu] = useState(true);

	useEffect(() => {
		if (isDesktop) {
			setShowSidebar(false);
		}
	}, [isDesktop]);

	const isClient = useClient();

	return (
		<SidebarMobileStyled
			type="col"
			width="18rem"
			height="100%"
			rowCenter
			position="left"
			isOpen={showSidebar}
			onClickAway={() => setShowSidebar(false)}
		>
			<Container
				type="row"
				width="95%"
				height="4rem"
				colCenter
				className="sidebarMobileHeader"
			>
				<Container type="row" width="auto" height="100%" colCenter>
					{headerContents && headerContents.logo && (
						<Image
							src={headerContents.logo.src}
							alt={headerContents.logo.alt}
							width="2.5rem"
							height="2.5rem"
							className="sidebarMobileLogo"
						/>
					)}
					{headerContents && headerContents.title && (
						<Text bold className="sidebarMobileTitle">
							{headerContents.title}
						</Text>
					)}
					<Arrow
						type="left"
						withBorder
						onClick={() => setShowSidebar(false)}
						className="sidebarMobileCloseArrow"
					/>
				</Container>
			</Container>
			<Divider className="sidebarMobileDivider" />
			{sidebarEnabled && (
				<Container type="row" width="100%" height="auto" colCenter>
					<Button
						width="50%"
						className={`sidebarMobileBtn ${
							showHeaderMenu ? 'sidebarMobileBtnActive' : ''
						}`}
						onClick={() => setShowHeaderMenu(true)}
					>
						Header Menu
					</Button>
					<Button
						width="50%"
						className={`sidebarMobileBtn  ${
							!showHeaderMenu ? 'sidebarMobileBtnActive' : ''
						}`}
						onClick={() => setShowHeaderMenu(false)}
					>
						Sidebar
					</Button>
				</Container>
			)}
			{showHeaderMenu ? (
				<Container type="col" width="100%" className="sidebarMobileTabContainer">
					<List type="link" className="sidebarMobileList">
						{validHeaderContents.map(({ item, to, linkType }) => {
							if (linkType === 'external') {
								return (
									<ListItem key={item} className="sidebarMobileListItem">
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
										className="sidebarMobileListItem"
									>
										<a href={to}>{item}</a>
									</ListItem>
								);
							}
						})}
					</List>
				</Container>
			) : (
				sidebarEnabled && (
					<Container type="col" width="100%" className="sidebarMobileTabContainer">
						{validSidebarContents.map(({ label, items }) => (
							<Container type="col" width="100%" key={label}>
								<Text className="sidebarMobileText">{label}</Text>
								{items && (
									<List type="link" className="sidebarMobileList">
										{items.map(({ item, to }) => (
											<ListItem
												key={item}
												active={isClient && window.location.pathname === to}
												className="sidebarMobileListItem"
											>
												<a href={to}>{item}</a>
											</ListItem>
										))}
									</List>
								)}
							</Container>
						))}
					</Container>
				)
			)}
		</SidebarMobileStyled>
	);
};

export default SidebarMobile;
