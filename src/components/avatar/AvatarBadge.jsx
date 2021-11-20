import React from 'react';
import AvatarBadgeStyled from './AvatarBadgeStyled';

const AvatarBadge = ({ width, height, color, ...rest }) => {
	return <AvatarBadgeStyled width={width} height={height} color={color} {...rest} />;
};

export default AvatarBadge;
