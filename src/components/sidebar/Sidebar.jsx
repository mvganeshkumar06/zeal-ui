import React, { useState } from 'react';
import { Container, Text, List, ListItem } from '../../index';
import { Arrow } from '../../icons/index';
import SidebarStyled from './SidebarStyled';
import useClient from '../../hooks/use-client';

const getSidebarContentsAndLogMissingProperties = (contents, sidebarContents, sidebarLabel) => {
	if (contents && contents.links) {
		for (const link of contents.links) {
			if (!link.label) {
				console.log({
					message: 'In sidebarContents.links[i], the property label is missing',
				});
			} else {
				sidebarLabel[link.label] = false;
				const currLink = {
					label: link.label,
				};
				if (!link.items) {
					sidebarContents.push(currLink);
				} else {
					currLink.items = [];
					for (const linkItem of link.items) {
						if (!linkItem.item || !linkItem.to) {
							console.log({
								message:
									'In sidebarContents.links[i].items[j], the property item or to is missing',
							});
						} else {
							currLink.items.push(linkItem);
						}
					}
					sidebarContents.push(currLink);
				}
			}
		}
	} else {
		console.log({
			message: 'sidebarContents or sidebarContents.links is missing',
		});
	}
};

const Sidebar = ({ contents, showSidebar, ...rest }) => {
	const sidebarContents = [],
		sidebarLabel = {};
	getSidebarContentsAndLogMissingProperties(contents, sidebarContents, sidebarLabel);

	const [showContents, setShowContents] = useState(sidebarLabel);
	const toggleContent = (key) => {
		if (showContents.hasOwnProperty(key)) {
			setShowContents({ ...showContents, [key]: !showContents[key] });
		}
	};

	const isClient = useClient();

	return (
		<>
			{showSidebar && (
				<SidebarStyled styledAs="aside" type="col" scrollAuto {...rest}>
					{sidebarContents.map((content) => (
						<Container type="col" width="100%" key={content.label}>
							<Container
								type="row"
								width="100%"
								height="auto"
								rowBetween
								colCenter
								onClick={() => toggleContent(content.label)}
								className={`${
									content.items?.length > 0 ? 'sidebarLabel' : 'sidebarText'
								}`}
							>
								<Text width="100%" height="auto">
									{content.label}
								</Text>
								{content.items?.length > 0 &&
									(showContents[content.label] ? (
										<Arrow type="bottom" />
									) : (
										<Arrow type="right" />
									))}
							</Container>
							{content.items && showContents[content.label] && (
								<List type="link" className="sidebarList">
									{content.items.map(({ item, to }) => (
										<ListItem
											key={item}
											className={`sidebarListItem ${
												isClient && window.location.pathname === to
													? 'sidebarListItemActive'
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
				</SidebarStyled>
			)}
		</>
	);
};

export default Sidebar;
