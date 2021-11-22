import React, { useState } from 'react';
import { Container, Text, List, ListItem, Button, Image, Divider } from '../../index';
import { Arrow } from '../../icons/index';
import SidebarMobileStyled from './SidebarMobileStyled';
import useClient from '../../hooks/use-client';

const getSidebarContentsAndLogMissingProperties = (
	sidebarContents,
	validSidebarContents,
	sidebarLabel,
) => {
	if (sidebarContents && sidebarContents.links) {
		for (const link of sidebarContents.links) {
			if (!link.label) {
				console.log('Zeal UI : In sidebarContents.links[i], the property label is missing');
			} else {
				sidebarLabel[link.label] = false;
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

const SidebarMobile = ({
	sidebarContents,
	headerContents,
	showSidebar,
	setShowSidebar,
	sidebarEnabled,
}) => {
	const validSidebarContents = [],
		sidebarLabel = {};
	getSidebarContentsAndLogMissingProperties(sidebarContents, validSidebarContents, sidebarLabel);

	const validHeaderContents = [];
	getHeaderContentsAndLogMissingProperties(headerContents, validHeaderContents);

	const [openSidebarItem, setOpenSidebarItem] = useState(sidebarLabel);
	const [showHeaderMenu, setShowHeaderMenu] = useState(!sidebarEnabled);

	const toggleContent = (key) => {
		if (openSidebarItem.hasOwnProperty(key)) {
			setOpenSidebarItem({
				...openSidebarItem,
				[key]: !openSidebarItem[key],
			});
		}
	};

	const isClient = useClient();

	return (
		<SidebarMobileStyled
			type="col"
			width="18rem"
			height="100%"
			position="left"
			isOpen={showSidebar}
			onClickAway={() => setShowSidebar(false)}
		>
			<Container
				type="row"
				width="100%"
				height="4rem"
				rowBetween
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
				</Container>
			</Container>
			<Divider />
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
				<Container type="col" width="100%" height="100%">
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
										className={`sidebarMobileListItem ${
											isClient && window.location.pathname === to
												? 'sidebarMobileListItemActive'
												: ''
										}`}
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
					<Container type="col" width="100%" height="100%">
						{validSidebarContents.map((content) => (
							<Container type="col" width="100%" key={content.label}>
								<Container
									type="row"
									width="100%"
									height="auto"
									rowBetween
									colCenter
									onClick={() => toggleContent(content.label)}
									className={`${
										content.items?.length > 0
											? 'sidebarMobileLabel'
											: 'sidebarMobileText'
									}`}
								>
									<Text width="90%" height="auto">
										{content.label}
									</Text>
									{content.items?.length > 0 &&
										(openSidebarItem[content.label] ? (
											<Arrow type="bottom" />
										) : (
											<Arrow type="right" />
										))}
								</Container>
								{content.items && openSidebarItem[content.label] && (
									<List type="link" className="sidebarMobileList">
										{content.items.map(({ item, to }) => (
											<ListItem
												key={item}
												className={`sidebarMobileListItem ${
													isClient && window.location.pathname === to
														? 'sidebarMobileListItemActive'
														: ''
												}`}
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
