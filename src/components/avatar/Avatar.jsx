import React from 'react';
import { AvatarContainerStyled, AvatarStyled } from './AvatarStyled';

const Avatar = ({ width, height, src, alt, badge, ...rest }) => {
	return (
		<AvatarContainerStyled>
			<AvatarStyled width={width} height={height} src={src} alt={alt} {...rest} />
			{badge}
		</AvatarContainerStyled>
	);
};

export default Avatar;
