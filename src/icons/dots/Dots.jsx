import React, { useState } from 'react';
import { Container } from '../../index';
import DotsStyled from './DotsStyled';

const VerticalDots = ({ type, ...rest }) => {
	const [isDotsActive, setIsDotsActive] = useState(false);
	return (
		<DotsStyled type="col" {...rest}>
			<Container
				type={type === 'horizontal' ? 'row' : 'col'}
				width="2rem"
				height="2rem"
				rowCenter
				colCenter
				className="dotsContainer"
				onClick={() => setIsDotsActive(!isDotsActive)}
			>
				<div className={`dots ${isDotsActive ? 'dotsActive' : ''}`} />
				<div className={`dots ${isDotsActive ? 'dotsActive' : ''}`} />
				<div className={`dots ${isDotsActive ? 'dotsActive' : ''}`} />
			</Container>
		</DotsStyled>
	);
};

export default VerticalDots;
