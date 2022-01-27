import React from 'react';
import InlineCodeStyled from './InlineCodeStyled';
import { useColorMode } from '../../index';

const InlineCode = ({ width, height, color, children, ...rest }) => {
	const { colorMode } = useColorMode();
	return (
		<InlineCodeStyled
			width={width}
			height={height}
			color={color}
			colorMode={colorMode}
			{...rest}
		>
			{children}
		</InlineCodeStyled>
	);
};

export default InlineCode;
