import React from 'react';
import BadgeStyled from './BadgeStyled';

const Badge = ({ width, height, color, children, ...rest }) => {
	return (
		<BadgeStyled width={width} height={height} color={color} {...rest}>
			{children}
		</BadgeStyled>
	);
};

export default Badge;
