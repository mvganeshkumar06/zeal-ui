import React from 'react';
import InlineCodeStyled from './InlineCodeStyled';

const InlineCode = ({ width, height, color, children, ...rest }) => {
	return (
		<InlineCodeStyled width={width} height={height} color={color} {...rest}>
			{children}
		</InlineCodeStyled>
	);
};

export default InlineCode;
