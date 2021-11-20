import React, { forwardRef } from 'react';
import ContainerStyled from './ContainerStyled';

const Container = forwardRef(
	(
		{
			styledAs,
			width,
			height,
			type,
			rowStart,
			rowEnd,
			rowCenter,
			rowBetween,
			rowAround,
			rowEven,
			colStart,
			colEnd,
			colCenter,
			colBetween,
			colAround,
			colEven,
			withBorder,
			scrollAuto,
			children,
			...rest
		},
		ref,
	) => {
		return (
			<ContainerStyled
				ref={ref}
				as={styledAs}
				width={width}
				height={height}
				type={type}
				rowStart={rowStart}
				rowEnd={rowEnd}
				rowCenter={rowCenter}
				rowBetween={rowBetween}
				rowAround={rowAround}
				rowEven={rowEven}
				colStart={colStart}
				colEnd={colEnd}
				colCenter={colCenter}
				colBetween={colBetween}
				colAround={colAround}
				colEven={colEven}
				withBorder={withBorder}
				scrollAuto={scrollAuto}
				children
				{...rest}
			>
				{children}
			</ContainerStyled>
		);
	},
);

export default Container;
