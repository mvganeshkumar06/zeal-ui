import React from 'react';
import { Container, Text, List, ListItem } from '../../index';
import SidebarStyled from './SidebarStyled';
import useClient from '../../hooks/use-client';

const getSidebarContentsAndLogMissingProperties = (contents, sidebarContents) => {
	if (contents && contents.links) {
		for (const link of contents.links) {
			if (!link.label) {
				console.log('Zeal UI : In sidebarContents.links[i], the property label is missing');
			} else {
				const currLink = {
					label: link.label,
				};
				if (!link.items) {
					sidebarContents.push(currLink);
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
					sidebarContents.push(currLink);
				}
			}
		}
	} else {
		console.log('Zeal UI : sidebarContents or sidebarContents.links is missing');
	}
};

const Sidebar = ({ contents }) => {
	const sidebarContents = [];
	getSidebarContentsAndLogMissingProperties(contents, sidebarContents);

	const isClient = useClient();

	return (
		<SidebarStyled styledAs="aside" type="col" scrollAuto>
			{sidebarContents.map(({ label, items }) => (
				<Container type="col" width="100%" key={label}>
					<Text className="sidebarText">{label}</Text>
					{items && (
						<List type="link" className="sidebarList">
							{items.map(({ item, to }) => (
								<ListItem
									key={item}
									active={isClient && window.location.pathname === to}
									className="sidebarListItem"
								>
									<a href={to}>{item}</a>
								</ListItem>
							))}
						</List>
					)}
				</Container>
			))}
		</SidebarStyled>
	);
};

export default Sidebar;
