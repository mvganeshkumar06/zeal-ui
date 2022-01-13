import React, { useEffect, useState } from 'react';
import { List, ListItem, Text } from '../../index';
import OverviewStyled from './OverviewStyled';

const getOverviewContents = (setOverviewContents) => {
	const overviewContents = [],
		distanceOfTextNodes = {};
	const headings = document.querySelectorAll('h2, h3');
	if (!headings) {
		return;
	}
	const headNodes = [...headings];
	for (const node of headNodes) {
		const text = node.textContent,
			tag = node.tagName;
		const id = text.toLowerCase().split(' ').join('-');
		node.setAttribute('id', `${id}`);
		distanceOfTextNodes[id] = node.getBoundingClientRect().top;
		overviewContents.push({
			key: id,
			label: (
				<a
					href={`#${id}`}
					className={`${tag === 'H3' ? 'subHeading2' : ''} ${
						distanceOfTextNodes[id] >= 20 && distanceOfTextNodes[id] <= 100
							? 'overviewListItemActive'
							: ''
					}`}
				>
					{text}
				</a>
			),
		});
	}
	setOverviewContents(overviewContents);
};

const Overview = ({ ...rest }) => {
	const [overviewContents, setOverviewContents] = useState([]);

	useEffect(() => {
		getOverviewContents(setOverviewContents);
	}, []);

	const handlePageScroll = () => {
		getOverviewContents(setOverviewContents);
	};

	useEffect(() => {
		window.addEventListener('scroll', handlePageScroll);
		return () => {
			window.removeEventListener('scroll', handlePageScroll);
		};
	}, []);

	return (
		<OverviewStyled styledAs="aside" type="col" scrollAuto {...rest}>
			<Text bold className="overviewTitle">
				ON THIS PAGE
			</Text>
			<List type="link" className="overviewList">
				{overviewContents.map((content) => (
					<ListItem key={content.key}>{content.label}</ListItem>
				))}
			</List>
		</OverviewStyled>
	);
};

export default Overview;
