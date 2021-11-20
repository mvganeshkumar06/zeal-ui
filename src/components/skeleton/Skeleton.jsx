import React from 'react';
import { BoxSkeletonStyled, RoundSkeletonStyled } from './SkeletonStyled';

const Skeleton = ({ width, height, type, children, ...rest }) => {
	if (type === 'box') {
		return (
			<BoxSkeletonStyled width={width} height={height} {...rest}>
				{children}
			</BoxSkeletonStyled>
		);
	} else if (type === 'round') {
		return (
			<RoundSkeletonStyled width={width} height={height} {...rest}>
				{children}
			</RoundSkeletonStyled>
		);
	}
};

export default Skeleton;
