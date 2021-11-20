import React, { useEffect, useState } from 'react';
import { Container } from '../../index';
import MenuBarStyled from './MenuBarStyled';

const MenuBar = ({ showSidebar, ...rest }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (showSidebar) {
			setMenuOpen(true);
		} else {
			setMenuOpen(false);
		}
	}, [showSidebar]);

	return (
		<MenuBarStyled type="col" {...rest}>
			<Container
				type="col"
				width="3rem"
				height="3rem"
				rowCenter
				colCenter
				className="menu"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<div className={`bar ${menuOpen ? 'menuOpen' : ''}`} />
				<div className={`bar ${menuOpen ? 'menuOpen' : ''}`} />
				<div className={`bar ${menuOpen ? 'menuOpen' : ''}`} />
			</Container>
		</MenuBarStyled>
	);
};

export default MenuBar;
