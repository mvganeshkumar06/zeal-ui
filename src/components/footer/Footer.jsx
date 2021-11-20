import React from 'react';
import { Container, Text, Image, List, ListItem } from '../../index';
import FooterStyled from './FooterStyled';

const getFooterContentsAndLogMissingProperties = (contents, footerContents) => {
	if (contents && contents.links) {
		for (const link of contents.links) {
			if (!link.title || !link.items) {
				console.log({
					message: 'In footerContents.links[i], the property title or items is missing',
				});
			} else {
				const currLink = {
					title: link.title,
					items: [],
				};
				for (const item of link.items) {
					if (!item.item || !item.to || !item.linkType) {
						console.log({
							message:
								'In footerContents.links[i].items[j], the property item, to or linkType is missing',
						});
					} else {
						currLink.items.push(item);
					}
				}
				footerContents.push(currLink);
			}
		}
	} else {
		console.log({
			message: 'footerContents or footerContents.links is missing',
		});
	}
	return footerContents;
};

const Footer = ({ contents, ...rest }) => {
	const footerContents = [];
	getFooterContentsAndLogMissingProperties(contents, footerContents);

	return (
		<FooterStyled styledAs="footer" type="col" width="100%" colCenter {...rest}>
			<Container type="col" width="100%" rowCenter className="footerLinkContainer">
				{footerContents.map(({ title, items }) => {
					return (
						<Container
							type="col"
							width="100%"
							rowCenter
							className="footerLinkItem"
							key={title}
						>
							<Text bold>{title}</Text>
							<List type="link">
								{items.map(({ item, to, linkType }) => {
									if (linkType === 'external') {
										return (
											<ListItem key={item} className="footerLink">
												<a href={to} target="_blank" rel="noreferrer">
													{item}
												</a>
											</ListItem>
										);
									} else if (linkType === 'internal') {
										return (
											<ListItem key={item} className="footerLink">
												<a href={to}>{item}</a>
											</ListItem>
										);
									}
								})}
							</List>
						</Container>
					);
				})}
			</Container>
			<Container type="col" width="100%" rowCenter>
				{contents && contents.logo && (
					<Image
						src={contents.logo.src}
						alt={contents.logo.alt}
						width="4rem"
						height="4rem"
						className="footerLogo"
					/>
				)}
				{contents && contents.title && <Text bold>{contents.title}</Text>}
				{contents && contents.copyright && <Text>{contents.copyright}</Text>}
			</Container>
		</FooterStyled>
	);
};

export default Footer;
