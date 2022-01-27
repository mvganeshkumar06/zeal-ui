import React from 'react';
import AvatarBadgeStyled from './AvatarBadgeStyled';

const AvatarBadge = ({ width, height, bottom, right, color, ...rest }) => {
	return (
		<AvatarBadgeStyled
			width={width}
			height={height}
			bottom={bottom}
			right={right}
			color={color}
			{...rest}
		/>
	);
};

export default AvatarBadge;
